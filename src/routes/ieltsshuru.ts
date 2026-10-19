import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { proxyIelts } from "@/lib/ielts-proxy";

export const Route = createFileRoute("/ieltsshuru")({
  server: {
    handlers: {
      GET: async ({ request }) => proxyIelts("", request),
    },
  },
});
