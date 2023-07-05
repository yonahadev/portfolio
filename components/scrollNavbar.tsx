"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const ScrollNavbar = () => {
  const [scrollPosition, setScrollPosition] = useState<string | null>("home");
  const observerRef = useRef<IntersectionObserver | null>(null); // Create a ref for the IntersectionObserver

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setScrollPosition(entry.target.getAttribute("id"));
          }
        });
      },
      { threshold: 0.5 }
    );

    return () => {
      // Cleanup the observer on component unmount
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(".section-marker");

    // Observe the sections when the ref is available
    if (observerRef.current) {
      sections.forEach((section) => {
        observerRef.current!.observe(section);
      });
    }
  }, [observerRef.current]);

  return (
    <ul className="sticky top-24 row-span-6 justify-self-center self-start mt-40 font-semibold pl-2 border-l sm:text-2xl hidden sm:block">
      <Link
        className={`${
          scrollPosition === "home" ? "opacity-100" : "opacity-30"
        }`}
        href="#navbar-top"
      >
        <li>Home</li>
      </Link>
      <Link
        className={`${
          scrollPosition === "about" ? "opacity-100" : "opacity-30"
        }`}
        href="#about"
      >
        <li>About</li>
      </Link>
      <Link
        className={`${
          scrollPosition === "skills" ? "opacity-100" : "opacity-30"
        }`}
        href="#skills"
      >
        <li>Skills</li>
      </Link>
      <Link
        className={`${
          scrollPosition === "projects" ? "opacity-100" : "opacity-30"
        }`}
        href="#projects"
      >
        <li>Projects</li>
      </Link>
    </ul>
  );
};

export default ScrollNavbar;
