"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { FaDiscord } from "react-icons/fa6";
import { navLinks, siteConfig } from "@/lib/data";
import MagneticButton from "./ui/MagneticButton";

const socials = [
  { icon: Github, href: siteConfig.github, label: "GitHub" },
  { icon: Linkedin, href: siteConfig.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
  { icon: FaDiscord, href: siteConfig.discord, label: "Discord" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-borderline/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 py-12 sm:px-10 lg:px-16">
        <div className="flex w-full flex-col items-center justify-between gap-8 sm:flex-row">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold">
            <span className="text-foreground">N</span>
            <span className="text-accent">.</span>
          </a>

          {/* Nav */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted transition-colors hover:text-accent-glow"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex w-full items-center justify-between border-t border-borderline/40 pt-8">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>

          <MagneticButton strength={0.5}>
            <motion.a
              href="#home"
              aria-label="Back to top"
              whileHover={{ y: -3 }}
              className="glass flex h-11 w-11 items-center justify-center rounded-2xl text-muted transition-all hover:border-accent/60 hover:text-accent-glow hover:shadow-glow-sm"
            >
              <ArrowUp size={17} />
            </motion.a>
          </MagneticButton>
        </div>
      </div>
    </footer>
  );
}
