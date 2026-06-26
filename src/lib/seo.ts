interface SeoProps {
  title: string;
  description: string;
  path?: string;
  jsonLd?: object | object[];
}

const BASE_URL = "https://akmam.info";

export function buildHead({ title, description, path = "/", jsonLd }: SeoProps) {
  const canonical = `${BASE_URL}${path}`;
  const scripts = jsonLd
    ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).map((obj) => ({
        type: "application/ld+json",
        children: JSON.stringify(obj),
      }))
    : undefined;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical },
      { property: "og:image", content: `${BASE_URL}/images/akmam-social-preview.png` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: `${BASE_URL}/images/akmam-social-preview.png` },
    ],
    links: [{ rel: "canonical", href: canonical }],
    scripts,
  };
}
