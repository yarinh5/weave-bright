import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const ManifestoSection = () => {
  const { t } = useLanguage();
  const TEXT = t.manifesto;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const media = gsap.matchMedia();
    const ctx = gsap.context(() => {
      media.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: ref.current, start: "top top", end: "+=150%", scrub: 0.7, pin: true },
        });
        tl.fromTo(".m-word", { opacity: 0.08, y: 20, filter: "blur(6px)" }, { opacity: 1, y: 0, filter: "blur(0px)", stagger: 0.05, ease: "none", force3D: true })
          .fromTo(".m-line", { scaleX: 0 }, { scaleX: 1, ease: "none" }, 0)
          .to(".m-orb", { scale: 1.6, rotate: 120, ease: "none", force3D: true }, 0);
      });

      media.add("(max-width: 767px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(".m-word", { opacity: 0.16, y: 12 }, {
          opacity: 1,
          y: 0,
          stagger: 0.025,
          duration: 0.45,
          ease: "power2.out",
          force3D: true,
          scrollTrigger: { trigger: ref.current, start: "top 72%", toggleActions: "play none none reverse" },
        });
        gsap.fromTo(".m-line", { scaleX: 0 }, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top 85%", end: "bottom 35%", scrub: 0.2 },
        });
      });
    }, ref);
    return () => {
      media.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section ref={ref} className="relative min-h-[85svh] md:h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="m-orb absolute w-[320px] h-[320px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl md:blur-3xl" />
      <div className="relative max-w-5xl">
        <div className="m-line h-px w-full bg-gradient-to-r from-primary to-accent origin-left mb-10" />
        <p className="text-3xl md:text-6xl font-bold leading-tight text-foreground">
          {TEXT.split(" ").map((w, i) => (
            <span key={i} className="m-word inline-block me-3">{w}</span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default ManifestoSection;
