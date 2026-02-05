import { Hono } from "hono";
import { serveStatic } from "hono/bun";

const app = new Hono();

// Serve static files from public directory
app.use("/*", serveStatic({ root: "./public" }));

export default {
  port: 3340,
  fetch: app.fetch,
};
