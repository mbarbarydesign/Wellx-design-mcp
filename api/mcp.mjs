/**
 * Wellx Unified Design System — remote MCP endpoint (Streamable HTTP).
 *
 * Deployed by Vercel as /api/mcp. Stateless: every POST gets a fresh server +
 * transport, so no session store is needed and the spec/token files are read
 * straight from the deployment — a push to main redeploys and updates every
 * connected client. Add it in Claude as a custom connector with this URL.
 */
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { createServer } from "../mcp/create-server.mjs";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept, Authorization, Mcp-Session-Id, MCP-Protocol-Version");
  res.setHeader("Access-Control-Expose-Headers", "Mcp-Session-Id");

  if (req.method === "OPTIONS") { res.statusCode = 204; res.end(); return; }
  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ jsonrpc: "2.0", error: { code: -32000, message: "Method not allowed. This is a stateless MCP endpoint — use POST." }, id: null }));
    return;
  }

  const transport = new StreamableHTTPServerTransport({
    sessionIdGenerator: undefined, // stateless
    enableJsonResponse: true,
  });
  res.on("close", () => transport.close());
  await createServer().connect(transport);
  await transport.handleRequest(req, res, req.body);
}
