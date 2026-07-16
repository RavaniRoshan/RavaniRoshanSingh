import { useState } from "react";
import BackButton from "@/components/BackButton";

type Track = {
  title: string;
  artist: string;
  src: string;
  cover: string;
};

const TRACKS: Track[] = [
  {
    title: "Winning Speech",
    artist: "Karan Aujla, Mxrci, Seshnolan",
    src: "https://open.spotify.com/embed/track/3FqtduiaqnFYvBgKuc6QWQ",
    cover:
      "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0258b46d6f1500ead2bbbf9915",
  },
  {
    title: "Courtside",
    artist: "Karan Aujla, Signature By SB",
    src: "https://open.spotify.com/embed/track/5wqMM6wOwXmX4rc1C3lUkd",
    cover:
      "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02a7180c02341630b4ae8f017b",
  },
  {
    title: "Timeless (feat. Playboi Carti)",
    artist: "The Weeknd, Playboi Carti",
    src: "https://open.spotify.com/embed/track/1Es7AUAhQvapIcoh3qMKDL",
    cover:
      "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02de79f330bc297af3fae736da",
  },
  {
    title: "48 Rhymes",
    artist: "Karan Aujla, Manna Music",
    src: "https://open.spotify.com/embed/track/6voByoJq77rN6FITdRhtLb",
    cover:
      "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e023b32ccfbd77898d4bf955891",
  },
  {
    title: "Azizam",
    artist: "Ed Sheeran",
    src: "https://open.spotify.com/embed/track/0GRc3eGTg8HBdWLRGYgqIc",
    cover:
      "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02b07c28bb3192bdfb585fb438",
  },
];

const PLAY_ICON =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15l13-7.5z" fill="currentColor"/></svg>';
const PAUSE_ICON =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="5.5" width="3.4" height="13" rx="1" fill="currentColor"/><rect x="13.6" y="5.5" width="3.4" height="13" rx="1" fill="currentColor"/></svg>';

export default function MusicPanel({ active = false }: { active?: boolean }) {
  const [current, setCurrent] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);
  const [shuffle, setShuffle] = useState(false);

  const load = (i: number) => {
    setCurrent(i);
    setPlaying(true);
  };
  const toggle = () => {
    if (current === null) load(0);
    else setPlaying((p) => !p);
  };
  const step = (d: number) => {
    if (current === null) {
      load(0);
      return;
    }
    if (shuffle) {
      let n = current;
      while (n === current) n = Math.floor(Math.random() * TRACKS.length);
      load(n);
    } else {
      load((current + d + TRACKS.length) % TRACKS.length);
    }
  };

  const track = current !== null ? TRACKS[current] : null;
  const frameSrc = playing && track ? track.src : "about:blank";
  const playIcon = playing ? PAUSE_ICON : PLAY_ICON;

  return (
    <article
      className={"project-screen__panel" + (active ? " is-active" : "")}
      data-project-panel="music"
      aria-label="Apple Music"
      hidden={!active}
      inert={!active}
    >
      <BackButton variant="fixed" />
      <header className="rp-hero">
        <div className="rp-logo">
          <span className="rp-logo__mark">
            <img src="assets/icons/music.svg" alt="" />
          </span>
          <h2 className="rp-logo__text">Apple Music</h2>
        </div>
        <div className="rp-badge">Top songs</div>
        <p className="rp-summary">
          Music that fuels my coding sessions and creative thinking.
        </p>
      </header>
      <section className="rp-section am">
        <header className="am-head">
          <div
            className="am-head__art"
            style={{
              backgroundImage: `url('https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0258b46d6f1500ead2bbbf9915')`,
            }}
          ></div>
          <div className="am-head__meta">
            <p className="am-head__eyebrow">Playlist</p>
            <h3 className="am-head__title">Top Songs</h3>
            <p className="am-head__by">Roshan Ravani</p>
            <p className="am-head__sub">5 songs &middot; Apple Music</p>
            <div className="am-head__actions">
              <button
                className="am-play"
                type="button"
                aria-label="Play"
                onClick={() => (current === null ? load(0) : toggle())}
              >
                <span
                  className="am-ic"
                  dangerouslySetInnerHTML={{ __html: playIcon }}
                />
              </button>
              <button
                className="am-shuffle"
                type="button"
                aria-label="Shuffle"
                aria-pressed={shuffle}
                onClick={() => setShuffle((s) => !s)}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M4 7h3.4l8 10H20M4 17h3.4l2.3-2.8M16.6 7 19 4.4M20 7v3.4M20 17v-3.4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>

        <ol className="am-list">
          {TRACKS.map((t, i) => (
            <li
              key={t.src}
              className="am-row"
              data-index={i}
              onClick={() => load(i)}
            >
              <span className="am-row__num">{i + 1}</span>
              <img className="am-row__art" src={t.cover} alt="" loading="lazy" />
              <div className="am-row__info">
                <p className="am-row__title">{t.title}</p>
                <p className="am-row__artist">{t.artist}</p>
              </div>
              <span className="am-row__dur">—</span>
            </li>
          ))}
        </ol>

        {playing && track && (
          <div className="am-now">
            <div className="am-now__left">
              <img className="am-now__art" src={track.cover} alt="" />
              <div className="am-now__meta">
                <p className="am-now__title">{track.title}</p>
                <p className="am-now__artist">{track.artist}</p>
              </div>
            </div>
            <div className="am-now__player">
              <iframe
                className="am-now__frame"
                src={frameSrc}
                width="100%"
                height="152"
                frameBorder={0}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                allowTransparency
                title={track.title}
              />
            </div>
            <div className="am-now__controls">
              <button
                className="am-now__btn"
                type="button"
                aria-label="Previous"
                onClick={() => step(-1)}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M19 5 9.5 12 19 19z" fill="currentColor" />
                </svg>
              </button>
              <button
                className="am-now__btn am-now__btn--play"
                type="button"
                aria-label="Play/Pause"
                onClick={toggle}
              >
                <span className="am-ic" dangerouslySetInnerHTML={{ __html: playIcon }} />
              </button>
              <button
                className="am-now__btn"
                type="button"
                aria-label="Next"
                onClick={() => step(1)}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M16 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M5 5 14.5 12 5 19z" fill="currentColor" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {playing && track && (
          <div className="am-mini">
            <img className="am-mini__art" src={track.cover} alt="" />
            <div className="am-mini__meta">
              <p className="am-mini__title">{track.title}</p>
              <p className="am-mini__artist">{track.artist}</p>
            </div>
            <div className="am-mini__controls">
              <button
                className="am-mini__btn"
                type="button"
                aria-label="Previous"
                onClick={() => step(-1)}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M19 5 9.5 12 19 19z" fill="currentColor" />
                </svg>
              </button>
              <button
                className="am-mini__btn am-mini__btn--play"
                type="button"
                aria-label="Play/Pause"
                onClick={toggle}
              >
                <span className="am-ic" dangerouslySetInnerHTML={{ __html: playIcon }} />
              </button>
              <button
                className="am-mini__btn"
                type="button"
                aria-label="Next"
                onClick={() => step(1)}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M16 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M5 5 14.5 12 5 19z" fill="currentColor" />
                </svg>
              </button>
            </div>
            <div className="am-mini__bar">
              <div className="am-mini__fill"></div>
            </div>
          </div>
        )}
      </section>
      <div className="project-screen__footer">
        <BackButton variant="inline" />
      </div>
    </article>
  );
}
