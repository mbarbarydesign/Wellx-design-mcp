#!/usr/bin/env node
/**
 * Wellx Unified Design System — MCP server, stdio entry.
 * Local use: npx -y github:mbarbarydesign/Wellx-design-mcp
 * The server itself lives in create-server.mjs (shared with the HTTP endpoint).
 */
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createServer } from "./create-server.mjs";

const transport = new StdioServerTransport();
await createServer().connect(transport);
