// src/components/SplitText.jsx
import React from "react";
import { motion } from "framer-motion";

const SplitText = ({
  text,
  tag: Tag = "span",
  className = "",
  delay = 0.03,
  duration = 0.5,
  onAnimationComplete,
}) => {
  // Split into characters but preserve spaces
  const chars = text.split("").map((char, index) => ({
    char: char === " " ? "\u00A0" : char,
    key: index,
  }));

  return (
    <Tag className={className}>
      {chars.map(({ char, key }) => (
        <motion.span
          key={key}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: key * delay, duration }}
          onAnimationComplete={key === chars.length - 1 ? onAnimationComplete : undefined}
        >
          {char}
        </motion.span>
      ))}
    </Tag>
  );
};

export default SplitText;
