"use client";

import { useState } from "react";
import Link from "next/link";

type MobileNavProps = {
  links?: { href: string; label: string; isLink?: boolean }[];
};

export default function MobileNav({ links }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const defaultLinks: { href: string; label: string; isLink?: boolean }[] = [
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#references", label: "References" },
    { href: "#contact", label: "Contact" },
  ];

  const menuLinks = links || defaultLinks;

  return (
    <>
      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span className={isOpen ? "open" : ""}></span>
        <span className={isOpen ? "open" : ""}></span>
        <span className={isOpen ? "open" : ""}></span>
      </button>

      <nav className={`navlinks mobile ${isOpen ? "open" : ""}`}>
        {menuLinks.map((item) => {
          const Component = item.isLink ? Link : "a";
          return (
            <Component
              key={item.href}
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </Component>
          );
        })}
      </nav>

      {isOpen && (
        <div className="mobile-overlay" onClick={closeMenu}></div>
      )}
    </>
  );
}
