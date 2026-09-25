import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Bot, Workflow, Globe, LayoutDashboard, FileText } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const panels = [
  { icon: Globe, title: "Automated Websites", text: "Sites that capture, qualify and route leads on their own." },
  { icon: FileText, title: "Landing Pages", text: "High-converting pages built for campaigns and fast launches." },
  { icon: Workflow, title: "Business Automations", text: "Connect every tool. Remove every manual step." },
  { icon: Bot, title: "AI Agents", text: "Agents that answer, sell and support 24/7." },
  { icon: LayoutDashboard, title: "CRM & SaaS", text: "Custom platforms that scale with your operation." },
];

const HorizontalShowcase = () => {
  const ref = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const t = track.current!;
      const dist = () => t.scrollWidth - window.innerWidth;
      const move = gsap.to(t, {
        x: () => -dist(),
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top top", end: () => "+=" + dist(), scrub: 1, pin: true, invalidateOnRefresh: true },
      });
      gsap.to(".h-progress", { scaleX: 1, ease: "none", scrollTrigger: { trigger: ref.current, start: "top top", end: () => "+=" + dist(), scrub: true } });
      gsap.utils.toArray<HTMLElement>(".h-panel").forEach((p) => {
        gsap.fromTo(p, { scale: 0.8, rotateY: -25, opacity: 0.3 }, {
          scale: 1, rotateY: 0, opacity: 1, ease: "none",
          scrollTrigger: { trigger: p, containerAnimation: move, start: "left right", end: "center center", scrub: true },
        });
        gsap.fromTo(p.querySelector(".h-icon"), { rotate: -90, scale: 0 }, {
          rotate: 0, scale: 1, ease: "back.out(2)",
          scrollTrigger: { trigger: p, containerAnimation: move, start: "left 80%", end: "left 40%", scrub: true },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden flex flex-col justify-center">
      <div className="px-6 md:px-16 mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">What we build</p>
        <h2 className="text-4xl md:text-6xl font-bold gradient-text">Scroll through the system</h2>
      </div>
      <div ref={track} className="flex gap-8 px-6 md:px-16 w-max" style={{ perspective: 1200 }}>
        {panels.map(({ icon: Icon, title, text }, i) => (
          <div key={title} className="h-panel glass-card rounded-3xl p-10 w-[80vw] md:w-[40vw] h-[50vh] flex flex-col justify-between border border-border">
            <span className="text-7xl font-bold text-muted-foreground/20">0{i + 1}</span>
            <div>
              <div className="h-icon w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-3">{title}</h3>
              <p className="text-lg text-muted-foreground">{text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-6 md:mx-16 mt-10 h-1 bg-muted rounded-full overflow-hidden">
        <div className="h-progress h-full bg-gradient-to-r from-primary to-accent origin-left scale-x-0" />
      </div>
    </section>
  );
};

export default HorizontalShowcase;
