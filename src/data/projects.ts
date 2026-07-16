export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
  icon?: boolean;
};

export type ProjectCard = {
  title: string;
  text: string;
};

export type Project = {
  key: string;
  name: string;
  icon: string;
  badge: string;
  years?: string;
  summary: string;
  lead?: string;
  tags: string[];
  cards?: ProjectCard[];
  links?: ProjectLink[];
  meta?: string;
};

export const projects: Project[] = [
  {
    key: "niki",
    name: "niki",
    icon: "niki.svg",
    badge: "Open Source · 2026 — Present",
    years: "June 2026 — Present",
    summary:
      "A hermetic multi-agent coding system. Isolated AI agents independently plan, code, test & review inside Docker sandboxes, then hand you a reviewable git branch.",
    lead: "Fire-and-forget and bring-your-own-key, built in Rust. niki turns a natural-language brief into a complete, tested pull request — without a human babysitting the loop.",
    tags: ["Rust", "Docker", "Multi-agent", "Anthropic", "OpenAI", "Ollama"],
    cards: [
      {
        title: "Isolated agents",
        text: "Separate agents for planning, coding, testing, and review — each with its own prompt and model. All work happens in a Docker sandbox bind-mounted to your project; the working tree is never mutated mid-run.",
      },
      {
        title: "Plan → Code → Test → Review",
        text: "A closed loop that ships a reviewable branch, not just a chat transcript. The Reviewer can bounce work back to the Coder for up to max_revision_rounds.",
      },
      {
        title: "Fire-and-forget",
        text: "Hand it a brief and get a PR back. BYOK keeps your keys — and your bills — yours. Mix-and-match models per agent.",
      },
      {
        title: "Reviewable output",
        text: "Every run ends in a clean niki/<id> branch with real commits, diffs, and a report.md your team can review like any other.",
      },
    ],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/RavaniRoshan/niki",
        external: true,
        icon: true,
      },
    ],
    meta: "v2 · License: Business Source License 1.1 (BUSL-1.1)",
  },
  {
    key: "backstop",
    name: "backstop",
    icon: "backstop.svg",
    badge: "Open Source · 2026 — Present",
    years: "July 2026 — Present",
    summary:
      "In-process backpressure, budgets, retries, circuit breaking, and metrics for AI SDKs. Backstop replaces the SDK's internal httpx transport with a controlled pipeline.",
    lead: "Budget enforcement, circuit breaking, priority admission, and retry logic sit between your code and the model — before any request leaves your application. Includes the Wedge tool for multi-agent diffing.",
    tags: ["Python", "httpx", "Anthropic", "OpenAI", "Prometheus", "Circuit breaking"],
    cards: [
      {
        title: "Transport-level control",
        text: "Swap the SDK's httpx transport for a controlled pipeline with budgets and circuit breakers.",
      },
      {
        title: "Cost safety",
        text: "Token-budget enforcement reserves before dispatch and reconciles after response, with hard limits to stop runaway spend.",
      },
      {
        title: "Priority admission & AIMD",
        text: "Critical/default/background queuing with starvation prevention; additive-increase/multiplicative-decrease concurrency adapts to provider pressure.",
      },
      {
        title: "Retries, circuit breaker & Wedge",
        text: "Retry with backoff on 429/5xx, a circuit breaker that trips and cools down, streaming support, and Wedge — a sandbox running multiple isolated coding agents on the same task.",
      },
    ],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/RavaniRoshan/backstop",
        external: true,
        icon: true,
      },
      { label: "Live demo ↗", href: "https://tori-site-five.vercel.app/", external: true },
    ],
    meta: "v0.4.0 · 14-day open test measuring budget isolation and cost-exposure reduction",
  },
  {
    key: "winscript-lang",
    name: "WinScript",
    icon: "winscript-lang.svg",
    badge: "Open Source · 2024 — Present",
    years: "2024 — Present",
    summary:
      "The open scripting language for Windows automation — so AI agents and humans can automate any Windows application in natural, readable syntax.",
    lead: "Ships with an interactive REPL, a CLI, a VS Code extension & language server, and Microsoft Excel COM integration.",
    tags: ["Python", "Windows", "DSL", "VS Code", "Excel COM", "MIT"],
    cards: [
      {
        title: "Readable syntax",
        text: "Automate Windows apps in plain, English-like commands anyone can read — with a tell/end tell block structure.",
      },
      {
        title: "Rich REPL + CLI",
        text: "Beautiful tables, panels, and syntax highlighting via the Rich library; Chrome auto-detection on Windows, macOS, and Linux.",
      },
      {
        title: "VS Code extension & LSP",
        text: "Editor support with autocomplete, diagnostics, an interactive debugger, and an AppleScript → WinScript converter.",
      },
      {
        title: "Excel COM & sessions",
        text: "Drive Microsoft Excel through COM, plus session persistence, async/await support, and 197 passing tests.",
      },
    ],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/RavaniRoshan/winscript-lang",
        external: true,
        icon: true,
      },
      {
        label: "Live demo ↗",
        href: "https://win-lang-site.vercel.app/",
        external: true,
      },
    ],
    meta: "v2.1.0 · MIT licensed · requires Python 3.11+",
  },
  {
    key: "winscript-mcp",
    name: "WinScript MCP",
    icon: "winscript-mcp.svg",
    badge: "Open Source · MCP Server",
    years: "2024 — Present",
    summary:
      "A Windows-native automation API, packaged as an MCP server — giving AI agents the same system-level desktop control that AppleScript gives on macOS.",
    lead: "Expose Windows desktop control to any Model Context Protocol client so agents can click, type, and orchestrate native apps on their own.",
    tags: ["Python", "MCP", "Windows", "pywinauto", "OCR", "59 tools"],
    cards: [
      {
        title: "MCP-native",
        text: "Built on FastMCP — plug into any MCP client as a tool server with 59 tools covering app control, UI, Office COM, files, and screen.",
      },
      {
        title: "Resilient selectors",
        text: "A five-layer fallback chain — UIA by name, automation_id, fuzzy role match, OCR scan, raw coordinates — finds elements even when the UI tree is messy.",
      },
      {
        title: "State diffing & replay",
        text: "Snapshots the desktop before/after every action; a workflow recorder replays successful multi-step sequences without hand-written macros.",
      },
      {
        title: "Safe by default",
        text: "A semantic intent layer (open_latest_file, summarize_screen) plus safe mode that blocks write/delete, and a full audit log with local memory in SQLite.",
      },
    ],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/RavaniRoshan/winscript-mcp",
        external: true,
        icon: true,
      },
      { label: "PyPI ↗", href: "https://pypi.org/project/winscript/", external: true },
      {
        label: "Project site ↗",
        href: "https://winscript-mcp-site.vercel.app/",
        external: true,
      },
    ],
    meta: "v0.1.0 · ★ 8 · requires Windows 10/11 & Python 3.10+",
  },
  {
    key: "openjck",
    name: "OpenJCK",
    icon: "openjck.svg",
    badge: "Open Source · 2024 — Present",
    years: "January 2024 — Present",
    summary:
      "An agent workflow visual debugging tool — the observability & reliability runtime for autonomous AI agent systems.",
    lead: "A timeline view and step inspector trace LLM and tool calls, automatically surfacing the root causes of agent failures. (Formerly AgentTrace.)",
    tags: ["Python", "React", "Astro", "Observability", "Tracing", "MIT"],
    cards: [
      {
        title: "Timeline view & step inspector",
        text: "Watch every LLM and tool call play out in order, then drill into any step for its inputs, outputs, and decision.",
      },
      {
        title: "Failure Intelligence",
        text: "Automatically identifies the root cause when an agent run fails — not just that it failed.",
      },
      {
        title: "Everything is local",
        text: "Zero config, framework-agnostic (raw Python, LangChain, LlamaIndex, CrewAI, and more). No cloud, no accounts, no data leaves your machine.",
      },
      {
        title: "Cost & live dashboard",
        text: "Captures prompt/completion tokens and per-step cost, with a live dashboard showing success rate and average duration.",
      },
    ],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/RavaniRoshan/openjck",
        external: true,
        icon: true,
      },
      {
        label: "Live demo ↗",
        href: "https://openjck.vercel.app/",
        external: true,
      },
      { label: "Docs ↗", href: "https://openjck.dev/", external: true },
      { label: "npm ↗", href: "https://www.npmjs.com/package/openjck", external: true },
    ],
    meta: "v0.3.3 · MIT · formerly AgentClaw",
  },
  {
    key: "openjck-cloud",
    name: "OpenJCK Cloud",
    icon: "openjck-cloud.svg",
    badge: "Open Source · Cloud",
    years: "2024 — Present",
    summary:
      "The observability and reliability runtime for autonomous AI agent systems — the Cloudflare for AI agents.",
    lead: "Where OpenJCK answers \"what did it do, why did it fail, and how do we keep fleets alive 24/7?\" — built for the always-on world of Claude-based autonomous agents.",
    tags: ["TypeScript", "Next.js", "Supabase", "Reliability", "Agents", "SSE"],
    cards: [
      {
        title: "Zero-config wrapping",
        text: "session.client is a drop-in replacement for anthropic.Anthropic() — wrap any agent with no rewrite.",
      },
      {
        title: "Cost circuit breaker",
        text: "max_cost_usd terminates a session before it can rack up a surprise bill at 3am; AES-256-GCM encrypts your BYOK key.",
      },
      {
        title: "Live fleet grid",
        text: "Every running agent shows as a density-configurable card; Mock replay re-runs sessions with overrides at zero API cost.",
      },
      {
        title: "AI Fix & OpenJCK Protocol",
        text: "Claude pinpoints the earliest decision that made a failure inevitable; a language-agnostic protocol emits events from any framework.",
      },
    ],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/RavaniRoshan/openjck-cloud",
        external: true,
        icon: true,
      },
      {
        label: "Dashboard ↗",
        href: "https://dashboard.openjck.cloud/",
        external: true,
      },
      { label: "Docs ↗", href: "https://docs.openjck.cloud/", external: true },
    ],
    meta: "v0.7.0 · pip install openjck · built on Next.js 15, Supabase & Cloudflare",
  },
];
