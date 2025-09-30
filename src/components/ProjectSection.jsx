// src/components/ProjectsSection.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Food-Delivery App",
    description:
      "A fully responsive food delivery platform with cart functionality, product filters, and modern UI.",
    image: "/food-del.png",
    tags: ["React", "Tailwind", "JavaScript"],
    demoUrl: "https://food-del-wheat-one.vercel.app/",
    githubUrl: "https://github.com/Surya12367/food-delivery-app",
  },
  {
    title: "Weather Application",
    description:
      "A responsive web app that shows real-time weather, including temperature, humidity, and wind speed for any city along with suggestions and map integration.",
    image: "/Weather-application.png",
    tags: ["React", "Tailwind", "JavaScript", "Open Weather API"],
    demoUrl: "https://weather-application-with-map.netlify.app/",
    githubUrl: "https://github.com/Surya12367/Weather-application",
  },
  {
    title: "E-commerce",
    description:
      "A semi functional online shopping platform where users can add items to the cart. Features a responsive UI, product filtering and smooth navigation.",
    image: "/E-commerce.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://e-commerce-six-amber-30.vercel.app/",
    githubUrl: "https://github.com/Surya12367/E-Commerce",
  },
  {
    title: "Image-Finder",
    description:
      "A responsive web app that allows users to search and browse high-quality images using keywords. Integrated with a reliable API with dynamic image grids.",
    image: "/image-finder.png",
    tags: ["React", "Tailwind", "JavaScript", "Unsplash API"],
    demoUrl: "https://68d291ad424e0be4add3f7d1--bejewelled-baklava-89b0cd.netlify.app/",
    githubUrl: "https://github.com/Surya12367/Image-finder",
  },
];

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 lg:px-24 bg-transparent text-white"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          🚀 My Projects
        </motion.h2>

        <div className="flex flex-col gap-10">
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
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="relative flex flex-col md:flex-row p-6 rounded-2xl border border-white/10 
                 bg-white/5 backdrop-blur-lg shadow-lg group overflow-hidden gap-6 
                 transition-all duration-300 hover:border-white/20 hover:shadow-xl"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl 
                      bg-gradient-to-tr from-purple-500/30 via-pink-500/20 to-indigo-500/30
                      opacity-40 blur-3xl -z-10 
                      transition-opacity duration-300 group-hover:opacity-50"></div>

      {/* Project Image */}
      <div className="w-full md:w-1/2 h-64 rounded-xl overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Project Details */}
      <div className="flex flex-col justify-between w-full md:w-1/2">
        <div>
          <h3 className="text-2xl font-semibold mb-3 text-white">
            {project.title}
          </h3>
          
          <p className="text-gray-300 mb-4">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-white/10 border border-gray-700 rounded-full text-gray-200 text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-auto">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2
                       bg-gradient-to-r from-purple-600 to-indigo-600
                       hover:from-purple-700 hover:to-indigo-700
                       rounded-lg transition-all duration-300 text-white shadow-md
                       hover:shadow-lg hover:scale-105"
          >
            <ExternalLink size={18} /> Demo
          </a>
          
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2
                       bg-white/10 border border-white/20 hover:bg-white/20
                       rounded-lg transition-all duration-300 text-white
                       hover:scale-105"
          >
            <Github size={18} /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};