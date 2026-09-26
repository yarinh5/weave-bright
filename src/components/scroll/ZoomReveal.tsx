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
    const media = gsap.matchMedia();
    const ctx = gsap.context(() => {
      media.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: ref.current, start: "top top", end: "+=200%", scrub: 0.7, pin: true },
        });
        tl.to(".z-title", { scale: 8, opacity: 0, ease: "power2.in", force3D: true })
          .fromTo(".z-panel", { clipPath: "circle(0% at 50% 50%)" }, { clipPath: "circle(75% at 50% 50%)", ease: "power2.out" }, "-=0.4")
          .fromTo(".z-stat", { y: 80, opacity: 0, rotateX: -60 }, { y: 0, opacity: 1, rotateX: 0, stagger: 0.15, force3D: true }, "-=0.2");
      });

      media.add("(max-width: 767px) and (prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: ref.current, start: "top 72%", toggleActions: "play none none reverse" },
        });
        tl.fromTo(".z-title", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, ease: "power2.out", force3D: true })
          .fromTo(".z-panel", { scale: 0.94, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.7, ease: "power2.out", force3D: true }, "-=0.2")
          .fromTo(".z-stat", { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, stagger: 0.1, ease: "power2.out", force3D: true }, "-=0.35");
      });
    }, ref);
    return () => {
      media.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen md:h-screen overflow-hidden flex flex-col items-center justify-center py-20 md:py-0">
      <h2 className="z-title relative md:absolute text-5xl md:text-8xl font-black gradient-text text-center px-6 mb-10 md:mb-0">Automate Everything</h2>
      <div className="z-panel relative md:absolute md:inset-0 bg-gradient-to-br from-primary/30 via-background to-accent/30 flex items-center justify-center py-8 md:py-0 w-full md:[clip-path:circle(0%_at_50%_50%)]">
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 px-6 w-full" style={{ perspective: 800 }}>
          {stats.map((s) => (
            <div key={s.l} className="z-stat glass-card rounded-3xl p-7 md:p-10 text-center border border-border">
              <div className="text-5xl md:text-6xl font-black gradient-text mb-2">{s.v}</div>
              <div className="text-muted-foreground uppercase tracking-widest text-sm">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZoomReveal;
