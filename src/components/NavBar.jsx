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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Fixed Navbar Container */}
      <div className="fixed top-0 left-0 right-0 z-[1000] px-4 py-3 md:py-4">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Pills */}
          <ul className="hidden md:flex gap-3 items-center justify-center bg-black/30 backdrop-blur-md rounded-full px-2 py-2 border border-white/10">
            {items.map((item, i) => {
              const isActive = activeSection === item.href.slice(1);
              const isHovered = hoveredIndex === i && !isActive;

              return (
                <li key={item.href} className="relative h-10">
                  <a
                    href={item.href}
                    className="relative px-4 lg:px-6 h-full flex items-center justify-center rounded-full font-semibold cursor-pointer border-2 transition-all duration-200 ease-out text-sm lg:text-base"
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

          {/* Mobile Header */}
          <div className="md:hidden mobile-menu-container flex items-center justify-between bg-black/40 backdrop-blur-md rounded-full px-6 py-3 border border-white/10">
            <span className="text-white font-bold text-lg">SP</span>
            
            {/* Mobile Hamburger */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              className="flex flex-col justify-center items-center w-8 h-8 relative z-[1001]"
              aria-label="Toggle menu"
            >
              <span
                className="absolute top-1/2 left-0 w-full h-0.5 bg-white rounded transition-all duration-300 ease-out"
                style={{
                  transform: isMobileMenuOpen 
                    ? 'translateY(0) rotate(45deg)' 
                    : 'translateY(-8px) rotate(0deg)',
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
                    : 'translateY(8px) rotate(0deg)',
                }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] animate-fade-in"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-20 left-4 right-4 z-[1000] mobile-menu-container transition-all duration-300 ease-out ${
          isMobileMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-black/95 backdrop-blur-lg rounded-2xl flex flex-col gap-2 p-4 shadow-2xl border border-white/20 max-h-[70vh] overflow-y-auto">
          {items.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={`block px-5 py-3.5 rounded-xl font-medium border-2 transition-all duration-200 text-center ${
                activeSection === item.href.slice(1)
                  ? "bg-white text-black border-white shadow-lg scale-[1.02]"
                  : "text-white border-white/30 hover:bg-white/10 hover:border-white/50 active:scale-95"
              }`}
              style={{
                animationDelay: `${index * 50}ms`
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;