import pages from "@hono/vite-cloudflare-pages";
import honox from "honox/vite";
import client from "honox/vite/client";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      plugins: [client()],
      base: "/block-studio/",
    };
  } else {
    return {
      plugins: [honox(), pages()],
      base: "/block-studio/",
    };
  }
});
