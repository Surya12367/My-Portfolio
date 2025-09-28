// src/App.jsx
import React from "react";
import Navbar from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
import Particles from "./bits/Particles";
import { AboutSection } from "./components/AboutSection";

function App() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <div className="fixed inset-0 -z-10 bg-black">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          particleHoverFactor={1}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Navbar */}
      <Navbar
        logo="/path-to-logo.png"
        items={[
          { href: "#hero", label: "Home" },
          { href: "#about", label: "About" },
          { href: "#projects", label: "Projects" },
          { href: "#contact", label: "Contact" },
        ]}
      />

      {/* Main Content */}
      <main className="relative z-10 scroll-smooth">
        <section id="hero">
          <HeroSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>
      </main>
    </div>
  );
}

export default App;
