// src/components/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
import SplitText from '../bits/SplitText';

export const HeroSection = () => {
  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/surya12367",
      label: "GitHub",
      color: "hover:bg-gray-200 hover:text-black"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/r-surya-prakash-aab7262ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      label: "LinkedIn",
      color: "hover:bg-blue-500 hover:text-white"
    },
    {
      icon: <Mail size={20} />,
      href: "#contact",
      label: "Email",
      color: "hover:bg-red-500 hover:text-white"
    },
    {
      icon: <FileText size={20} />,
      href: "/Portfolio_resume.pdf",
      label: "Resume",
      color: "hover:bg-purple-500 hover:text-white",
      download: true
    }
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden text-white pt-20 md:pt-0"
    >
      {/* Social Links - Desktop Only (Right Side) */}
      <motion.div
        className="fixed right-4 lg:right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? "_blank" : "_self"}
            rel="noopener noreferrer"
            download={link.download ? "Surya_Prakash_Resume.pdf" : undefined}
            className={`w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 
                       flex items-center justify-center text-white transition-all duration-300
                       ${link.color} shadow-lg hover:scale-110 group`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            aria-label={link.label}
          >
            {link.icon}
            
            {/* Tooltip */}
            <span className="absolute right-16 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300
                           whitespace-nowrap pointer-events-none">
              {link.label}
            </span>
          </motion.a>
        ))}
      </motion.div>

      {/* Hero content */}
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {/* Animated heading */}
          <SplitText
            text="Hello, I'm Surya Prakash"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white leading-tight px-2"
            delay={0.05}
            duration={0.6}
            splitType="chars"
            tag="h1"
            textAlign="center"
          />

          {/* Animated paragraph */}
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            I build scalable web applications and solve complex problems
            using modern full-stack technologies. Experienced in
            <span className="font-semibold text-purple-400"> React.js</span> and
            <span className="font-semibold text-purple-400"> Spring Boot</span>, I focus on
            delivering efficient, maintainable, and high-quality code.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <a
              href="#projects"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold hover:from-purple-600 hover:to-indigo-600 transition shadow-lg hover:shadow-purple-500/50 text-center active:scale-95"
            >
              Learn More
            </a>

            <a
              href="/Portfolio_resume.pdf"
              download="Surya_Prakash_Resume.pdf"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-transparent border-2 border-purple-500 text-purple-500 font-semibold hover:bg-purple-500 hover:text-white transition shadow-lg hover:shadow-purple-500/50 text-center active:scale-95"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Mobile Social Links - Only visible on mobile/tablet */}
          <motion.div
            className="flex lg:hidden justify-center items-center gap-3 sm:gap-4 pt-6 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? "_blank" : "_self"}
                rel="noopener noreferrer"
                download={link.download ? "Surya_Prakash_Resume.pdf" : undefined}
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 
                           flex items-center justify-center text-white transition-all duration-300
                           ${link.color} shadow-lg active:scale-90`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + index * 0.1, duration: 0.4 }}
                aria-label={link.label}
              >
                {React.cloneElement(link.icon, { size: 18 })}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator with soft glow */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
        animate={{ y: [0, 10, 0], opacity: [1, 0.6, 1], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <span className="text-xs sm:text-sm text-gray-400 mb-2">Scroll</span>
        <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400 drop-shadow-lg" />
      </motion.div>
    </section>
  );
};

export default HeroSection;