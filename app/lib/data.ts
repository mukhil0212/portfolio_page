import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "../../public/projects/corpcomment.png";
import rmtdevImg from "../../public/projects/rmtdev.png";
import wordanalyticsImg from "../../public/projects//wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Inventory Management for Chickfil A",
    description:
      "Developed a stock inventory system using Flask and AWS. Integrated AI/ML models and used Power BI for reporting. Streamlined data analysis with Pandas and Excel.",
    tags: ["Flask", "HTML", "CSS", "AWS", "AI/ML", "Power BI", "Pandas", "Excel", "HTTP"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Pneumonia Detection from X-ray Images",
    description:
      "Developed a CNN using PyTorch for pneumonia detection from X-ray images, achieving over 90% accuracy.",
    tags: ["Python", "Pytorch", "OpenCV"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Madura Creation Portfolio Website",
    description:
      "Designed a portfolio website using React and Tailwind CSS. Integrated animations with Framer Motion and used Supabase for backend services.",
    tags: ["React", "TailwindCSS", "Framer Motion", "Vercel", "Supabase"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
 