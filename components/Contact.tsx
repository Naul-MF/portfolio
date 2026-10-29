"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, MapPin, Send } from "lucide-react";
import { siteConfig } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import MagneticButton from "./ui/MagneticButton";

const inputClasses =
  "w-full rounded-2xl border border-borderline/80 bg-white/[0.03] px-5 py-3.5 text-sm text-foreground placeholder:text-muted/60 outline-none transition-all duration-300 focus:border-accent/70 focus:shadow-glow-sm";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    // Simulate a send, then fall back to a mailto handoff
    const data = new FormData(form);
    const subject = encodeURIComponent(String(data.get("subject") ?? ""));
    const body = encodeURIComponent(
      `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`
    );
    setTimeout(() => {
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      form.reset();
      setTimeout(() => setStatus("idle"), 4000);
    }, 900);
  };

  return (
    <section
      id="contact"
      className="section-padding relative mx-auto max-w-7xl"
    >
      <div className="grid gap-14 lg:grid-cols-2">
        {/* Left — copy */}
        <div>
          <SectionHeading
            eyebrow="Contact"
            title={
              <>
                Let&apos;s work <span className="text-gradient">together.</span>
              </>
            }
          />
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-md leading-relaxed text-muted">
              Have a project in mind or just want to say hi? My inbox is always
              open — I&apos;ll get back to you as soon as I can.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <ul className="mt-10 space-y-5 text-sm">
              <li className="flex items-center gap-4 text-muted">
                <span className="glass flex h-11 w-11 items-center justify-center rounded-2xl text-accent-glow">
                  <Mail size={17} />
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-foreground"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-4 text-muted">
                <span className="glass flex h-11 w-11 items-center justify-center rounded-2xl text-accent-glow">
                  <MapPin size={17} />
                </span>
                {siteConfig.location}
              </li>
              <li className="flex items-center gap-4 text-muted">
                <span className="glass flex h-11 w-11 items-center justify-center rounded-2xl">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400/60" />
                    <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>
                </span>
                Available for work
              </li>
            </ul>
          </Reveal>
        </div>

        {/* Right — glass form */}
        <Reveal delay={0.2}>
          <form
            onSubmit={handleSubmit}
            className="glass space-y-5 rounded-3xl p-8 shadow-card"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                name="name"
                required
                placeholder="Your name"
                autoComplete="name"
                className={inputClasses}
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Your email"
                autoComplete="email"
                className={inputClasses}
              />
            </div>
            <input
              name="subject"
              required
              placeholder="Subject"
              className={inputClasses}
            />
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Your message..."
              className={`${inputClasses} resize-none`}
            />
            <MagneticButton className="pt-1">
              <motion.button
                type="submit"
                disabled={status !== "idle"}
                whileTap={{ scale: 0.97 }}
                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-accent px-7 py-4 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:bg-accent/90 disabled:opacity-70"
              >
                {status === "sent" ? (
                  <>
                    Message ready <CheckCircle2 size={16} />
                  </>
                ) : status === "sending" ? (
                  <>
                    Sending
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.8,
                        ease: "linear",
                      }}
                      className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white"
                    />
                  </>
                ) : (
                  <>
                    Send me a message
                    <Send
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                    />
                  </>
                )}
              </motion.button>
            </MagneticButton>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
