"use client";

import { useEffect, useRef } from "react";

/** Fixed decorative background: gradient orbs + drifting particles. */
export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const COUNT = Math.min(70, Math.floor(width / 22));
    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.4 + 0.3,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      a: Math.random() * 0.5 + 0.1,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167, 139, 250, ${p.a})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!prefersReduced) raf = requestAnimationFrame(draw);

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#0a0714_0%,#050505_55%)]" />

      {/* Floating blurred gradient orbs */}
      <div className="absolute -left-40 top-1/4 h-[480px] w-[480px] animate-pulse-slow rounded-full bg-accent/15 blur-[140px]" />
      <div className="absolute -right-40 top-[5%] h-[520px] w-[520px] animate-pulse-slow rounded-full bg-accent-glow/10 blur-[160px] [animation-delay:2s]" />
      <div className="absolute bottom-[10%] left-1/3 h-[400px] w-[400px] animate-pulse-slow rounded-full bg-accent/10 blur-[150px] [animation-delay:4s]" />

      {/* Tiny drifting particles */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-70" />
    </div>
  );
}
