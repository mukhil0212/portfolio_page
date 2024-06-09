import React from "react";
import { FaChalkboardTeacher, FaFlask, FaDatabase } from "react-icons/fa";
import { MdWork, MdSchool } from "react-icons/md";
import gsucfa from "../../public/projects/gsucfa.png";
import xray from "../../public/projects/xray.png";
import madura from "../../public/projects/maduracreation.png";

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
    title: "Student Assistant | Panther Dining",
    location: "Atlanta, GA",
    description:
      "Developed a stock inventory system using Flask, HTML, CSS, and AWS. Integrated AI/ML models for stock management and utilized Power BI for reporting. Streamlined data analysis using Pandas and Excel. Managed customer service and order processing.",
    icon: React.createElement(MdWork),
    date: "Sep 2021 - Oct 2022",
  },
  {
    title: "Data Science Intern",
    location: "Coimbatore, India",
    description:
      "Developed a linear regression model in R to forecast product demand, increasing sales revenue by 15%. Created a Power BI dashboard to visualize sales data. Engineered an R-based ETL process for data integration, improving processing efficiency by 20%. Utilized clustering algorithms to identify customer segments.",
    icon: React.createElement(FaDatabase),
    date: "May 2021 - Aug 2021",
  },
] as const;
export const projectsData = [
  {
    title: "Inventory Management for Chickfil A",
    description:
      "Developed a stock inventory system using Flask and AWS. Integrated AI/ML models and used Power BI for reporting. Streamlined data analysis with Pandas and Excel.",
    tags: [
      "Flask",
      "HTML",
      "CSS",
      "AWS",
      "AI/ML",
      "Power BI",
      "Pandas",
      "Excel",
      "HTTP",
    ],
    imageUrl: gsucfa,
    linkUrl: "https://www.gsucfa/ims.com",
  },
  {
    title: "Pneumonia Detection from X-ray Images",
    description:
      "Developed a CNN using PyTorch for pneumonia detection from X-ray images, achieving over 90% accuracy.",
    tags: ["Python", "Pytorch", "OpenCV"],
    imageUrl: xray,
    linkUrl: "",
  },
  {
    title: "Madura Creation Portfolio Website",
    description:
      "Designed a portfolio website using React and Tailwind CSS. Integrated animations with Framer Motion and used Supabase for backend services.",
    tags: ["React", "TailwindCSS", "Framer Motion", "Vercel", "Supabase"],
    imageUrl: madura,
    linkUrl: "https://madura-creation.vercel.app",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
