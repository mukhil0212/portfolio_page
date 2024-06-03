"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SectionHeading from "./Section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm currently a <span className="font-medium">rising senior</span> in
        Computer Science at{" "}
        <span className="font-medium">Georgia State University</span>,
        graduating in <span className="italic">Summer 2025</span>. I have a
        strong passion for data science and working with modern technologies. My
        core stack includes{" "}
        <span className="font-medium">
          Python, SQL, PyTorch, React.js, Node.js,
        </span>{" "}
        and <span className="font-medium">Tailwind CSS</span>.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy learning
        about <span className="font-medium">space</span>, cooking, and hanging
        out with friends and family. I'm always eager to learn new things and
        explore different fields.
      </p>
    </motion.section>
  );
}
