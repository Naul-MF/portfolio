"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Skills"
        title={
          <>
            Technologies I <span className="text-gradient">work with.</span>
          </>
        }
        className="mb-16"
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            whileHover={{ y: -6 }}
            className="glass group flex flex-col items-center gap-3 rounded-3xl px-4 py-7 shadow-card transition-colors duration-300 hover:border-accent/50"
          >
            <skill.icon
              size={34}
              style={{ color: skill.color }}
              className="transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(167,139,250,0.6)]"
            />
            <span className="text-xs font-medium text-muted transition-colors group-hover:text-foreground">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
