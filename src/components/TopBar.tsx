import { useEffect, useRef } from "react";
import { useNav } from "@/lib/navigation";

export default function TopBar() {
  const { navigate, toggleTheme } = useNav();
  const wrapRef = useRef<HTMLDivElement>(null);

  // Ambient WebAudio bed (synthesised, no asset shipped) — ported from app.js.
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const btn = wrap.querySelector<HTMLButtonElement>(".site-switcher__play");
    const fill = wrap.querySelector<HTMLElement>(".site-switcher__progress-fill");
    if (!btn || !fill) return;

    let ctx: AudioContext | null = null;
    let master: GainNode | null = null;
    const nodes: OscillatorNode[] = [];
    let playing = false;
    let t0 = 0;
    const dur = 42;
    let raf: number | null = null;

    const build = () => {
      const AC =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (!AC) return false;
      ctx = new AC();
      master = ctx.createGain();
      master.gain.value = 0;
      const lp = ctx.createBiquadFilter();
      lp.type = "lowpass";
      lp.frequency.value = 900;
      master.connect(lp);
      lp.connect(ctx.destination);
      [110, 164.81, 220, 277.18].forEach((f, i) => {
        const o = ctx!.createOscillator();
        o.type = i % 2 ? "sine" : "triangle";
        o.frequency.value = f;
        o.detune.value = (i - 1.5) * 6;
        const g = ctx!.createGain();
        g.gain.value = 0.16 / (i + 1);
        o.connect(g);
        g.connect(master!);
        o.start();
        nodes.push(o);
      });
      return true;
    };
    const tick = () => {
      if (!ctx) return;
      const el = ((ctx.currentTime - t0) % dur) / dur;
      fill.style.width = (el * 100).toFixed(2) + "%";
      raf = requestAnimationFrame(tick);
    };
    const play = () => {
      if (!ctx && !build()) return;
      if (ctx!.state === "suspended") ctx!.resume();
      master!.gain.cancelScheduledValues(ctx!.currentTime);
      master!.gain.linearRampToValueAtTime(0.5, ctx!.currentTime + 1.2);
      t0 = ctx!.currentTime - (parseFloat(fill.style.width) || 0) / 100 * dur;
      playing = true;
      wrap!.classList.add("is-playing");
      if (raf) cancelAnimationFrame(raf);
      tick();
    };
    const pause = () => {
      if (ctx) {
        master!.gain.cancelScheduledValues(ctx.currentTime);
        master!.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.4);
      }
      playing = false;
      wrap!.classList.remove("is-playing");
      if (raf) cancelAnimationFrame(raf);
    };
    btn.addEventListener("click", () => (playing ? pause() : play()));
    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header className="page-header">
      <div
        className="site-switcher"
        data-theme="light"
        aria-label="Site controls"
        ref={wrapRef}
      >
        <button
          className="site-switcher__button site-switcher__theme"
          type="button"
          aria-label="Toggle theme"
          onClick={toggleTheme}
        >
          <svg
            className="site-switcher__icon site-switcher__icon--sun"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4.5" fill="currentColor" />
            <g
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            >
              <line x1="12" y1="2.5" x2="12" y2="5" />
              <line x1="12" y1="19" x2="12" y2="21.5" />
              <line x1="2.5" y1="12" x2="5" y2="12" />
              <line x1="19" y1="12" x2="21.5" y2="12" />
              <line x1="5.2" y1="5.2" x2="7" y2="7" />
              <line x1="17" y1="17" x2="18.8" y2="18.8" />
              <line x1="5.2" y1="18.8" x2="7" y2="17" />
              <line x1="17" y1="7" x2="18.8" y2="5.2" />
            </g>
          </svg>
          <svg
            className="site-switcher__icon site-switcher__icon--moon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z"
              fill="currentColor"
            />
          </svg>
          <span className="site-switcher__sr">Theme</span>
        </button>

        <div className="site-switcher__audio" data-audio>
          <button
            className="site-switcher__button site-switcher__play"
            type="button"
            aria-label="Play ambience"
          >
            <svg
              className="site-switcher__play-icon site-switcher__play-icon--play"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
            </svg>
            <svg
              className="site-switcher__play-icon site-switcher__play-icon--pause"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <rect x="7" y="5.5" width="3.4" height="13" rx="1" fill="currentColor" />
              <rect
                x="13.6"
                y="5.5"
                width="3.4"
                height="13"
                rx="1"
                fill="currentColor"
              />
            </svg>
            <span className="site-switcher__sr">Play</span>
          </button>
          <div className="site-switcher__progress">
            <div className="site-switcher__progress-track">
              <div className="site-switcher__progress-fill"></div>
            </div>
          </div>
        </div>

        <button
          className="site-switcher__button site-switcher__about"
          type="button"
          aria-label="About"
          onClick={() => navigate("about", "about")}
        >
          <span className="site-switcher__label">about</span>
        </button>
      </div>
    </header>
  );
}
