import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { v: "80%", l: "less manual work" },
  { v: "24/7", l: "systems running" },
  { v: "3x", l: "faster response" },
];

const ZoomReveal = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: "top top", end: "+=200%", scrub: 1, pin: true },
      });
      tl.to(".z-title", { scale: 8, opacity: 0, ease: "power2.in" })
        .fromTo(".z-panel", { clipPath: "circle(0% at 50% 50%)" }, { clipPath: "circle(75% at 50% 50%)", ease: "power2.out" }, "-=0.4")
        .fromTo(".z-stat", { y: 80, opacity: 0, rotateX: -60 }, { y: 0, opacity: 1, rotateX: 0, stagger: 0.15 }, "-=0.2");
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden flex items-center justify-center">
      <h2 className="z-title absolute text-5xl md:text-8xl font-black gradient-text text-center px-6">Automate Everything</h2>
      <div className="z-panel absolute inset-0 bg-gradient-to-br from-primary/30 via-background to-accent/30 flex items-center justify-center" style={{ clipPath: "circle(0% at 50% 50%)" }}>
        <div className="grid md:grid-cols-3 gap-6 px-6" style={{ perspective: 800 }}>
          {stats.map((s) => (
            <div key={s.l} className="z-stat glass-card rounded-3xl p-10 text-center border border-border">
              <div className="text-6xl font-black gradient-text mb-2">{s.v}</div>
              <div className="text-muted-foreground uppercase tracking-widest text-sm">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZoomReveal;
