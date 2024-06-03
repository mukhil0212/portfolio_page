"use client"; // This directive ensures the component is a client component
import React from "react";
import { motion } from "framer-motion";

const Sectiondivider = () => {
  return (
    <motion.div
      className="bg-gray-400 my-24 h-1 w-4/5 rounded-full dark:bg-opacity-20"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
};

export default Sectiondivider;
