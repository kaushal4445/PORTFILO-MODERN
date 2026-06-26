import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children, delay = 0, direction = "up" }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("reveal-visible");
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const directionMap = {
    up: "translateY(32px)",
    down: "translateY(-32px)",
    left: "translateX(32px)",
    right: "translateX(-32px)",
    none: "translateY(0)",
  };

  const transform = directionMap[direction] ?? directionMap.up;

  return (
    <>
      <style>{`
        .reveal-base {
          opacity: 0;
          transform: ${transform};
          transition:
            opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          transition-delay: ${delay}ms;
          will-change: opacity, transform;
        }
        .reveal-visible {
          opacity: 1 !important;
          transform: none !important;
        }
      `}</style>
      <div ref={ref} className="reveal-base">
        {children}
      </div>
    </>
  );
};