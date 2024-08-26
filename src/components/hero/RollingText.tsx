"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type RollingTextType = {
  id: number;
  text: string;
  color: string;
  images: { src: string; alt: string }[];
};

const RollingText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const rollingText: RollingTextType[] = [
    {
      id: 1,
      text: "blueberry pancakes",
      color: "#005477",
      images: [
        { src: "/blueberries.jpg", alt: "A table full of blueberries" },
        {
          src: "/blueberry_pancakes.jpg",
          alt: "A plate with a stack of pancakes topped with blueberries",
        },
        {
          src: "/pancakes_syrup.jpg",
          alt: "Man pouring maple syrup on a stack of pancakes",
        },
      ],
    },
    {
      id: 2,
      text: "fresh green salads",
      color: "#4A5D23",
      images: [
        { src: "/woman_eating_sallad.jpg", alt: "A woman eating a salad" },
        { src: "/sallad_wooden_plate.jpg", alt: "Salad on a wooden plate" },
        { src: "/sallad_plate.jpg", alt: "A plate of salad" },
      ],
    },
    {
      id: 3,
      text: "a midnight snack",
      color: "#FCD12A",
      images: [
        { src: "/pizza.jpg", alt: "A pizza on a table" },
        { src: "/fries_in_lap.jpg", alt: "Fries in someone's lap" },
        { src: "/healthy_snack.jpg", alt: "A healthy snack" },
      ],
    },
    {
      id: 4,
      text: "chocolate desserts",
      color: "#8b0000",
      images: [
        { src: "/chocolate_cake.jpg", alt: "A chocolate cake" },
        { src: "/chocolate_platter.jpg", alt: "A platter of chocolates" },
        { src: "/sugar_free_chocolate.jpg", alt: "Sugar-free chocolate" },
      ],
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % rollingText.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, [rollingText.length]);

  const currentText = rollingText[currentIndex];

  const variants = {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 1, y: "0%" },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 1,
        staggerDirection: -1,
        staggerChildren: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative h-full w-full">
      {/**Text animation */}
      <AnimatePresence initial={false} mode="wait">
        <motion.h3
          key={currentText.id}
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{ color: currentText.color }}
          className="absolute w-full grid place-content-center"
        >
          {currentText.text}
        </motion.h3>
      </AnimatePresence>

      {/**Image animation */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentText.id}
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{
            duration: 2,
            ease: "easeInOut",
            staggerChildren: 0.3,
          }}
          className="absolute grid grid-flow-col gap-20 px-20 -z-50 bottom-[20%] sm:bottom-[50%] max-h-[20vh]"
        >
          {currentText.images.map((item, index) => (
            <motion.img
              key={`${currentIndex}-${index}`}
              src={item.src}
              alt={item.alt}
              className="max-w-full h-full object-cover"
              variants={variants}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RollingText;
