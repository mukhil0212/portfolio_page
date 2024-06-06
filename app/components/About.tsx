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
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3" style={{ textAlign: "justify" }}>
        Since childhood, I've been fascinated by the inner workings of
        computers. I was that kid who dismantled desktops just to peer at the
        circuitry beneath, driven by curiosity and a desire to understand how
        these machines functioned. This early passion for technology steered me
        towards a career in computer science. I am now a{" "}
        <span className="font-medium">rising senior</span> at{" "}
        <span className="font-medium">Georgia State University</span>, set to
        graduate in <span className="italic">Summer 2025</span>. My academic and
        professional journeys are heavily influenced by my interest in data
        science and utilizing modern technologies. My expertise primarily lies
        in technologies such as{" "}
        <span className="font-medium">
          Python, SQL, PyTorch, React.js, Node.js,
        </span>{" "}
        and <span className="font-medium">Tailwind CSS</span>.
      </p>

      <p style={{ textAlign: "justify" }}>
        <span className="italic">When I'm not coding,</span> I indulge in my
        hobbies that include learning about{" "}
        <span className="font-medium">space</span>, cooking, and spending
        quality time with friends and family. I am constantly seeking to learn
        new skills and dive into diverse fields, enriching both my personal and
        professional life.
      </p>
    </motion.section>
  );
}
