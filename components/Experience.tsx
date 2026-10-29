"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding relative mx-auto max-w-7xl"
    >
      <SectionHeading
        eyebrow="Experience"
        title={
          <>
            Where I&apos;ve <span className="text-gradient">worked.</span>
          </>
        }
        className="mb-16"
      />

      <div className="relative mx-auto max-w-3xl">
        {/* Timeline spine */}
        <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-accent/60 via-borderline to-transparent sm:left-1/2" />

        <div className="space-y-12">
          {experience.map((job, i) => (
            <motion.article
              key={job.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`relative pl-12 sm:w-1/2 sm:pl-0 ${
                i % 2 === 0
                  ? "sm:pr-12 sm:text-right"
                  : "sm:ml-auto sm:pl-12"
              }`}
            >
              {/* Timeline dot */}
              <span
                className={`absolute top-1.5 flex h-4 w-4 items-center justify-center ${
                  i % 2 === 0
                    ? "left-2.5 sm:left-auto sm:-right-2"
                    : "left-2.5 sm:-left-2"
                }`}
              >
                <span className="absolute h-4 w-4 animate-ping rounded-full bg-accent/40" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-accent shadow-glow-sm" />
              </span>

              <div className="glass group rounded-3xl p-7 text-left shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow-sm">
                <p className="text-xs font-medium uppercase tracking-widest text-accent-glow">
                  {job.period}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">
                  {job.position}
                </h3>
                <p className="mt-0.5 text-sm font-medium text-muted">
                  {job.company}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {job.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
