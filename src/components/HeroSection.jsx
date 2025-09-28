// src/components/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import SplitText from '../bits/SplitText';

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden text-white"
    >
      {/* Hero content */}
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* Animated heading */}
          <SplitText
            text="Hello, I'm Surya Prakash"
            className="text-4xl md:text-5xl font-bold text-center"
            delay={0.05}
            duration={0.6}
            splitType="chars"
            tag="h1"
            textAlign="center"
          />

          {/* Animated paragraph */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            I build scalable web applications and solve complex problems
            using modern full-stack technologies. Experienced in
            <span className="font-semibold"> React.js</span> and
            <span className="font-semibold"> Spring Boot</span>, I focus on
            delivering efficient, maintainable, and high-quality code.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="pt-4 flex flex-col md:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Existing button */}
            <a
              href="https://github.com/surya12367"
              className="px-6 py-3 rounded-lg bg-purple-500 text-black font-semibold hover:bg-purple-400 transition shadow-lg hover:shadow-purple-500/50"
            >
              Learn More
            </a>

            {/* New button for additional functionality */}
            <button
              onClick={() => alert("Add your functionality here")}
              className="px-6 py-3 rounded-lg bg-transparent border-2 border-purple-500 text-purple-500 font-semibold hover:bg-purple-500 hover:text-black transition shadow-lg hover:shadow-purple-500/50"
            >
              View Resume
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator with animated bounce & opacity */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
        animate={{ y: [0, 10, 0], opacity: [1, 0.6, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <span className="text-sm text-gray-400 mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-purple-400" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
