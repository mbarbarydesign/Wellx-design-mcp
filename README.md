# Wellx Unified Design System

One hub, four surfaces. Everything in this repo is the **single source of truth** for how Wellx tools and products look; every other artifact is generated from or synced to it.

| Surface | Consumer | Mechanism |
|---|---|---|
| Figma "Foundations" + "Wellx Unified Design System" files | designers | Figma team library (publish from Figma) |
| `tokens/` → `@wellx/design-tokens` | app builds | npm package: CSS variables + Tailwind preset |
| `mcp/` → `@wellx/design-system-mcp` | AI agents | MCP server: rules, recipes, tokens, search, validate |
| `docs/` (site) | humans | documentation site — host via GitHub Pages / Vercel; run locally with any static server (`npx serve docs`) |

## Using the MCP (agents)

**Testing phase — straight from GitHub, no hosting.** Add to any repo's `.mcp.json` (or `claude mcp add`):
```json
{
  "mcpServers": {
    "wellx-design-system": {
      "command": "npx",
      "args": ["-y", "github:mbarbarydesign/Wellx-design-mcp"]
    }
  }
}
```
Every new session installs and runs the latest commit of `main` — push an update and the next session anyone starts is current. Covers Claude Code and Claude Desktop. (Local dev inside this repo: `"command": "node", "args": ["mcp/server.mjs"]`.)

**Production phase — remote connector.** Deploy the same tool core behind Streamable HTTP on Vercel, then add the URL once as a custom connector in the Claude workspace settings — that extends coverage to claude.ai web/mobile and Cowork. Repos then swap the npx entry for the URL.

Tools: `get_principles` · `get_rules(topic)` · `get_component_spec(name)` · `get_tokens(category, mode)` · `search(query)` · `validate(code)` · `get_changelog`.

Each portal repo should also keep the thin pointer skill (`skill/SKILL.md`) in `.claude/skills/wellx-design-system/` so agents know to call the server.

## Using the tokens (builds)

```js
// tailwind.config.js
module.exports = { presets: [require('@wellx/design-tokens/wellx-tailwind-preset.cjs')], darkMode: ['class'], content: [...] };
```
```css
/* app entry */
@import '@wellx/design-tokens/wellx-tokens.css';
```

## Updating the system

1. Designer edits variables in the Figma **Foundations** file → publishes the library.
2. Run the sync (`scripts/sync-from-figma.mjs` with `FIGMA_TOKEN`, or a Claude session with the Figma MCP) → PR with the token diff + CHANGELOG entry.
3. Merge → regenerate `tokens/*.css|cjs` from `wellx-tokens.json`, bump versions, publish npm packages, redeploy the MCP + docs.
4. Portal repos pick up tokens via a dependency bump; agents are current immediately via the MCP.

Rules changes (spec/*.md) follow the same PR flow — the MCP serves them live; no agent-side update needed.

## Governance
- CODEOWNERS on `tokens/` and `spec/` — design lead approves every change.
- Renaming/removing a token = **major** version + migration note in CHANGELOG.
- New components enter `spec/components.md` only with a reviewed reference implementation.

## Documentation site

`docs/` is a zero-build static site: What's new, Color tokens, per-component pages (spec + how to use + code), install guide, and the **Design System Creator** (enter primary/secondary colors, get one design-system.json — guidelines + all tokens — with generated 25-950 scales). `docs/one-pager.html` is the printable single-page overview.

Ship an update: edit `docs/data.js` (WHATS_NEW + VERSION), `CHANGELOG.md`, and the spec/tokens as needed - one PR updates the MCP, the site, and the changelog together.
