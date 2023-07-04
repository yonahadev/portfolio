"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const ScrollNavbar = () => {
  const [scrollPosition, setScrollPosition] = useState<string | null>("home");
  const { theme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setScrollPosition(entry.target.getAttribute("id"));
          }
        });
      },
      { threshold: 0.5 }
    );
    const sections = document.querySelectorAll(".section-marker");
    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <ul className="sticky top-24 row-span-6 justify-self-center self-start mt-40 font-semibold pl-2 border-l sm:text-2xl hidden sm:block">
      <Link
        className={`${
          scrollPosition === "home"
            ? theme === "dark" || theme === "system"
              ? "text-white"
              : "text-black"
            : theme === "dark" || theme === "system"
            ? "text-gray-700"
            : "text-gray-300"
        }`}
        href="#navbar-top"
      >
        <li>Home</li>
      </Link>
      <Link
        className={`${
          scrollPosition === "skills"
            ? theme === "dark" || theme === "system"
              ? "text-white"
              : "text-black"
            : theme === "dark" || theme === "system"
            ? "text-gray-700"
            : "text-gray-300"
        }`}
        href="#skills"
      >
        <li>Skills</li>
      </Link>
      <Link
        className={`${
          scrollPosition === "projects"
            ? theme === "dark" || theme === "system"
              ? "text-white"
              : "text-black"
            : theme === "dark" || theme === "system"
            ? "text-gray-700"
            : "text-gray-300"
        }`}
        href="#projects"
      >
        <li>Projects</li>
      </Link>
    </ul>
  );
};

export default ScrollNavbar;
