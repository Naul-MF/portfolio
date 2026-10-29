import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiSharp,
  SiDotnet,
  SiMongodb,
  SiDocker,
  SiGit,
  SiTailwindcss,
} from "react-icons/si";
import { DiMsqlServer, DiWindows } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";

export const siteConfig = {
  name: "Naul",
  role: "Full-Stack Developer",
  email: "naul.dev@example.com",
  location: "Netherlands",
  github: "https://github.com/naul",
  linkedin: "https://linkedin.com/in/naul",
  discord: "https://discord.com/users/naul",
  resume: "/resume.pdf",
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const stats = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 25, suffix: "+", label: "Projects Completed" },
  { value: 100, suffix: "%", label: "Dedication" },
];

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  badge: string;
}

export const projects: Project[] = [
  {
    title: "Analytics Dashboard",
    description:
      "A full-stack analytics dashboard with real-time data visualization, user management and role-based access control.",
    image: "/projects/analytics.svg",
    tags: ["React", "Next.js", "Node.js", "MongoDB"],
    github: "https://github.com/naul",
    demo: "https://example.com",
    badge: "Full Stack",
  },
  {
    title: "E-Commerce Store",
    description:
      "A modern e-commerce experience built with React, Tailwind and Stripe — cart, checkout and order tracking included.",
    image: "/projects/ecommerce.svg",
    tags: ["React", "Tailwind CSS", "Stripe"],
    github: "https://github.com/naul",
    demo: "https://example.com",
    badge: "Frontend",
  },
  {
    title: "TaskFlow App",
    description:
      "A productivity mobile-first app to manage tasks, build habits and boost daily efficiency with smart reminders.",
    image: "/projects/taskflow.svg",
    tags: ["React Native", "Express", "MongoDB"],
    github: "https://github.com/naul",
    demo: "https://example.com",
    badge: "Mobile",
  },
];

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

export const skills: Skill[] = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express", icon: SiExpress, color: "#FFFFFF" },
  { name: "C#", icon: SiSharp, color: "#512BD4" },
  { name: ".NET", icon: SiDotnet, color: "#512BD4" },
  { name: "SQL Server", icon: DiMsqlServer, color: "#CC2927" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Azure", icon: VscAzure, color: "#0078D4" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
];

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
}

export const experience: Experience[] = [
  {
    company: "TechNova Solutions",
    position: "Full-Stack Developer",
    period: "2024 — Present",
    description:
      "Building scalable web applications with Next.js, .NET and Azure. Leading the migration of a legacy monolith to a modern microservice architecture and improving Core Web Vitals across the product suite.",
  },
  {
    company: "PixelWorks Studio",
    position: "Frontend Developer",
    period: "2023 — 2024",
    description:
      "Crafted interactive marketing sites and design systems for international clients. Introduced TypeScript and component-driven development, cutting UI regressions by 40%.",
  },
  {
    company: "Freelance",
    position: "Web Developer",
    period: "2022 — 2023",
    description:
      "Delivered custom websites and e-commerce solutions for small businesses — from concept and design to deployment and maintenance.",
  },
];
