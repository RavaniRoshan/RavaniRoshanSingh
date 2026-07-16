import { useNav } from "@/lib/navigation";
import BackButton from "@/components/BackButton";

export default function AboutPanel({ active = false }: { active?: boolean }) {
  const { navigate } = useNav();
  const goto = (e: React.MouseEvent, k: string) => {
    e.preventDefault();
    navigate(k, k);
  };
  return (
    <article
      className={"project-screen__panel" + (active ? " is-active" : "")}
      data-project-panel="about"
      aria-label="About"
      hidden={!active}
      inert={!active}
    >
      <BackButton variant="fixed" />
      <header className="rp-hero">
        <div className="rp-logo">
          <span className="rp-logo__mark">
            <img src="assets/images/avatar.jpg" alt="" />
          </span>
          <h2 className="rp-logo__text">About</h2>
        </div>
        <div className="rp-badge">AI Engineer &amp; Founder</div>
        <p className="rp-summary">
          Roshan Ravani — founder-engineer building AI agent systems, the
          infrastructure that keeps autonomous agents alive, and high-ROI AI
          products.
        </p>
      </header>
      <section className="rp-section">
        <h3 className="rp-section__title">Bio</h3>
        <p className="rp-lead">
          Hi there 👋 ʕ•ᴥ•ʔ I'm Roshan — a founder-engineer building high-ROI AI
          products and the infrastructure that keeps autonomous agents alive. I
          work across the stack: from Rust multi-agent systems and Python AI SDKs
          to TypeScript cloud runtimes. My recent open-source includes{" "}
          <a href="#" onClick={(e) => goto(e, "niki")}>
            niki
          </a>
          , a hermetic multi-agent coding system,{" "}
          <a href="#" onClick={(e) => goto(e, "backstop")}>
            backstop
          </a>{" "}
          for AI SDK backpressure and budgets,{" "}
          <a href="#" onClick={(e) => goto(e, "winscript-lang")}>
            WinScript
          </a>{" "}
          for Windows automation, and{" "}
          <a href="#" onClick={(e) => goto(e, "openjck")}>
            OpenJCK
          </a>
          , observability for autonomous agent fleets. I've fine-tuned 8 AI
          models, swept 3 hackathons, and type at 120 WPM. Right now I'm
          architecting <strong>Axiom-One</strong> (research-grade reasoning) and{" "}
          <strong>Agent-X</strong> (a vision-language browser agent). Let's build
          something impossible.
        </p>
        <div className="rp-tags">
          <span className="rp-tag">AI Agents</span>
          <span className="rp-tag">Rust</span>
          <span className="rp-tag">Python</span>
          <span className="rp-tag">TypeScript</span>
          <span className="rp-tag">MCP</span>
          <span className="rp-tag">LangChain</span>
          <span className="rp-tag">Next.js</span>
          <span className="rp-tag">Docker</span>
        </div>
      </section>
      <div className="rp-links">
        <a
          className="rp-link rp-link--icon"
          href="https://github.com/RavaniRoshan"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src="assets/icons/github.svg" alt="" /> GitHub
        </a>
        <a
          className="rp-link"
          href="mailto:ravaniroshansingh@gmail.com"
        >
          Email
        </a>
      </div>
      <div className="project-screen__footer">
        <BackButton variant="inline" />
      </div>
    </article>
  );
}
