import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export const useGSAPScrollTrigger = (
  selector: string,
  animation: gsap.TweenVars,
  triggerOptions?: ScrollTrigger.Vars
) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50, ...animation },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
            ...triggerOptions,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [selector, animation, triggerOptions]);

  return ref;
};

export const initGSAPAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);

  // Magnetic button effect
  document.querySelectorAll('.magnetic-btn').forEach((btn) => {
    btn.addEventListener('mousemove', (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const rect = (btn as HTMLElement).getBoundingClientRect();
      const x = mouseEvent.clientX - rect.left - rect.width / 2;
      const y = mouseEvent.clientY - rect.top - rect.height / 2;
      gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: "power2.out" });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.5)" });
    });
  });

  // Text reveal animation for headings
  gsap.utils.toArray<HTMLElement>(".text-reveal").forEach((text) => {
    gsap.fromTo(
      text,
      { 
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
        y: 50 
      },
      {
        clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
        y: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: text,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // Parallax depth effect
  gsap.utils.toArray<HTMLElement>(".parallax-layer").forEach((layer, i) => {
    const depth = (i + 1) * 30;
    gsap.to(layer, {
      y: -depth,
      ease: "none",
      scrollTrigger: {
        trigger: layer,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });
  });

  // Section headers animation with split text effect
  gsap.utils.toArray<HTMLElement>(".section-header").forEach((header) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: header,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      header,
      { opacity: 0, y: 80, rotationX: -15 },
      { opacity: 1, y: 0, rotationX: 0, duration: 1, ease: "power3.out" }
    );
  });

  // Service cards 3D stagger animation
  gsap.utils.toArray<HTMLElement>(".service-card").forEach((card, index) => {
    gsap.set(card, { transformPerspective: 1000 });
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      card,
      { 
        opacity: 0, 
        y: 100, 
        rotationX: 25,
        rotationY: index % 2 === 0 ? -10 : 10,
        scale: 0.8 
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        duration: 1,
        delay: index * 0.1,
        ease: "power3.out",
      }
    );

    // Hover 3D effect
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        scale: 1.05,
        rotationY: 5,
        boxShadow: "0 25px 50px -12px rgba(124, 58, 237, 0.3)",
        duration: 0.4,
        ease: "power2.out",
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        scale: 1,
        rotationY: 0,
        boxShadow: "none",
        duration: 0.4,
        ease: "power2.out",
      });
    });
  });

  // Process steps timeline animation
  const processTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".process-container",
      start: "top 70%",
      end: "bottom 30%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.utils.toArray<HTMLElement>(".process-step").forEach((step, index) => {
    processTimeline.fromTo(
      step,
      { 
        opacity: 0, 
        x: index % 2 === 0 ? -100 : 100, 
        scale: 0.8,
        rotationZ: index % 2 === 0 ? -5 : 5
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        rotationZ: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      },
      index * 0.2
    );
  });

  // Process line draw animation
  gsap.utils.toArray<HTMLElement>(".process-line").forEach((line) => {
    gsap.fromTo(
      line,
      { scaleY: 0, transformOrigin: "top" },
      {
        scaleY: 1,
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: line,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // Why us features stagger with wave effect
  gsap.utils.toArray<HTMLElement>(".why-us-feature").forEach((feature, index) => {
    gsap.fromTo(
      feature,
      { 
        opacity: 0, 
        x: 80,
        y: Math.sin(index) * 30,
        scale: 0.9
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.8,
        delay: index * 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: feature,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // Tech rows infinite scroll animation
  gsap.utils.toArray<HTMLElement>(".tech-row").forEach((row, index) => {
    const direction = index % 2 === 0 ? 1 : -1;
    
    // Parallax on scroll
    gsap.to(row, {
      x: direction * 150,
      ease: "none",
      scrollTrigger: {
        trigger: row,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Continuous marquee animation
    const items = row.querySelectorAll('.tech-badge');
    gsap.to(items, {
      x: direction * -20,
      duration: 3,
      ease: "none",
      repeat: -1,
      yoyo: true,
    });
  });

  // Tech badges hover glow effect
  gsap.utils.toArray<HTMLElement>(".tech-badge").forEach((badge) => {
    badge.addEventListener('mouseenter', () => {
      gsap.to(badge, {
        scale: 1.15,
        boxShadow: "0 0 30px rgba(124, 58, 237, 0.5)",
        duration: 0.3,
        ease: "power2.out",
      });
    });

    badge.addEventListener('mouseleave', () => {
      gsap.to(badge, {
        scale: 1,
        boxShadow: "none",
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });

  // CTA section epic entrance
  const ctaTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".cta-section",
      start: "top 75%",
      toggleActions: "play none none reverse",
    },
  });

  ctaTimeline
    .fromTo(
      ".cta-card",
      { opacity: 0, scale: 0.8, y: 100, rotationX: 20 },
      { opacity: 1, scale: 1, y: 0, rotationX: 0, duration: 1.2, ease: "power3.out" }
    )
    .fromTo(
      ".cta-title",
      { opacity: 0, y: 50, clipPath: "inset(0 0 100% 0)" },
      { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)", duration: 0.8, ease: "power3.out" },
      "-=0.6"
    )
    .fromTo(
      ".cta-subtitle",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.4"
    )
    .fromTo(
      ".cta-button",
      { opacity: 0, scale: 0.8, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "back.out(2)" },
      "-=0.3"
    );

  // Footer reveal animation
  gsap.utils.toArray<HTMLElement>(".footer-col").forEach((col, index) => {
    gsap.fromTo(
      col,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: col,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // Floating elements continuous animation
  gsap.to(".floating-orb", {
    y: "random(-30, 30)",
    x: "random(-20, 20)",
    duration: "random(3, 5)",
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1,
    repeatRefresh: true,
  });

  // Gradient text shimmer effect
  gsap.to(".gradient-text-animate", {
    backgroundPosition: "200% center",
    duration: 3,
    ease: "none",
    repeat: -1,
  });

  // Number counter animation
  gsap.utils.toArray<HTMLElement>(".count-up").forEach((counter) => {
    const value = parseInt(counter.getAttribute('data-value') || '0');
    gsap.fromTo(
      counter,
      { innerText: 0 },
      {
        innerText: value,
        duration: 2,
        ease: "power2.out",
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: counter,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Scroll progress indicator
  gsap.to(".scroll-progress", {
    scaleX: 1,
    ease: "none",
    scrollTrigger: {
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.3,
    },
  });

  // Cursor follower effect for hero
  const cursor = document.querySelector('.cursor-glow');
  if (cursor) {
    document.addEventListener('mousemove', (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.8,
        ease: "power2.out",
      });
    });
  }
};

export const animateOnScroll = (element: HTMLElement, animation: gsap.TweenVars) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      ...animation,
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

export const createStaggerAnimation = (
  selector: string,
  staggerAmount: number = 0.1
) => {
  gsap.utils.toArray<HTMLElement>(selector).forEach((element, index) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 60, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        delay: index * staggerAmount,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
};

export const createParallaxEffect = (
  selector: string,
  speed: number = 0.5
) => {
  gsap.utils.toArray<HTMLElement>(selector).forEach((element) => {
    gsap.to(element, {
      y: `${speed * 100}`,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });
};

export default gsap;
