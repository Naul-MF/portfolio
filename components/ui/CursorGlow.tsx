"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 200, damping: 30, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 200, damping: 30, mass: 0.6 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="cursor-glow pointer-events-none fixed left-0 top-0 z-[60] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        background:
          "radial-gradient(circle, rgba(124,58,237,0.14) 0%, rgba(124,58,237,0.05) 40%, transparent 70%)",
      }}
    />
  );
}
