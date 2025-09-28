// src/components/AboutSection.jsx
import React from "react";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 md:px-12 lg:px-24 bg-transparent text-white flex items-center justify-center"
    >
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src="src/assets/portfolio-pic.jpg" // <-- replace with your image path
            alt="Profile"
            className="w-90 h-90 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Full-Stack Developer | React & Spring Boot
          </h2>

          <p className="text-lg leading-relaxed">
            Hi! I'm <span className="font-bold">Surya Prakash</span>, a full-stack
            developer focused on building scalable and high-performance web
            applications. I specialize in <span className="font-semibold">React.js</span> for frontend
            development and <span className="font-semibold">Spring Boot</span> for backend services.
          </p>

          <p className="text-lg leading-relaxed">
            Continuously learning new tools, frameworks, and best practices allows me
            to contribute effectively to modern full-stack projects and stay up-to-date
            with the evolving tech landscape.
          </p>

          {/* Quote Box */}
          <div className="border-l-4 border-indigo-500 pl-4 italic text-gray-300">
            <p>
              "I aim to craft elegant, efficient solutions that empower businesses
              and deliver exceptional user experiences."
            </p>
            <span className="block mt-2 font-semibold text-white">
              – Surya Prakash, Full-Stack Developer
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
