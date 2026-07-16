import { useEffect, useRef } from "react";
import { useNav } from "@/lib/navigation";

const DOCK = [
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

export default function Dock() {
  const { navigate } = useNav();
  const trackRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;

    const tiles = Array.from(track.querySelectorAll<HTMLElement>(".dock__tile"));
    const RANGE = 150;
    const MAX = 1.55;
    const MIN = 1.0;

    const onMove = (e: MouseEvent) => {
      tiles.forEach((tile) => {
        const r = tile.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const d = Math.abs(e.clientX - cx);
        const scale = d < RANGE ? MIN + (MAX - MIN) * (1 - d / RANGE) : MIN;
        tile.style.setProperty("--dock-scale", scale.toFixed(3));
      });
    };
    const reset = () => tiles.forEach((t) => t.style.removeProperty("--dock-scale"));
    track.addEventListener("mousemove", onMove);
    track.addEventListener("mouseleave", reset);
    return () => {
      track.removeEventListener("mousemove", onMove);
      track.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <nav aria-label="Primary links">
      <div className="dock wrapper">
        <div className="dock__glass">
          <ul className="dock__track toolbar nav-list" ref={trackRef}>
            {DOCK.map((d) => (
              <li key={d.key} className="dock__item toolbarItem nav-item">
                <a
                  className="dock__link toolbarLink nav-item__link"
                  href="#"
                  aria-label={d.label}
                  data-transition-trigger={d.key}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(d.key, d.key);
                  }}
                >
                  <span className="dock__tile">
                    <img className="dock__image" src={`assets/icons/${d.icon}`} alt="" />
                  </span>
                  <span className="dock__label nav-item__tooltip">{d.label}</span>
                </a>
              </li>
            ))}
            <li className="dock__divider" aria-hidden="true">
              <span className="dock__divider-line"></span>
            </li>
            {SOCIAL.map((s) => (
              <li key={s.label} className="dock__item toolbarItem nav-item">
                <a
                  className="dock__link toolbarLink nav-item__link"
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  aria-label={s.label}
                >
                  <span className="dock__tile">
                    <img className="dock__image" src={`assets/icons/${s.icon}`} alt="" />
                  </span>
                  <span className="dock__label nav-item__tooltip">{s.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
