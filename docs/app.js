/* Wellx Unified Design System — docs site app: routing, rendering, theme, creator. */
(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var page = $("#page");
  var esc = function (s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); };

  /* ---------- theme ---------- */
  var KEY = "wx-docs-theme";
  var themeBtns = document.querySelectorAll(".theme-toggle button");
  function applyTheme(mode) {
    if (mode === "light" || mode === "dark") document.documentElement.setAttribute("data-theme", mode);
    else { document.documentElement.removeAttribute("data-theme"); mode = "auto"; }
    themeBtns.forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.mode === mode)); });
  }
  themeBtns.forEach(function (b) {
    b.addEventListener("click", function () {
      try { localStorage.setItem(KEY, b.dataset.mode); } catch (e) {}
      applyTheme(b.dataset.mode);
    });
  });
  try { var saved = localStorage.getItem(KEY); if (saved === "light" || saved === "dark") applyTheme(saved); } catch (e) {}

  /* ---------- sidebar: components submenu + mobile ---------- */
  var sub = $("#componentsSub");
  var toggle = $("#componentsToggle");
  COMPONENTS.forEach(function (c) {
    var a = document.createElement("a");
    a.className = "nav-item";
    a.href = "#/components/" + c.slug;
    a.dataset.route = "components/" + c.slug;
    a.textContent = c.name;
    sub.appendChild(a);
  });
  function setComponentsOpen(open) {
    sub.classList.toggle("open", open);
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  }
  toggle.addEventListener("click", function () { setComponentsOpen(!sub.classList.contains("open")); });
  toggle.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle.click(); } });
  $("#menuBtn").addEventListener("click", function () { $("#sidebar").classList.toggle("open"); });
  $("#nav").addEventListener("click", function (e) { if (e.target.closest("a")) $("#sidebar").classList.remove("open"); });
  $("#versionChip").textContent = "v" + VERSION;

  /* ---------- shared render helpers ---------- */
  function head(eyebrow, title, lede) {
    return '<div class="page-head"><span class="eyebrow">' + eyebrow + "</span><h1>" + title + "</h1>" +
      (lede ? '<p class="lede">' + lede + "</p>" : "") + "</div>";
  }
  function codeblock(code, lang) {
    return '<div class="codeblock"><button class="copy-btn" data-copy>Copy</button><pre>' + esc(code) + "</pre></div>";
  }
  function specGrid(rows) {
    return '<div class="spec-grid">' + rows.map(function (r) {
      return '<div class="spec-item"><span>' + r[0] + "</span><span>" + r[1] + "</span></div>";
    }).join("") + "</div>";
  }
  function ddGrid(dos, donts) {
    var li = function (a) { return a.map(function (x) { return "<li>" + x + "</li>"; }).join(""); };
    return '<div class="dd-grid">' +
      '<div class="card dd do"><h3><span class="mark" style="background:var(--success)"></span>Do</h3><ul>' + li(dos) + "</ul></div>" +
      '<div class="card dd dont"><h3><span class="mark" style="background:var(--destructive)"></span>Don’t</h3><ul>' + li(donts) + "</ul></div></div>";
  }
  function strip(scale, withLabels) {
    var steps = Object.keys(scale);
    return '<div class="scale-strip">' + steps.map(function (k) {
      var lum = parseInt(scale[k].slice(1), 16);
      var light = ((lum >> 16 & 255) * 0.3 + (lum >> 8 & 255) * 0.59 + (lum & 255) * 0.11) > 150;
      return '<div style="background:' + scale[k] + '" title="' + k + " " + scale[k] + '">' +
        (withLabels ? '<i style="color:' + (light ? "#00000088" : "#ffffffaa") + '">' + k + "</i>" : "") + "</div>";
    }).join("") + "</div>";
  }

  /* ---------- pages ---------- */
  function renderWhatsNew() {
    return head("Overview", "What’s new", "Every shipped change to the design system, newest first. Patch = value change · minor = new token/component/rule · major = rename or removal (with migration notes).") +
      WHATS_NEW.map(function (r) {
        return '<div class="card release"><div class="release-head"><h3>v' + r.version + '</h3><span class="tag ' + r.kind + '">' + r.kind + "</span><time>" + r.date + "</time></div><ul>" +
          r.items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul></div>";
      }).join("");
  }

  function renderColors() {
    var h = head("Overview", "Color tokens",
      "All color comes from the Figma “Foundations” library (Wellx mode). Components consume the Semantics layer — never a primitive directly, never a raw hex. The brand accent is tenant-injected; sibling libraries re-theme the same token names.");
    h += '<section class="doc"><h2>Brand & accent scales</h2><p class="hint">Buttons and states use 500, links and hover use 600, tinted chips use 50/700. Accent scope: primary buttons · links · active tab underline · focus rings · chart lines · active filter pills — never nav chrome, hovers, or backgrounds.</p>';
    ["Brand", "Secondary", "Gray"].forEach(function (n) {
      h += '<div class="scale-block"><div class="scale-name"><span>Colors/' + n + '</span><span class="mono">25 → 950</span></div>' + strip(SCALES[n], true) + "</div>";
    });
    h += "</section>";
    h += '<section class="doc"><h2>Feedback & accent palettes</h2>';
    ["Error", "Warning", "Success", "Grayblue", "Teal", "Violet"].forEach(function (n) {
      h += '<div class="scale-block"><div class="scale-name"><span>Colors/' + n + '</span><span class="mono">25 → 950</span></div>' + strip(SCALES[n]) + "</div>";
    });
    h += "</section>";
    h += '<section class="doc"><h2>Semantics — Light / Dark</h2><p class="hint">The app-facing layer; each token aliases a primitive per mode. These map 1:1 onto the CSS variables in <code>@wellx/design-tokens</code>.</p><div class="card scroll-x"><table class="tok-table"><thead><tr><th>Token</th><th>Light</th><th>Dark</th><th>Use</th></tr></thead><tbody>';
    SEMANTICS_ROWS.forEach(function (r) {
      h += '<tr><td><code>' + r[0] + '</code></td><td><span class="sw-pair"><span class="sw" style="background:' + r[1] + '"></span><span class="mono">' + r[2] + '</span></span></td><td><span class="sw-pair"><span class="sw" style="background:' + r[3] + '"></span><span class="mono">' + r[4] + '</span></span></td><td style="color:var(--muted-fg)">' + r[5] + "</td></tr>";
    });
    h += "</tbody></table></div></section>";
    h += '<section class="doc"><h2>Status recipe</h2><p class="hint">50-tint background + 700 text + 500 dot (dark: 900 background + 300 text). Tone maps are fixed across tenants and products — centralize them in one module.</p><div class="demo">' +
      '<span class="pill" style="background:var(--t-brand-bg);color:var(--t-brand-fg)"><span class="dot" style="background:var(--t-brand-dot)"></span>Active</span>' +
      '<span class="pill" style="background:var(--t-warn-bg);color:var(--t-warn-fg)"><span class="dot" style="background:var(--t-warn-dot)"></span>Pending</span>' +
      '<span class="pill" style="background:var(--t-err-bg);color:var(--t-err-fg)"><span class="dot" style="background:var(--t-err-dot)"></span>Overdue</span>' +
      '<span class="pill" style="background:var(--t-succ-bg);color:var(--t-succ-fg)"><span class="dot" style="background:var(--t-succ-dot)"></span>Done</span></div></section>';
    h += '<section class="doc"><h2>Gradients</h2><p class="hint">Accent surfaces only (featured/hero, tier cards, promos) — always white text. Both ramps run 400 → 950 of their scale.</p><div class="demo" style="gap:12px">' +
      ['linear-gradient(90deg,#968EF4,#100D2F)', 'linear-gradient(180deg,#968EF4,#100D2F)', 'linear-gradient(90deg,#F8639A,#19060D)', 'linear-gradient(180deg,#F8639A,#19060D)'].map(function (g, i) {
        var names = ["brand-horizontal", "brand-vertical", "secondary-horizontal", "secondary-vertical"];
        return '<div style="flex:1;min-width:150px;height:80px;border-radius:12px;background:' + g + ';display:flex;align-items:flex-end;padding:10px"><b style="color:#fff;font-size:12px">' + names[i] + "</b></div>";
      }).join("") + "</div></section>";
    return h;
  }

  function renderComponent(c) {
    return head("Components", c.name, c.lede) +
      '<section class="doc"><h2>Example</h2><div class="demo">' + c.demo + "</div></section>" +
      '<section class="doc"><h2>Spec</h2>' + specGrid(c.spec) + "</section>" +
      '<section class="doc"><h2>How to use</h2>' + ddGrid(c.dos, c.donts) + "</section>" +
      '<section class="doc"><h2>Code</h2><p class="hint">Tailwind classes assume the <code>@wellx/design-tokens</code> preset; icons are Lucide.</p>' + codeblock(c.code) + "</section>";
  }

  function renderInstall() {
    var h = head("Resources", "How to install",
      "Three pieces, one source of truth: tokens for your build, the MCP server for your AI agents, and the Figma libraries for design. All ship from the wellx-design-system repo.");
    h += '<section class="doc"><h2>1 · Tokens — CSS variables + Tailwind preset</h2><p class="hint">Never retype a value. The preset maps semantic classes (<code>bg-primary</code>, <code>rounded-button</code>, <code>max-w-content</code>) onto the CSS variables; dark mode is the <code>.dark</code> class on <code>&lt;html&gt;</code>.</p>' +
      codeblock("npm install @wellx/design-tokens   # or copy tokens/ from the repo during the testing phase") +
      codeblock("// tailwind.config.js\nmodule.exports = {\n  presets: [require('@wellx/design-tokens/wellx-tailwind-preset.cjs')],\n  darkMode: ['class'],\n  content: ['./src/**/*.{ts,tsx,html}'],\n};") +
      codeblock("/* app entry css */\n@import '@wellx/design-tokens/wellx-tokens.css';") + "</section>";
    h += '<section class="doc"><h2>2 · MCP server — for AI agents</h2><p class="hint">Gives every agent live access to the rules, component recipes, token values, and a guardrail linter. Testing phase runs straight from the repo; no hosting needed.</p>' +
      codeblock('// .mcp.json (per project)  — or register once for your whole machine:\n// claude mcp add --scope user wellx-design-system -- node /path/to/wellx-design-system/mcp/server.mjs\n{\n  "mcpServers": {\n    "wellx-design-system": {\n      "command": "npx",\n      "args": ["-y", "github:Wellx-AI/wellx-design-system"]\n    }\n  }\n}') +
      '<p class="hint" style="margin-top:10px">Tools: <code>get_principles</code> · <code>get_rules(topic)</code> · <code>get_component_spec(name)</code> · <code>get_tokens(category, mode)</code> · <code>search(query)</code> · <code>validate(code)</code> · <code>get_changelog</code></p></section>';
    h += '<section class="doc"><h2>3 · Fonts</h2>' +
      codeblock("<link href=\"https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Alexandria:wght@400;500;600;700&display=swap\" rel=\"stylesheet\">") +
      '<p class="hint" style="margin-top:10px">Manrope for Latin UI; Alexandria for Arabic (RTL flips via <code>document.dir</code> — use logical utilities only).</p></section>';
    h += '<section class="doc"><h2>4 · Figma</h2><p class="hint">Designers enable the <strong>Foundations</strong> library (tokens/variables) and the <strong>Wellx Unified Design System</strong> file (sheet + components) as team libraries. White-labels use the parallel Foundations libraries — same token names, different values.</p></section>';
    return h;
  }

  /* ---------- creator ---------- */
  function hexToRgb(hex) {
    var n = parseInt(hex.slice(1), 16);
    return [n >> 16 & 255, n >> 8 & 255, n & 255];
  }
  function rgbToHex(r, g, b) {
    var h = function (v) { return Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, "0"); };
    return "#" + h(r) + h(g) + h(b);
  }
  function mix(a, b, t) { // t = share of b
    var A = hexToRgb(a), B = hexToRgb(b);
    return rgbToHex(A[0] + (B[0] - A[0]) * t, A[1] + (B[1] - A[1]) * t, A[2] + (B[2] - A[2]) * t);
  }
  function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b), l = (max + min) / 2, h = 0, s = 0;
    if (max !== min) {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      h = max === r ? ((g - b) / d + (g < b ? 6 : 0)) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
      h /= 6;
    }
    return [h, s, l];
  }
  function hslToHex(h, s, l) {
    var f = function (n) {
      var k = (n + h * 12) % 12;
      var a = s * Math.min(l, 1 - l);
      return l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
    };
    return rgbToHex(f(0) * 255, f(8) * 255, f(4) * 255);
  }
  function makeScale(base) {
    // light steps: mix toward white; dark steps: reduce lightness in HSL keeping hue/sat character
    var rgb = hexToRgb(base), hsl = rgbToHsl(rgb[0], rgb[1], rgb[2]);
    var light = { "25": 0.955, "50": 0.9, "100": 0.8, "200": 0.68, "300": 0.5, "400": 0.3 };
    var darkL = { "600": 0.86, "700": 0.74, "800": 0.55, "900": 0.37, "950": 0.18 };
    var scale = {};
    Object.keys(light).forEach(function (k) { scale[k] = mix(base, "#ffffff", light[k]); });
    scale["500"] = base.toLowerCase();
    Object.keys(darkL).forEach(function (k) { scale[k] = hslToHex(hsl[0], Math.min(1, hsl[1] * 1.02), hsl[2] * darkL[k]); });
    return scale;
  }

  function buildTokensJson(name, brand, secondary) {
    return {
      $meta: { name: name + " Design System", version: VERSION, generatedFrom: "Wellx Unified Design System v" + VERSION + " — Design System Creator", fonts: { latin: "Manrope", arabic: "Alexandria", weights: [400, 500, 600, 700] } },
      primitives: Object.assign({}, SCALES, { brand: brand, secondary: secondary, Brand: undefined, Secondary: undefined,
        gray: SCALES.Gray, error: SCALES.Error, warning: SCALES.Warning, success: SCALES.Success,
        grayblue: SCALES.Grayblue, teal: SCALES.Teal, violet: SCALES.Violet, gold: SCALES.Gold, silver: SCALES.Silver, bronze: SCALES.Bronze,
        Gray: undefined, Error: undefined, Warning: undefined, Success: undefined, Grayblue: undefined, Teal: undefined, Violet: undefined, Gold: undefined, Silver: undefined, Bronze: undefined }),
      semantics: {
        light: { background: "#ffffff", card: "#ffffff", foreground: "#0a0d12", "muted": "#f5f5f5", "muted-soft": "#fafafa", "muted-foreground": "#535862", border: "#e9eaeb", "border-secondary": "#d5d7da", input: "#d5d7da", primary: brand["500"], "primary-hover": brand["600"], "primary-active": brand["700"], "primary-foreground": "#ffffff", link: brand["600"], ring: brand["500"], accent: brand["50"], "accent-foreground": brand["700"], destructive: "#d92d20", "destructive-hover": "#b42318", success: "#17b26a", warning: "#f79009", error: "#f04438", "avatar-bg": "#d5d7da", "avatar-fg": "#717680" },
        dark: { background: "#0a0d12", card: "#181d27", foreground: "#ffffff", "muted": "#252b37", "muted-soft": "#252b37", "muted-foreground": "#d5d7da", border: "#414651", "border-secondary": "#535862", input: "#535862", primary: brand["500"], "primary-hover": brand["400"], "primary-active": brand["300"], "primary-foreground": "#ffffff", link: brand["300"], ring: brand["300"], accent: brand["900"], "accent-foreground": brand["300"], destructive: "#f04438", "destructive-hover": "#f97066", success: "#17b26a", warning: "#f79009", error: "#f04438", "avatar-bg": "#414651", "avatar-fg": "#a4a7ae" }
      },
      radius: { none: 0, xxs: 2, xs: 4, sm: 6, md: 8, lg: 10, xl: 12, "2xl": 16, "3xl": 20, "4xl": 24, full: 9999 },
      radiusComponents: { card: 16, button: 12, input: 8, "nav-item": 10, dialog: 16, pill: 9999, avatar: 9999 },
      widths: { content: 1440, form: 768, paragraph: 720 },
      gradients: {
        "brand-horizontal": "linear-gradient(90deg, " + brand["400"] + " 0%, " + brand["950"] + " 100%)",
        "brand-vertical": "linear-gradient(180deg, " + brand["400"] + " 0%, " + brand["950"] + " 100%)",
        "secondary-horizontal": "linear-gradient(90deg, " + secondary["400"] + " 0%, " + secondary["950"] + " 100%)",
        "secondary-vertical": "linear-gradient(180deg, " + secondary["400"] + " 0%, " + secondary["950"] + " 100%)"
      }
    };
  }

  function buildTokensCss(t) {
    var out = ["/**", " * " + t.$meta.name + " — design tokens", " * " + t.$meta.generatedFrom, " */", "", ":root {"];
    ["brand", "secondary", "gray", "error", "warning", "success"].forEach(function (fam) {
      Object.keys(t.primitives[fam]).forEach(function (k) { out.push("  --wx-" + fam + "-" + k + ": " + t.primitives[fam][k] + ";"); });
    });
    Object.keys(t.semantics.light).forEach(function (k) { out.push("  --wx-" + k + ": " + t.semantics.light[k] + ";"); });
    Object.keys(t.gradients).forEach(function (k) { out.push("  --wx-gradient-" + k + ": " + t.gradients[k] + ";"); });
    out.push("}", "", ".dark {");
    Object.keys(t.semantics.dark).forEach(function (k) { out.push("  --wx-" + k + ": " + t.semantics.dark[k] + ";"); });
    out.push("}", "");
    return out.join("\n");
  }

  function buildDesignMd(name, brand, secondary) {
    var s = function (sc) { return Object.keys(sc).map(function (k) { return k + " `" + sc[k] + "`"; }).join(" · "); };
    return [
      "# " + name + " Design System",
      "",
      "> Generated from the **Wellx Unified Design System v" + VERSION + "** by the Design System Creator.",
      "> Brand and Secondary scales are generated from the entered colors; every other rule and token is inherited.",
      "> This file is written for AI agents and developers: follow it exactly; never invent values.",
      "",
      "## Principles",
      "1. **Flat, bordered surfaces** — page and cards share one canvas; 1px hairlines (Gray/200, dark Gray/700) define panels. No card shadows, no hover lifts. Shadows only on dialogs, drawers, toasts, auth.",
      "2. **Monochrome chrome** — nav, menus, hovers use the Gray scale only. Active sidebar item = gray pill, never colored.",
      "3. **One brand accent** — Brand/500 `" + brand["500"] + "` appears ONLY on primary buttons, links, active tab underlines, focus rings, chart lines, active filter pills. Never in nav chrome, menu highlights, hovers, or backgrounds.",
      "4. **Semantic tokens first** — use the semantic layer below; never a primitive directly in UI code; never hardcode hex.",
      "5. When in doubt, match an existing pattern.",
      "",
      "## Color",
      "### Brand (generated)",
      s(brand),
      "### Secondary (generated)",
      s(secondary),
      "### Gray / feedback (inherited — do not change)",
      "Gray: " + s(SCALES.Gray),
      "Error: 500 `#f04438` 600 `#d92d20` 700 `#b42318` · Warning: 500 `#f79009` 700 `#b54708` · Success: 500 `#17b26a` 700 `#067647`",
      "",
      "### Semantics (light → dark)",
      "- background `#ffffff` → `#0a0d12` · card `#ffffff` → `#181d27` · foreground `#0a0d12` → `#ffffff`",
      "- muted `#f5f5f5` → `#252b37` · muted-foreground `#535862` → `#d5d7da` · border `#e9eaeb` → `#414651` · input border `#d5d7da` → `#535862`",
      "- primary `" + brand["500"] + "` (hover `" + brand["600"] + "`, active `" + brand["700"] + "`; dark hover `" + brand["400"] + "`) · link `" + brand["600"] + "` → `" + brand["300"] + "` · accent tint `" + brand["50"] + "` + `" + brand["700"] + "` text (dark `" + brand["900"] + "` + `" + brand["300"] + "`)",
      "- destructive `#d92d20` (hover `#b42318`); dark `#f04438` (hover `#f97066`)",
      "- Status pill recipe: 50-tint bg + 700 text + 500 dot (dark: 900 bg + 300 text). Priority: Critical=Error, High=Warning, Medium=Grayblue `#4e5ba6`, Low=Gray.",
      "- Avatars: neutral — Gray/300 fill + Gray/500 Bold 2-letter initials (dark Gray/700 + Gray/400). No per-person colors.",
      "",
      "### Gradients (featured/hero surfaces only, white text)",
      "- brand-horizontal: `linear-gradient(90deg, " + brand["400"] + ", " + brand["950"] + ")` (vertical = 180deg)",
      "- secondary-horizontal: `linear-gradient(90deg, " + secondary["400"] + ", " + secondary["950"] + ")` (vertical = 180deg)",
      "",
      "## Typography",
      "Manrope (Latin) · Alexandria (Arabic RTL) · weights 400/500/600/700 · all numbers tabular-nums.",
      "Ramp: text-xs 12/18 · text-sm 14/20 (dense body, tables) · text-md 16/24 (reading body) · text-lg 18/28 SemiBold (card headings) · text-xl 20/30 SemiBold (dialog titles) · display-xs 24/32 Bold −2% (page titles) · display-sm 30/38 Bold (metric numbers). Micro-labels: 11px SemiBold UPPERCASE +8% Gray/500.",
      "",
      "## Shape & layout",
      "Radius: cards/dialogs 16 · buttons 12 · inputs 8 · nav pill 10 · pills/avatars full · checkbox 4.",
      "Spacing 4px base: page padding 24 (lg 32) · sections/cards 20–24 · controls 40/36/32 · table rows ~76 (compact 52).",
      "Widths: tab content max 1440 centered · forms 768 · paragraphs 720.",
      "Icons: Lucide, stroke 1.75; sizes 14 search · 16 buttons · 18 nav · 20 empty states. Icons inherit currentColor.",
      "",
      "## App shell",
      "Sidebar 224px (64 collapsed, 200ms): 64px header with 32px logo (28px mark collapsed) + collapse button (panel icon, mirrors when collapsed); groups 24px apart with 11px caps labels; nav items 40px radius-10 — hover Gray/50, active Gray/100 pill + Gray/900 ink (never accent); user block bottom-pinned (32px avatar + name 13 + role 11 + ⋮ menu with Log out). Topbar 56px: language pill + bell only — no search, no theme switcher, no brand, no avatar. Search lives in each page's filter bar.",
      "",
      "## Components (spec summary)",
      "- **Buttons**: 40px, radius 12, 14px SemiBold. Primary " + brand["500"] + " (hover " + brand["600"] + "); outline/ghost hover Gray/100; destructive Error/600 (hover Error/700); disabled Gray/200 + Gray/400 text. 150ms ease-out.",
      "- **Search & filters**: 36px muted search pill (14px icon) + 32px filter chips; active chip = " + brand["50"] + " bg + " + brand["700"] + " SemiBold text.",
      "- **Tabs**: underline style; active = 2px " + brand["500"] + " underline.",
      "- **Table (default)**: radius-16 card; 11px caps header on Gray/50 band; two-line rows ~76px (40px avatar, name 15 SemiBold, id 13 gray); no checkboxes; footer \"Showing X to Y of Z\" + pager.",
      "- **Forms**: inputs 40px radius-8 Gray/300 border; labels 13 SemiBold above; focus = brand border + 2px 35% ring; error = Error/500 border + message; validate on blur.",
      "- **Selection**: checkbox 18 radius-4, radio 18, toggle 36×20 — brand when on.",
      "- **Dialog**: radius-16, shadow 0 16px 48px @16%, title 20 Bold, actions right (ghost + primary 36px).",
      "- **Feedback**: alerts = light-tint recipe 4 tones; toasts = white card + small shadow, bottom-end, 5s; skeleton shimmer + Loader2 spinner.",
      "- **KPI card**: 13px label · 30px Bold tabular number · tinted delta chip · " + brand["500"] + " sparkline.",
      "- **Empty state**: 44px muted icon circle + 14px Bold heading + 13px gray hint.",
      "",
      "## Interaction states",
      "Hover = neutral gray (buttons primary/destructive darken within their scale). Focus-visible = 2px brand ring @35% everywhere. Selected = tint or gray pill. Disabled = gray fill + Gray/400 text (never opacity on colored fills).",
      "",
      "## Motion & RTL",
      "Micro 150ms / layout 200ms ease-out; dialogs fade+scale .98; animate transform/opacity/color only; respect prefers-reduced-motion. RTL: logical properties only (ps-*, border-e, start-*); Alexandria for Arabic; directional icons mirror; charts and numbers don't.",
      "",
      "## Guardrails",
      "Never hardcode hex · no shadows outside dialogs/drawers/toasts/auth · no accent in chrome · no new status colors · no physical direction utilities · content caps at 1440px.",
      ""
    ].join("\n");
  }


  function buildPreviewGallery(b, sec) {
    var cell = function (label, body, wide) {
      return '<div class="pv-cell' + (wide ? " wide" : "") + '"><span class="pv-lbl">' + label + '</span>' + body + "</div>";
    };
    var h = '<div class="scale-name"><span>Components with your colors</span></div><div class="pv-grid">';

    h += cell("Buttons",
      '<div class="pv-row">' +
      '<button class="btn" style="background:' + b["500"] + ';color:#fff" onmouseover="this.style.background=\'' + b["600"] + '\'" onmouseout="this.style.background=\'' + b["500"] + '\'">Create</button>' +
      '<button class="btn btn-outline">Export</button>' +
      '<button class="btn btn-destructive">Delete</button></div>' +
      '<span class="pv-note">Primary hovers to 600 (try it). Outline, ghost, and destructive never take the brand color.</span>');

    h += cell("Search & filters",
      '<div class="pv-row">' +
      '<span class="search-pill" style="min-width:150px"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="4.4" stroke="currentColor" stroke-width="1.5"/><path d="m9.4 9.4 3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>Search…</span>' +
      '<span class="filter-pill" style="background:' + b["50"] + ';color:' + b["700"] + ';border-color:transparent;font-weight:600">All items</span>' +
      '<span class="filter-pill">Flagged</span></div>');

    h += cell("Tabs",
      '<div class="tabs" style="width:100%">' +
      '<span class="tab" style="color:var(--fg);font-weight:600;border-bottom-color:' + b["500"] + '">Overview</span>' +
      '<span class="tab">Activity</span><span class="tab">Settings</span></div>');

    h += cell("Status pills",
      '<div class="pv-row">' +
      '<span class="pill" style="background:' + b["50"] + ';color:' + b["700"] + '"><span class="dot" style="background:' + b["500"] + '"></span>Active</span>' +
      '<span class="pill" style="background:' + sec["50"] + ';color:' + sec["700"] + '"><span class="dot" style="background:' + sec["500"] + '"></span>Featured</span>' +
      '<span class="pill" style="background:var(--t-warn-bg);color:var(--t-warn-fg)"><span class="dot" style="background:var(--t-warn-dot)"></span>Pending</span></div>' +
      '<span class="pv-note">Feedback tones (warning, error, success) stay fixed — only brand and secondary recolor.</span>');

    h += cell("Form controls",
      '<div class="pv-row">' +
      '<span class="cb on" style="background:' + b["500"] + ';border-color:' + b["500"] + '">✓</span>' +
      '<span class="radio on" style="border-color:' + b["500"] + '"><i style="width:8px;height:8px;border-radius:50%;background:' + b["500"] + '"></i></span>' +
      '<span class="tg on" style="background:' + b["500"] + '"></span></div>' +
      '<input class="input" style="border-color:' + b["500"] + ';outline:2px solid ' + b["500"] + '59" value="Focused input" readonly>');

    h += cell("Links & alert",
      '<span style="font-size:13.5px">Read the <a href="javascript:void(0)" style="color:' + b["600"] + '">full report</a> for details.</span>' +
      '<div class="alert" style="background:' + b["50"] + ';color:' + b["700"] + '"><span>◆</span><span><strong>Info</strong> — sync runs nightly at 02:00 AST.</span></div>');

    h += cell("KPI card",
      '<div style="display:flex;align-items:center;justify-content:space-between;gap:10px">' +
      '<div style="display:flex;align-items:center;gap:8px"><span style="font-size:26px;font-weight:700;letter-spacing:-0.02em" class="tabular">248</span>' +
      '<span class="kpi-delta">▲ 12%</span></div>' +
      '<svg width="88" height="30" viewBox="0 0 96 32"><polyline points="0,24 12,20 24,22 36,14 48,17 60,10 72,12 84,6 96,8" fill="none" stroke="' + b["500"] + '" stroke-width="1.75" stroke-linecap="round"/><circle cx="96" cy="8" r="2.5" fill="' + b["500"] + '"/></svg></div>');

    h += cell("Sidebar nav (unchanged)",
      '<div style="display:flex;flex-direction:column;gap:2px;max-width:190px">' +
      '<span class="nav-item active" style="height:34px;font-size:13.5px">Item</span>' +
      '<span class="nav-item" style="height:34px;font-size:13.5px">Item</span></div>' +
      '<span class="pv-note">Chrome stays monochrome — the active pill is gray in every brand.</span>');

    h += cell("Dialog", 
      '<div style="border:1px solid var(--border);border-radius:12px;padding:14px;display:flex;flex-direction:column;gap:10px;box-shadow:0 8px 24px rgba(10,13,18,.10)">' +
      '<b style="font-size:14px">Invite a user</b>' +
      '<input class="input" value="name@company.com" readonly>' +
      '<div style="display:flex;justify-content:flex-end;gap:6px">' +
      '<button class="btn btn-ghost btn-sm" style="height:32px;font-size:13px">Cancel</button>' +
      '<button class="btn btn-sm" style="height:32px;font-size:13px;background:' + b["500"] + ';color:#fff">Invite</button></div></div>');

    h += cell("Gradients",
      '<div class="pv-row">' +
      '<div style="flex:1;min-width:100px;height:52px;border-radius:10px;background:linear-gradient(90deg,' + b["400"] + ',' + b["950"] + ');display:flex;align-items:flex-end;padding:7px"><b style="color:#fff;font-size:10px">brand</b></div>' +
      '<div style="flex:1;min-width:100px;height:52px;border-radius:10px;background:linear-gradient(90deg,' + sec["400"] + ',' + sec["950"] + ');display:flex;align-items:flex-end;padding:7px"><b style="color:#fff;font-size:10px">secondary</b></div></div>');

    h += cell("Table row",
      '<div style="border:1px solid var(--border);border-radius:10px;overflow:hidden">' +
      '<div style="display:flex;align-items:center;gap:10px;padding:10px 12px">' +
      '<span class="avatar">FA</span>' +
      '<span style="flex:1;min-width:0"><span style="font-size:13.5px;font-weight:600;display:block">Fatimah Al-Harbi</span><span style="font-size:11.5px;color:var(--muted-fg-soft)">ID 1098234571</span></span>' +
      '<span class="pill" style="background:' + b["50"] + ';color:' + b["700"] + '"><span class="dot" style="background:' + b["500"] + '"></span>Active</span></div></div>' +
      '<span class="pv-note">Avatars stay neutral gray in every brand.</span>', true);

    h += "</div>";
    return h;
  }

  function renderCreator() {
    return head("Resources", "Design system creator",
      "Enter your product’s primary and secondary colors. The creator generates full 25–950 scales, remaps the semantic accent layer and gradients, and exports one self-contained design-system.json — the full guidelines (for AI agents and teammates) and every token (for builds) in a single file. Everything else — grays, feedback colors, type, shape, components, guardrails — is inherited from the Wellx system.") +
      '<div class="creator-grid">' +
      '<div class="card creator-form">' +
        '<div class="field"><label for="cName">System name</label><input id="cName" class="input" value="MyProduct" spellcheck="false"></div>' +
        '<div class="field"><label for="cPrimary">Primary color</label><div class="color-row"><input type="color" id="cPrimaryPick" value="#5043ed" aria-label="Pick primary color"><input id="cPrimary" class="input mono" value="#5043ED" spellcheck="false"></div></div>' +
        '<div class="field"><label for="cSecondary">Secondary color</label><div class="color-row"><input type="color" id="cSecondaryPick" value="#f63c81" aria-label="Pick secondary color"><input id="cSecondary" class="input mono" value="#F63C81" spellcheck="false"></div></div>' +
        '<div class="dl-row"><span style="font-size:11px;text-transform:uppercase;letter-spacing:.07em;font-weight:600;color:var(--muted-fg-soft)">Export</span>' +
          '<a class="dl-link" id="dlJson" download="design-system.json">design-system.json <small>one file — guidelines for agents + all tokens for builds</small></a>' +
        "</div>" +
      "</div>" +
      '<div class="creator-preview">' +
        '<div class="card preview-card"><div class="scale-name"><span>Brand — generated</span><span class="mono">25 → 950</span></div><div id="pvBrand"></div>' +
        '<div class="scale-name" style="margin-top:14px"><span>Secondary — generated</span><span class="mono">25 → 950</span></div><div id="pvSecondary"></div></div>' +
        '<div class="card preview-card" id="pvComponents"><!-- live component preview --></div>' +
      "</div></div>";
  }

  function wireCreator() {
    var els = {
      name: $("#cName"), p: $("#cPrimary"), pPick: $("#cPrimaryPick"),
      s: $("#cSecondary"), sPick: $("#cSecondaryPick"),
    };
    function validHex(v) { return /^#?[0-9a-fA-F]{6}$/.test(v.trim()); }
    function norm(v) { v = v.trim(); return (v[0] === "#" ? v : "#" + v).toLowerCase(); }

    function update() {
      if (!validHex(els.p.value) || !validHex(els.s.value)) return;
      var pHex = norm(els.p.value), sHex = norm(els.s.value);
      els.pPick.value = pHex; els.sPick.value = sHex;
      var brand = makeScale(pHex), secondary = makeScale(sHex);
      $("#pvBrand").innerHTML = strip(brand, true);
      $("#pvSecondary").innerHTML = strip(secondary, true);
      $("#pvComponents").innerHTML = buildPreviewGallery(brand, secondary);
      var name = (els.name.value.trim() || "MyProduct");
      var json = buildTokensJson(name, brand, secondary);
      var bundle = {
        $meta: Object.assign({}, json.$meta, {
          format: "wellx-design-system/1",
          contents: ["guidelines (markdown, agent-facing)", "tokens (machine-readable)"],
          usage: "Hand this single file to an AI agent or teammate. Follow `guidelines` exactly; read values from `tokens` — token keys map 1:1 onto the @wellx/design-tokens CSS variables (--wx-*), so tokens.css can be regenerated from this file.",
        }),
        guidelines: buildDesignMd(name, brand, secondary),
        tokens: {
          primitives: json.primitives,
          semantics: json.semantics,
          radius: json.radius,
          radiusComponents: json.radiusComponents,
          widths: json.widths,
          gradients: json.gradients,
        },
      };
      setDownload("#dlJson", JSON.stringify(bundle, null, 2), "application/json");
    }
    function setDownload(sel, content, type) {
      var a = $(sel);
      if (a.dataset.url) URL.revokeObjectURL(a.dataset.url);
      var url = URL.createObjectURL(new Blob([content], { type: type }));
      a.href = url; a.dataset.url = url;
    }
    [els.name, els.p, els.s].forEach(function (el) { el.addEventListener("input", update); });
    els.pPick.addEventListener("input", function () { els.p.value = els.pPick.value.toUpperCase(); update(); });
    els.sPick.addEventListener("input", function () { els.s.value = els.sPick.value.toUpperCase(); update(); });
    update();
  }

  /* ---------- router ---------- */
  function route() {
    var hash = location.hash.replace(/^#\//, "") || "whats-new";
    var html, isComponent = hash.indexOf("components/") === 0;
    if (hash === "whats-new") html = renderWhatsNew();
    else if (hash === "colors") html = renderColors();
    else if (hash === "install") html = renderInstall();
    else if (hash === "creator") html = renderCreator();
    else if (isComponent) {
      var slug = hash.split("/")[1];
      var c = COMPONENTS.filter(function (x) { return x.slug === slug; })[0];
      html = c ? renderComponent(c) : head("Components", "Not found", "No component named “" + esc(slug) + "”.");
    } else html = renderWhatsNew();

    page.innerHTML = html;
    if (hash === "creator") wireCreator();
    if (isComponent) setComponentsOpen(true);

    document.querySelectorAll(".nav-item[data-route]").forEach(function (a) {
      a.classList.toggle("active", a.dataset.route === hash);
    });
    page.querySelectorAll("[data-copy]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var codeText = btn.nextElementSibling.textContent;
        (navigator.clipboard ? navigator.clipboard.writeText(codeText) : Promise.reject()).then(
          function () { btn.textContent = "Copied"; setTimeout(function () { btn.textContent = "Copy"; }, 1200); },
          function () { btn.textContent = "Select & copy"; }
        );
      });
    });
    window.scrollTo(0, 0);
    document.title = "Wellx Unified Design System";
  }
  window.addEventListener("hashchange", route);
  route();
})();
