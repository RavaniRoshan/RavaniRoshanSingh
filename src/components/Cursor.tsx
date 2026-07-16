import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    const dot = dotRef.current;
    if (isCoarse || !dot) return;

    let x = 0,
      y = 0,
      cx = 0,
      cy = 0,
      raf: number | null = null;

    const render = () => {
      cx += (x - cx) * 0.22;
      cy += (y - cy) * 0.22;
      dot.style.transform = `translate(${cx}px, ${cy}px)`;
      if (Math.abs(x - cx) > 0.4 || Math.abs(y - cy) > 0.4) {
        raf = requestAnimationFrame(render);
      } else {
        raf = null;
      }
    };
    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      dot.classList.remove("is-hidden");
      if (!raf) raf = requestAnimationFrame(render);
    };
    const onLeave = () => dot.classList.add("is-hidden");
    const onOver = (e: MouseEvent) => {
      const t = (e.target as HTMLElement).closest(
        "a,button,[data-view-toggle],.dock__item,input,textarea",
      );
      dot.classList.toggle("is-hover", !!t);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseover", onOver);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div className="cursor-dot" data-cursor-dot aria-hidden="true" ref={dotRef} />;
}
