// src/App.jsx
import React from "react";
import Navbar from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
import Particles from "./bits/Particles";
import { AboutSection } from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";

function App() {
  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Background Particles */}
      <div className="fixed inset-0 -z-10 bg-black">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={500}
          particleSpread={10}
          particleHoverFactor={1}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Navbar (always visible) */}
      <div className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-lg">
        <Navbar
          logo="/path-to-logo.png"
          items={[
            { href: "#hero", label: "Home" },
            { href: "#about", label: "About" },
            { href: "#skills", label: "Skills" },
            { href: "#projects", label: "Projects" },
            { href: "#contact", label: "Contact" },
          ]}
        />
      </div>

      {/* Main Content */}
      <main className="relative z-10 scroll-smooth">
        <section id="hero">
          <HeroSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="skills">
          <SkillsSection/>
        </section>
      </main>
    </div>
  );
}

export default App;
