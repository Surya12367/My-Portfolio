// src/components/Navbar.jsx
import React, { useRef, useState } from "react";
import { gsap } from "gsap";

const Navbar = ({
  logo,
  items = [],
  baseColor = "#fff",
  pillColor = "#060010",
  hoveredPillTextColor = "#060010",
  pillTextColor,
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pillRefs = useRef([]);
  const topRef = useRef(null);
  const middleRef = useRef(null);
  const bottomRef = useRef(null);

  // Hover animation for pills
  const handleHover = (i) => {
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

  // Hamburger animation
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);

    if (!isMobileMenuOpen) {
      // Animate to cross
      gsap.to(topRef.current, { rotation: 45, y: 0, duration: 0.3, ease: "power3.out" });
      gsap.to(middleRef.current, { opacity: 0, duration: 0.2, ease: "power3.out" });
      gsap.to(bottomRef.current, { rotation: -45, y: 0, duration: 0.3, ease: "power3.out" });
    } else {
      // Animate back to hamburger
      gsap.to(topRef.current, {
        rotation: 0,
        y: 0,
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
        y: 0,
        duration: 0.3,
        ease: "power3.out",
        onComplete: () => gsap.set(bottomRef.current, { clearProps: "all" }),
      });
    }
  };

  return (
    <div className="absolute top-4 left-0 right-0 z-[1000] flex justify-between items-center px-4 md:px-8">
      {/* Logo */}
      <div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer">
        <img src={logo} alt="Logo" className="w-full h-full object-cover" />
      </div>

      {/* Desktop Pills */}
      <ul className="hidden md:flex gap-3 items-center">
        {items.map((item, i) => (
          <li key={item.href} className="relative h-10">
            <a
              href={item.href}
              ref={(el) => (pillRefs.current[i] = el)}
              className="relative px-4 h-full flex items-center justify-center rounded-full font-semibold cursor-pointer transition-all"
              style={{
                background: pillColor,
                color: resolvedPillTextColor,
              }}
              onMouseEnter={() => handleHover(i)}
              onMouseLeave={() => handleLeave(i)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative"
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
              className="block px-4 py-2 rounded text-white font-medium"
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
