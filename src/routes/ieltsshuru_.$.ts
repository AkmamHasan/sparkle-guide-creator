import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { proxyIelts } from "@/lib/ielts-proxy";

export const Route = createFileRoute("/ieltsshuru_/$")({
  server: {
    handlers: {
      GET: async ({ request, params }) => proxyIelts(params._splat ?? "", request),
    },
  },
});
