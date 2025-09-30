// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";

const Navbar = ({
  items = [],
  baseColor = "#fff",
  pillColor = "#060010",
  pillTextColor,
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Track active section
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let visibleSection = activeSection;

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            visibleSection = entry.target.id;
          }
        });

        if (visibleSection !== activeSection) {
          setActiveSection(visibleSection);
        }
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i / 100) }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [activeSection]);

  return (
    <div className="absolute top-4 left-0 right-0 z-[1000] flex justify-center items-center px-4 md:px-8">
      {/* Desktop Pills */}
      <ul className="hidden md:flex gap-3 items-center">
        {items.map((item, i) => {
          const isActive = activeSection === item.href.slice(1);
          const isHovered = hoveredIndex === i && !isActive;

          return (
            <li key={item.href} className="relative h-10">
              <a
                href={item.href}
                className="relative px-4 h-full flex items-center justify-center rounded-full font-semibold cursor-pointer border-2 transition-all duration-200 ease-out"
                style={{
                  borderColor: baseColor,
                  backgroundColor: isActive || isHovered ? baseColor : pillColor,
                  color: isActive || isHovered ? pillColor : resolvedPillTextColor,
                  transform: isActive || isHovered ? 'translateY(-3px) scale(1.05)' : 'translateY(0) scale(1)',
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden absolute right-4 flex flex-col justify-center items-center w-8 h-8"
        aria-label="Toggle menu"
      >
        <span
          className="absolute top-1/2 left-0 w-full h-0.5 bg-white rounded transition-all duration-300 ease-out"
          style={{
            transform: isMobileMenuOpen 
              ? 'translateY(0) rotate(45deg)' 
              : 'translateY(-10px) rotate(0deg)',
          }}
        />
        <span
          className="absolute top-1/2 left-0 w-full h-0.5 bg-white rounded -translate-y-1/2 transition-opacity duration-200 ease-out"
          style={{
            opacity: isMobileMenuOpen ? 0 : 1,
          }}
        />
        <span
          className="absolute top-1/2 left-0 w-full h-0.5 bg-white rounded transition-all duration-300 ease-out"
          style={{
            transform: isMobileMenuOpen 
              ? 'translateY(0) rotate(-45deg)' 
              : 'translateY(10px) rotate(0deg)',
          }}
        />
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-14 left-4 right-4 bg-black rounded-xl flex flex-col gap-2 p-3 shadow-lg animate-fade-in">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`block px-4 py-2 rounded font-medium border-2 transition-all duration-200 ${
                activeSection === item.href.slice(1)
                  ? "bg-white text-black border-black"
                  : "text-white border-white hover:bg-white hover:text-black"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Navbar;