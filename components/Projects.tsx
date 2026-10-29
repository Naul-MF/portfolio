"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding relative mx-auto max-w-7xl"
    >
      <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Featured projects"
          title={
            <>
              Some things I&apos;ve <span className="text-gradient">built.</span>
            </>
          }
        />
        <Reveal delay={0.15}>
          <a
            href="https://github.com/naul"
            target="_blank"
            rel="noopener noreferrer"
            className="glass group flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm text-foreground transition-all hover:border-accent/60 hover:shadow-glow-sm"
          >
            View all projects
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </Reveal>
      </div>

      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.12 }}
            whileHover={{ y: -8 }}
            className="glass group relative flex flex-col overflow-hidden rounded-3xl shadow-card transition-all duration-500 hover:border-accent/50 hover:shadow-glow"
          >
            {/* Animated border sheen */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:linear-gradient(120deg,transparent_30%,rgba(167,139,250,0.12)_50%,transparent_70%)]" />

            {/* Image */}
            <div className="relative m-3 aspect-[16/10] overflow-hidden rounded-2xl border border-borderline/60">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-full bg-accent/20 px-3 py-1 text-[11px] font-medium text-accent-glow backdrop-blur-md">
                {project.badge}
              </span>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col px-6 pb-6 pt-2">
              <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent-glow">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-borderline/70 bg-white/[0.03] px-3 py-1 text-[11px] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} on GitHub`}
                  className="glass flex h-10 w-10 items-center justify-center rounded-xl text-muted transition-all hover:border-accent/60 hover:text-accent-glow"
                >
                  <Github size={16} />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/demo flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent/15 py-2.5 text-sm font-medium text-accent-glow transition-all hover:bg-accent hover:text-white"
                >
                  Live Demo
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover/demo:-translate-y-0.5 group-hover/demo:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
