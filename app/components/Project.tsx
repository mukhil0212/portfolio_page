"use client";
import { useRef } from "react";
import { projectsData } from "../lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa"; 

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  liveUrl, 
}: ProjectProps) {
  return (
    <div className="group mb-3 sm:mb-8 last:mb-0 flex flex-col">
  <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
    <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 flex flex-col justify-between h-auto">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
        {description}
      </p>
      <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
        {tags.map((tag, index) => (
          <li
            className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
            key={index}
          >
            {tag}
          </li>
        ))}
      </ul>
      {liveUrl && (
        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center text-blue-500 hover:text-blue-600 transition">
          <FaExternalLinkAlt className="mr-2" /> Live
        </a>
      )}
    </div>
  </section>
</div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
          transition 
          group-hover:scale-[1.04]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2

          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2

          group-even:right-[initial] group-even:-left-40"
        />
      </section>
   