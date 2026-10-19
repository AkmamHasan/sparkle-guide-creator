// Server-side proxy for the IELTS Shuru landing page, served at /ieltsshuru.
export const IELTS_UPSTREAM = "https://ielts-shuru-book.akmamhasan01.chatgpt.site";
const PREFIX = "/ieltsshuru";
const PUBLIC_URL = "https://akmam.info/ieltsshuru";

const PASS_HEADERS = ["content-type", "cache-control", "etag", "last-modified"];

function rewriteRelative(url: string): string {
  if (/^(#|[a-z][a-z0-9+.-]*:|\/\/|data:)/i.test(url) || url === "") return url;
  if (url.startsWith(PREFIX + "/")) return url;
  if (url.startsWith("/")) return PREFIX + url;
  return `${PREFIX}/${url.replace(/^\.\//, "")}`;
}

export function rewriteHtml(html: string): string {
  let out = html.replace(
    /\b(src|href|poster|srcset)=(["'])([^"']*)\2/gi,
    (_m, attr: string, q: string, val: string) => {
      if (attr.toLowerCase() === "srcset") {
        const v = val
          .split(",")
          .map((part) => {
            const [u, ...rest] = part.trim().split(/\s+/);
            return [rewriteRelative(u), ...rest].join(" ");
          })
          .join(", ");
        return `${attr}=${q}${v}${q}`;
      }
      return `${attr}=${q}${rewriteRelative(val)}${q}`;
    },
  );
  // Upstream absolute URLs (og:image etc.) -> akmam.info/ieltsshuru/...
  out = out.split(IELTS_UPSTREAM + "/").join(PUBLIC_URL + "/");
  // Canonical + og:url point at the public page itself.
  out = out.replace(/<link[^>]*rel=["']canonical["'][^>]*>/gi, "");
  out = out.replace(/<meta[^>]*property=["']og:url["'][^>]*>/gi, "");
  out = out.replace(
    /<head([^>]*)>/i,
    `<head$1>\n<link rel="canonical" href="${PUBLIC_URL}">\n<meta property="og:url" content="${PUBLIC_URL}">`,
  );
  return out;
}

export function rewriteJs(js: string): string {
  // Relative asset strings would resolve against /ieltsshuru (-> /assets/...), so anchor them.
  return js
    .replace(/(["'`])(?:\.\/)?assets\//g, `$1${PREFIX}/assets/`)
    .split(IELTS_UPSTREAM + "/")
    .join(PREFIX + "/");
}

export function rewriteCss(css: string): string {
  return css.replace(/url\(\s*(["']?)\/(?!\/)([^)"']*)\1\s*\)/g, `url($1${PREFIX}/$2$1)`);
}

export async function proxyIelts(path: string, request: Request): Promise<Response> {
  const safe = path.replace(/\.\.+/g, "").replace(/^\/+/, "");
  const reqUrl = new URL(request.url);
  const upstreamUrl = `${IELTS_UPSTREAM}/${safe}${reqUrl.search}`;
  let res: Response;
  try {
    res = await fetch(upstreamUrl, {
      headers: { "user-agent": "akmam.info-proxy", accept: request.headers.get("accept") ?? "*/*" },
      redirect: "follow",
    });
  } catch {
    return new Response("IELTS Shuru is temporarily unavailable.", { status: 502 });
  }

  const headers = new Headers();
  for (const h of PASS_HEADERS) {
    const v = res.headers.get(h);
    if (v) headers.set(h, v);
  }
  const type = (res.headers.get("content-type") ?? "").toLowerCase();

  if (type.includes("text/html")) {
    headers.delete("etag");
    headers.set("cache-control", "public, max-age=300");
    return new Response(rewriteHtml(await res.text()), { status: res.status, headers });
  }
  if (type.includes("javascript")) {
    headers.delete("etag");
    return new Response(rewriteJs(await res.text()), { status: res.status, headers });
  }
  if (type.includes("text/css")) {
    headers.delete("etag");
    return new Response(rewriteCss(await res.text()), { status: res.status, headers });
  }
  return new Response(res.body, { status: res.status, headers });
}
