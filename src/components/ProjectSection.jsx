// src/components/ProjectsSection.jsx
import React, { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A fully responsive ecommerce platform with cart functionality, product filters, and modern UI.",
    image: "/Projects/ecommerce.png",
    tags: ["React", "Tailwind", "JavaScript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A futuristic portfolio with GSAP animations, smooth scroll, and interactive 3D hero section.",
    image: "/Projects/portfolio.png",
    tags: ["React", "GSAP", "Three.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Sound Classifier",
    description:
      "Deep learning project built with Keras & Flask that classifies environmental sounds.",
    image: "/Projects/sound.png",
    tags: ["Flask", "Keras", "Python"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 lg:px-24 bg-transparent text-white"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-16 text-center">🚀 My Projects</h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 80,
          damping: 20,
          delay: index * 0.15, // staggered animation
        },
      });
    }
  }, [isInView, controls, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={controls}
      className="grid md:grid-cols-2 gap-8 items-center bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-lg"
      style={{ zIndex: 10 - index }}
    >
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="rounded-xl shadow-md w-full h-auto object-cover"
      />

      {/* Project Details */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition"
          >
            <ExternalLink size={18} /> Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-gray-500 hover:border-purple-500 rounded-lg transition"
          >
            <Github size={18} /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};
