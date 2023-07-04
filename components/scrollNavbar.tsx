"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const ScrollNavbar = () => {
  const [scrollPosition, setScrollPosition] = useState<string | null>("home");

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

  useEffect(() => {
    const sections = document.querySelectorAll(".section-marker");
    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <ul className="sticky top-24 row-span-6 justify-self-center self-start mt-40 font-semibold pl-2 border-l text-2xl">
      <Link
        className={`${
          scrollPosition === "home" ? "text-black" : "text-gray-300"
        }`}
        href="#navbar-top"
      >
        <li>Home</li>
      </Link>
      <Link
        className={`${
          scrollPosition === "skills" ? "text-black" : "text-gray-300"
        }`}
        href="#skills"
      >
        <li>Skills</li>
      </Link>
      <Link
        className={`${
          scrollPosition === "projects" ? "text-black" : "text-gray-300"
        }`}
        href="#projects"
      >
        <li>Projects</li>
      </Link>
    </ul>
  );
};

export default ScrollNavbar;
