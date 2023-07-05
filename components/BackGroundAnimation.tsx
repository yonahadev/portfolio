"use client";
import { delay, motion } from "framer-motion";
import { useEffect, useState } from "react";

const BackGroundAnimation = () => {
  const [variants, setVariants] = useState<any | null>([]);
  const [textChoices, setTextChoices] = useState<string[]>([]);

  const generateText = () => {
    const viewportWidth = window.innerWidth;
    let variants = [];
    for (let i = 1; i <= 12; i++) {
      const animationVariant = {
        initial: {
          x: viewportWidth,
        },
        animate: {
          x: -viewportWidth,
          transition: {
            repeat: Infinity,
            duration: Math.floor(Math.random() * 13) + 4,
            delay: Math.floor(Math.random() * 6),
          },
        },
      };
      variants.push(animationVariant);
    }
    setVariants(variants);
  };

  useEffect(() => {
    generateText();
    const textChoices = [
      "Coffee: fueling developers since 10,000 BC",
      "I code therefore I am... confused",
      "Object reference is not set to instance of an object",
      "",
      "'Gapped by his own CSS'",
      "Debugging: removing the needles from the haystack",
      "I speak four languages: English, JavaScript, sarcasm, and binary",
      "I'm not a great coder, but I'm an excellent googler",
      "Code never lies, comments sometimes do",
      "#41: most painful night of my life",
      "I put the 'fun' in 'function'... sometimes",
      "Code like a butterfly, test like a bee",
    ];
    setTextChoices(textChoices);
  }, []);

  return (
    <div
      id="moving-text-parent"
      className="w-screen h-[calc(100%-4rem)] top-16 left-0 absolute z-0 opacity-10 flex flex-col justify-center items-center space-y-6 overflow-hidden "
    >
      {textChoices.length !== 0
        ? Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              variants={variants[i]}
              initial="initial"
              animate="animate"
              className={`font-semibold text-${
                Math.floor(Math.random() * 7) + 3
              }xl  whitespace-nowrap`}
            >
              {textChoices[i]}
            </motion.div>
          ))
        : null}
    </div>
  );
};

export default BackGroundAnimation;
