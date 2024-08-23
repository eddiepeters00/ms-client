"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

const RollingText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const meanings = [
    "delicious chocolate recipes",
    "fresh green salads",
    "quick midnight snacks",
    "fancy dinner recipes",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % meanings.length);
    }, 13000);

    return () => clearInterval(intervalId);
  }, [meanings.length]);

  return (
    <div className="relative">
      <AnimatePresence initial={false} mode="wait">
        <motion.h3
          key={meanings[currentIndex]}
          initial={{ y: "150%", opacity: 0 }}
          animate={{
            y: "0%",
            opacity: 1,
            transition: { duration: 3 },
          }}
          exit={{
            y: "-50%",
            opacity: 0,
            transition: { delay: 8, duration: 2 },
          }}
          className="absolute text-nowrap w-full grid place-content-center"
        >
          {meanings[currentIndex]}
        </motion.h3>
      </AnimatePresence>
    </div>
  );
};

export default RollingText;
