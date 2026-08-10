#!/usr/bin/env node
/**
 * Sync tokens from the Figma "Foundations" library into tokens/wellx-tokens.json.
 * Requires FIGMA_TOKEN (a personal access token with file read scope).
 *
 *   FIGMA_TOKEN=xxx node scripts/sync-from-figma.mjs
 *
 * Alternative: run a Claude session with the Figma MCP connected and ask it to
 * regenerate tokens/wellx-tokens.json from file wR3QogmLiM6We2BfuiCMCO — that is
 * exactly how v2.1.0 was produced.
 */
const FILE_KEY = "wR3QogmLiM6We2BfuiCMCO"; // Foundations
const token = process.env.FIGMA_TOKEN;
if (!token) { console.error("Set FIGMA_TOKEN"); process.exit(1); }

const res = await fetch(`https://api.figma.com/v1/files/${FILE_KEY}/variables/local`, {
  headers: { "X-Figma-Token": token },
});
if (!res.ok) { console.error(`Figma API ${res.status}: ${await res.text()}`); process.exit(1); }
const { meta } = await res.json();

// TODO: map meta.variableCollections + meta.variables into the wellx-tokens.json
// shape (see tokens/wellx-tokens.json for the target structure), resolve aliases,
// convert Figma RGBA (0-1) to hex, and write the file + regenerate the CSS/preset.
// Kept as a template until CI owns this; diff the output in a PR, never push direct.
console.log(`Fetched ${Object.keys(meta.variables).length} variables from Foundations.`);
