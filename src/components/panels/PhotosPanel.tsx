import BackButton from "@/components/BackButton";

const PLACES = [
  { n: 1, ext: "png" },
  { n: 2, ext: "jpg" },
  { n: 3, ext: "jpg" },
  { n: 4, ext: "jpg" },
  { n: 5, ext: "jpg" },
  { n: 6, ext: "jpg" },
];

export default function PhotosPanel({ active = false }: { active?: boolean }) {
  return (
    <article
      className={"project-screen__panel" + (active ? " is-active" : "")}
      data-project-panel="photos"
      aria-label="Photos"
      hidden={!active}
      inert={!active}
    >
      <BackButton variant="fixed" />
      <header className="rp-hero">
        <div className="rp-logo">
          <span className="rp-logo__mark">
            <img src="assets/icons/photos.svg" alt="" />
          </span>
          <h2 className="rp-logo__text">Photos</h2>
        </div>
        <div className="rp-badge">Gallery</div>
        <p className="rp-summary">
          Favorite places in Gujarat and India — where I find inspiration and
          recharge.
        </p>
      </header>
      <section className="rp-section">
        <h3 className="rp-section__title">Gallery</h3>
        <div className="rp-gallery">
          {PLACES.map((p) => (
            <figure key={p.n} className="rp-gallery__item">
              <img
                className="rp-gallery__img"
                src={`https://ravani-roshan-singh.vercel.app/images/places/place-${p.n}.${p.ext}`}
                alt={`My favorite place ${p.n}`}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <figcaption className="rp-gallery__cap">
                My favorite place {p.n}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <div className="project-screen__footer">
        <BackButton variant="inline" />
      </div>
    </article>
  );
}
