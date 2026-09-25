import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TEXT =
  "Every repetitive task in your business is a system waiting to be built. We design it, automate it, and let it run — so you can focus on growth.";

const ManifestoSection = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: "top top", end: "+=150%", scrub: 1, pin: true },
      });
      tl.fromTo(".m-word", { opacity: 0.08, y: 20, filter: "blur(6px)" }, { opacity: 1, y: 0, filter: "blur(0px)", stagger: 0.05, ease: "none" })
        .fromTo(".m-line", { scaleX: 0 }, { scaleX: 1, ease: "none" }, 0)
        .to(".m-orb", { scale: 1.6, rotate: 120, ease: "none" }, 0);
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="m-orb absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />
      <div className="relative max-w-5xl">
        <div className="m-line h-px w-full bg-gradient-to-r from-primary to-accent origin-left mb-10" />
        <p className="text-3xl md:text-6xl font-bold leading-tight text-foreground">
          {TEXT.split(" ").map((w, i) => (
            <span key={i} className="m-word inline-block mr-3">{w}</span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default ManifestoSection;
