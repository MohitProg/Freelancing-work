"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
const MotionImage = motion(Image);

const AnimateImage = ({ children, className, src }) => {
  return (
    <>
      <MotionImage
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
        className={className}
        fill
        src={src}
        alt="Image is Loading "
      >
        {children}
      </MotionImage>
    </>
  );
};

export default AnimateImage;
