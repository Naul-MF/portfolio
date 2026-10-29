"use client";

import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={className}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent-glow">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}
