import { useNav } from "@/lib/navigation";

const APPS = [
  { key: "niki", label: "niki", icon: "niki.svg" },
  { key: "backstop", label: "backstop", icon: "backstop.svg" },
  { key: "winscript-lang", label: "WinScript", icon: "winscript-lang.svg" },
  { key: "winscript-mcp", label: "WS-MCP", icon: "winscript-mcp.svg" },
  { key: "openjck", label: "OpenJCK", icon: "openjck.svg" },
  { key: "openjck-cloud", label: "OpenJCK Cloud", icon: "openjck-cloud.svg" },
  { key: "photos", label: "Photos", icon: "photos.svg" },
  { key: "music", label: "Music", icon: "music.svg" },
];

const SOCIAL = [
  {
    href: "https://github.com/RavaniRoshan",
    label: "GitHub",
    icon: "github.svg",
  },
  {
    href: "https://www.linkedin.com/in/roshan-ravani-3a79882a3/",
    label: "LinkedIn",
    icon: "linkedin.svg",
  },
  { href: "https://x.com/RoshanAIs", label: "X", icon: "x.svg" },
  {
    href: "mailto:ravaniroshansingh@gmail.com",
    label: "Email",
    icon: "email.svg",
  },
];

export default function Hero() {
  const { navigate } = useNav();
  return (
    <main id="home" className="hero">
      <div className="hero__content">
        <div className="hero__identity">
          <div className="hero__avatar-stack">
            <img
              className="hero__avatar hero__avatar--light"
              src="assets/images/avatar.jpg"
              alt="Roshan Ravani"
            />
            <img
              className="hero__avatar hero__avatar--dark"
              src="assets/images/avatar.jpg"
              alt="Roshan Ravani"
            />
            <div className="avatar-bubble">
              <div className="avatar-bubble__content">
                <span className="avatar-bubble__text">AI Engineer &amp; Founder</span>
                <div className="avatar-bubble__tail"></div>
              </div>
            </div>
          </div>
          <p className="hero__name">Roshan Ravani</p>
        </div>

        <h1 className="hero__title">
          <span className="hero__line hero__line--with-stack">
            <span className="hero__line-copy">Founder</span>
            <span className="hero__stack-slot">
              <img className="hero__stack-icon" src="assets/icons/icon_stack.svg" alt="" />
            </span>
            <span className="hero__line-copy">engineer</span>
          </span>
          <span className="hero__line words-stagger">
            <span className="words-stagger__word is-visible">building</span>
            <span className="words-stagger__word is-visible">AI</span>
            <span className="words-stagger__word is-visible">agent</span>
            <span className="words-stagger__word is-visible">systems</span>
          </span>
        </h1>

        <div className="hero__skill-burst" aria-hidden="true">
          <span>AI Agents</span>
          <span>Rust</span>
          <span>Python</span>
          <span>TypeScript</span>
          <span>MCP</span>
          <span>LangChain</span>
          <span>Next.js</span>
          <span>Docker</span>
        </div>

        <nav className="hero__mobile-apps" aria-label="Apps">
          {APPS.map((a) => (
            <a
              key={a.key}
              className="hero__mobile-app"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate(a.key, a.key);
              }}
            >
              <span className="hero__mobile-app-icon">
                <img className="hero__mobile-app-image" src={`assets/icons/${a.icon}`} alt="" />
              </span>
              <span className="hero__mobile-app-label">{a.label}</span>
            </a>
          ))}
          {SOCIAL.map((s) => (
            <a
              key={s.label}
              className="hero__mobile-app"
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer noopener"
            >
              <span className="hero__mobile-app-icon">
                <img className="hero__mobile-app-image" src={`assets/icons/${s.icon}`} alt="" />
              </span>
              <span className="hero__mobile-app-label">{s.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </main>
  );
}
