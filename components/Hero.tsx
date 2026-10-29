"use client";

import dynamic from "next/dynamic";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { FaDiscord } from "react-icons/fa6";
import { siteConfig } from "@/lib/data";
import MagneticButton from "./ui/MagneticButton";

const ParticleSphere = dynamic(() => import("./ParticleSphere"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full animate-pulse rounded-full bg-accent/5 blur-3xl" />
  ),
});

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

const socials = [
  { icon: Github, href: siteConfig.github, label: "GitHub" },
  { icon: Linkedin, href: siteConfig.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
  { icon: FaDiscord, href: siteConfig.discord, label: "Discord" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Vertical social rail */}
      <motion.aside
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex"
      >
        {socials.map(({ icon: Icon, href, label }) => (
          <MagneticButton key={label} strength={0.5}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="glass flex h-11 w-11 items-center justify-center rounded-2xl text-muted transition-all duration-300 hover:border-accent/60 hover:text-accent-glow hover:shadow-glow-sm"
            >
              <Icon size={18} />
            </a>
          </MagneticButton>
        ))}
        <div className="mt-2 h-16 w-px bg-gradient-to-b from-borderline to-transparent" />
      </motion.aside>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 pt-24 sm:px-10 lg:grid-cols-2 lg:gap-8 lg:px-16 lg:pt-0">
        {/* Left — copy */}
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.p
            variants={item}
            className="mb-4 text-sm font-medium tracking-wide text-accent-glow"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            variants={item}
            className="text-6xl font-extrabold tracking-tight text-foreground sm:text-7xl md:text-8xl"
          >
            {siteConfig.name}
            <span className="text-accent">.</span>
          </motion.h1>

          <motion.h2
            variants={item}
            className="mt-4 max-w-xl text-3xl font-bold leading-tight tracking-tight text-foreground/90 sm:text-4xl md:text-5xl"
          >
            I build{" "}
            <span className="text-gradient">digital experiences</span> that
            make an <span className="text-gradient">impact</span>.
          </motion.h2>

          <motion.p variants={item} className="mt-6 max-w-md text-muted">
            I&apos;m a full-stack developer focused on building modern,
            responsive and high-performance web applications.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <MagneticButton>
              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-2xl bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:bg-accent/90 hover:shadow-glow"
              >
                View my work
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="#contact"
                className="glass group flex items-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-accent/60 hover:shadow-glow-sm"
              >
                Contact me
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </MagneticButton>
          </motion.div>

          {/* Mobile socials */}
          <motion.div variants={item} className="mt-10 flex gap-3 lg:hidden">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="glass flex h-11 w-11 items-center justify-center rounded-2xl text-muted transition-colors hover:text-accent-glow"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — 3D particle sphere */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
          className="relative hidden h-[540px] lg:block xl:h-[620px]"
        >
          <ParticleSphere />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-90 items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-muted transition-colors hover:text-accent-glow lg:flex"
      >
        Scroll
        <span className="h-px w-12 bg-borderline" />
      </motion.a>
    </section>
  );
}
