// src/components/Navbar.jsx
import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

const Navbar = ({
  items = [],
  baseColor = "#fff",
  pillColor = "#060010",
  pillTextColor,
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pillRefs = useRef([]);
  const topRef = useRef(null);
  const middleRef = useRef(null);
  const bottomRef = useRef(null);

  // Hover animation for pills
  const handleHover = (i) => {
    if (items[i].href.slice(1) === activeSection) return;
    const pill = pillRefs.current[i];
    if (!pill) return;
    gsap.to(pill, {
      y: -3,
      scale: 1.05,
      backgroundColor: baseColor,
      color: pillColor,
      duration: 0.15,
      ease: "power3.out",
    });
  };

  const handleLeave = (i) => {
    if (items[i].href.slice(1) === activeSection) return;
    const pill = pillRefs.current[i];
    if (!pill) return;
    gsap.to(pill, {
      y: 0,
      scale: 1,
      backgroundColor: pillColor,
      color: resolvedPillTextColor,
      duration: 0.15,
      ease: "power3.out",
    });
  };

  // Hamburger animation (keep original X style)
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);

    if (!isMobileMenuOpen) {
      // Open → rotate only
      gsap.to(topRef.current, { rotation: 45, duration: 0.3, ease: "power3.out" });
      gsap.to(middleRef.current, { opacity: 0, duration: 0.2, ease: "power3.out" });
      gsap.to(bottomRef.current, { rotation: -45, duration: 0.3, ease: "power3.out" });
    } else {
      // Close → reset
      gsap.to(topRef.current, {
        rotation: 0,
        duration: 0.3,
        ease: "power3.out",
        onComplete: () => gsap.set(topRef.current, { clearProps: "all" }),
      });
      gsap.to(middleRef.current, {
        opacity: 1,
        duration: 0.2,
        ease: "power3.out",
        onComplete: () => gsap.set(middleRef.current, { clearProps: "all" }),
      });
      gsap.to(bottomRef.current, {
        rotation: 0,
        duration: 0.3,
        ease: "power3.out",
        onComplete: () => gsap.set(bottomRef.current, { clearProps: "all" }),
      });
    }
  };

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
          return (
            <li key={item.href} className="relative h-10">
              <a
                href={item.href}
                ref={(el) => (pillRefs.current[i] = el)}
                className="relative px-4 h-full flex items-center justify-center rounded-full font-semibold cursor-pointer transition-all border-2"
                style={{
                  background: isActive ? baseColor : pillColor,
                  color: isActive ? pillColor : resolvedPillTextColor,
                  transform: isActive ? "translateY(-3px) scale(1.05)" : "none",
                  borderColor: baseColor,
                }}
                onMouseEnter={() => handleHover(i)}
                onMouseLeave={() => handleLeave(i)}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>

      {/* Mobile Hamburger */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden absolute right-4 flex flex-col justify-center items-center w-8 h-8"
      >
        <span
          ref={topRef}
          className="absolute top-1/2 left-0 w-full h-0.5 bg-white rounded -translate-y-2.5"
        />
        <span
          ref={middleRef}
          className="absolute top-1/2 left-0 w-full h-0.5 bg-white rounded -translate-y-1/2"
        />
        <span
          ref={bottomRef}
          className="absolute top-1/2 left-0 w-full h-0.5 bg-white rounded translate-y-2.5"
        />
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-14 left-4 right-4 bg-black rounded-xl flex flex-col gap-2 p-3 shadow-lg">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`block px-4 py-2 rounded font-medium border-2 transition ${
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
    </div>
  );
};

export default Navbar;
