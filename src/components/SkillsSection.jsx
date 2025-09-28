// src/components/SkillsSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { Code, Server, Wrench } from "lucide-react";

// Define skills grouped by category
const skills = {
  frontend: {
    title: "Frontend Development",
    icon: <Code className="w-6 h-6 text-blue-400" />,
    items: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "XML", "Bootstrap"],
  },
  backend: {
    title: "Backend Development",
    icon: <Server className="w-6 h-6 text-green-400" />,
    items: ["Node.js","Spring Boot", "PostgreSQL", "MongoDB", "REST APIs", "MySQL", "PL-SQL"],
  },
  tools: {
    title: "Tools & Technologies",
    icon: <Wrench className="w-6 h-6 text-pink-400" />,
    items: ["VS Code", "Git","GitHub", "Webpack", "Redux", "Firebase", "Vercel", "Vite", "netlify", "render", "nodemailer"],
  },
};

// Card Component
const SkillCard = ({ title, icon, items }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 200 }}
    className="bg-white/5 border border-gray-700 rounded-2xl shadow-md p-6 flex flex-col backdrop-blur-sm"
  >
    <div className="flex items-center gap-2 mb-4">
      <div className="p-2 rounded-lg bg-white/10">{icon}</div>
      <h2 className="text-lg font-semibold text-white">{title}</h2>
    </div>
    <div className="flex flex-wrap gap-2">
      {items.map((item, i) => (
        <motion.span
          key={i}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
          className="px-3 py-1 text-sm bg-white/10 border border-gray-700 rounded-full text-gray-200 cursor-pointer"
        >
          {item}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-12 lg:px-24 bg-transparent text-white"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Skills
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <SkillCard {...skills.frontend} />
          <SkillCard {...skills.backend} />
          <SkillCard {...skills.tools} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
