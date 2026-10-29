"use client";

import { ArrowUpRight } from "lucide-react";
import { stats } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Counter from "./ui/Counter";

export default function About() {
  return (
    <section id="about" className="section-padding relative mx-auto max-w-7xl">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="About me"
            title={
              <>
                I turn ideas into{" "}
                <span className="text-gradient">clean, scalable code.</span>
              </>
            }
          />
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-lg leading-relaxed text-muted">
              I&apos;m passionate about problems, logic and beautiful
              interfaces. With a strong foundation in both design and
              development, I enjoy creating seamless experiences from start to
              finish — from the first wireframe to the last deployment.
            </p>
            <p className="mt-4 max-w-lg leading-relaxed text-muted">
              When I&apos;m not coding, I&apos;m exploring new technologies,
              contributing to open source and refining the small details that
              make products feel premium.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 border-b border-accent/60 pb-1 text-sm font-medium text-accent-glow transition-colors hover:border-accent-glow"
            >
              More about me
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </Reveal>
        </div>

        {/* Stats card */}
        <Reveal delay={0.2}>
          <div className="glass divide-y divide-borderline/70 rounded-3xl shadow-card">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group flex items-center justify-between px-8 py-7 transition-colors hover:bg-white/[0.02]"
              >
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="text-4xl font-bold text-accent-glow transition-transform duration-300 group-hover:scale-105 sm:text-5xl"
                />
                <span className="text-sm text-muted">{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
