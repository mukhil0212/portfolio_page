"use client";

import React from "react";
import SectionHeading from "../components/Section-heading";
import { useSectionInView } from "../lib/hooks";
import { motion } from "framer-motion";
import {
  SiPython,
  SiReact,
  SiDocker,
  SiFlask,
  SiPostgresql,
  SiVisualstudio,
  SiAmazonaws,
  SiPytorch,
  SiGit,
  SiTypescript,
} from "react-icons/si";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const skillsWithIcons = [
  { name: "Python", icon: <SiPython size={30} color="#306998" /> },
  { name: "PyTorch", icon: <SiPytorch size={30} color="#EE4C2C" /> },
  { name: "React", icon: <SiReact size={30} color="#61dafb" /> },
  { name: "TypeScript", icon: <SiTypescript size={30} color="#007acc" /> },
  { name: "Docker", icon: <SiDocker size={30} color="#2496ed" /> },
  { name: "Flask", icon: <SiFlask size={30} color="#000000" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={30} color="#336791" /> },
  { name: "Visual Studio", icon: <SiVisualstudio size={30} color="#5c2d91" /> },
  { name: "AWS", icon: <SiAmazonaws size={30} color="#FF9900" /> },
  { name: "Git", icon: <SiGit size={30} color="#F05032" /> },
];

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-4 text-lg text-gray-800">
        {skillsWithIcons.map((skill, index) => (
          <motion.li
            className="flex flex-col items-center bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <span className="mb-2">{skill.icon}</span>
            {skill.name}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
