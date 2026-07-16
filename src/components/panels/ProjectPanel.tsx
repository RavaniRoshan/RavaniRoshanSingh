import type { Project } from "@/data/projects";
import BackButton from "@/components/BackButton";

export default function ProjectPanel({
  project,
  active = false,
}: {
  project: Project;
  active?: boolean;
}) {
  const { key, name, icon, badge, years, summary, lead, tags, cards, links, meta } =
    project;
  return (
    <article
      className={"project-screen__panel" + (active ? " is-active" : "")}
      data-project-panel={key}
      aria-label={name}
      hidden={!active}
      inert={!active}
    >
      <BackButton variant="fixed" />
      <header className="rp-hero">
        <div className="rp-logo">
          <span className="rp-logo__mark">
            <img src={`assets/icons/${icon}`} alt="" />
          </span>
          <h2 className="rp-logo__text">{name}</h2>
        </div>
        <div className="rp-badge">{badge}</div>
        {years && <p className="rp-years">{years}</p>}
        <p className="rp-summary">{summary}</p>
        {lead && <p className="rp-lead">{lead}</p>}
        {tags.length > 0 && (
          <div className="rp-tags">
            {tags.map((t) => (
              <span key={t} className="rp-tag">
                {t}
              </span>
            ))}
          </div>
        )}
      </header>

      {cards && cards.length > 0 && (
        <section className="rp-section">
          <h3 className="rp-section__title">What it does</h3>
          <ul className="rp-cards">
            {cards.map((c) => (
              <li key={c.title} className="rp-card">
                <h4 className="rp-card__title">{c.title}</h4>
                <p className="rp-card__text">{c.text}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {links && links.length > 0 && (
        <div className="rp-links">
          {links.map((l) => (
            <a
              key={l.href}
              className={"rp-link" + (l.icon ? " rp-link--icon" : "")}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel="noreferrer noopener"
            >
              {l.icon && <img src="assets/icons/github.svg" alt="" />} {l.label}
            </a>
          ))}
        </div>
      )}

      {meta && <p className="rp-meta">{meta}</p>}

      <div className="project-screen__footer">
        <BackButton variant="inline" />
      </div>
    </article>
  );
}
