import gsap from "gsap";

const reduceMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function buildPath(topY: number, bulge = 0) {
  const c = topY - bulge;
  return `M0,${topY} Q50,${c} 100,${topY} L100,100 L0,100 Z`;
}

const map: Record<string, string> = {
  niki: "niki",
  backstop: "backstop",
  "winscript-lang": "winscript-lang",
  "winscript-mcp": "winscript-mcp",
  openjck: "openjck",
  "openjck-cloud": "openjck-cloud",
  about: "about",
  photos: "photos",
  music: "music",
};

// Fluid SVG page transition: morph 100 -> 0 (cover), swap panels, then 0 -> 140 (exit).
export function playTransition(trigger: string | null, onCover: () => void) {
  const overlay = document.querySelector(".page-transition");
  const path = overlay
    ? overlay.querySelector<SVGPathElement>(".page-transition__path")
    : null;

  if (!path || reduceMotion) {
    onCover();
    return;
  }
  if (overlay) overlay.classList.add("is-active");

  const id =
    trigger && map[trigger]
      ? `page-transition-gradient-${map[trigger]}`
      : "page-transition-gradient";
  path.setAttribute("fill", `url(#${id})`);

  const o = { y: 100 };
  gsap.to(o, {
    y: 0,
    duration: 0.5,
    ease: "power3.inOut",
    onUpdate: () => path.setAttribute("d", buildPath(o.y, 14)),
    onComplete: () => {
      onCover();
      gsap.to(o, {
        y: 140,
        duration: 0.45,
        ease: "power3.inOut",
        onUpdate: () => path.setAttribute("d", buildPath(o.y, 14)),
        onComplete: () => {
          if (overlay) overlay.classList.remove("is-active");
        },
      });
    },
  });
}
