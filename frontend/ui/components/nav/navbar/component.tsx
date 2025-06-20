// Navbar.tsx
"use client";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import Colors from "../../../design/colors/colors";
import Typography from "../../../design/typography/typography";

gsap.registerPlugin(useGSAP);

interface NavbarProps {
  options: string[];
  className?: string;
}

export default function Navbar({ options, className }: NavbarProps) {
  const navbarRef = useRef<HTMLUListElement>(null);
  const menuMobileRef = useRef<HTMLUListElement>(null);
  const [isInViewport, setIsInViewport] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Intersection Observer pour la navbar principale
  useEffect(() => {
    const navbar = navbarRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
        if (entry.isIntersecting) {
          setIsMenuOpen(false);
        }
      },
      { root: null, threshold: 0.1 }
    );

    if (navbar) observer.observe(navbar);

    return () => {
      if (navbar) observer.unobserve(navbar);
    };
  }, []);

  // Animation GSAP sur le menu mobile
  useGSAP(
    () => {
      const menu = menuMobileRef.current;
      if (!menu) return;

      if (isMenuOpen) {
        gsap.fromTo(
          menu,
          { opacity: 0, x: 100 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power2.out",
            pointerEvents: "auto",
          }
        );
      } else {
        gsap.to(menu, {
          opacity: 0,
          x: 100,
          duration: 0.4,
          ease: "power2.in",
          pointerEvents: "none",
        });
      }
    },
    { dependencies: [isMenuOpen], scope: menuMobileRef }
  );

  return (
    <>
      {/* Navbar principale */}
      <ul
        ref={navbarRef}
        className={clsx(
          "transition-all duration-300 ease-in-out",
          "flex gap-[40px] pr-[40px] pl-[40px] pt-[10px] pb-[10px] rounded-[10px]",
          Colors({ themeBackground: "secondary" }),
          className
        )}
      >
        {options.map((option) => (
          <li
            key={option}
            className="cursor-pointer text-text-secondary hover:scale-105 hover:text-text-accent transition-all transition-0.5"
          >
            <a href={`#${option}`}>
              <Typography variant="nav">{option}</Typography>
            </a>
          </li>
        ))}
      </ul>

      {/* Bouton hamburger */}
      {!isInViewport && (
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className={clsx(
            "fixed top-4 right-4 z-50 pr-[20px] pl-[20px] pt-[10px] pb-[10px] rounded-[10px] cursor-pointer hover:scale-105 transition-all transition-0.5",
            Colors({ themeBackground: "secondary" })
          )}
        >
          ☰
        </button>
      )}

      {/* Menu mobile animé */}
      <ul
        ref={menuMobileRef}
        style={{
          opacity: 0,
          pointerEvents: "none",
          transform: "translateX(100px)",
          display: isMenuOpen ? "flex" : "flex", // Toujours monté pour l'animation
        }}
        className={clsx(
          "transition-none", // Désactive la transition CSS pour laisser GSAP gérer
          "flex flex-col gap-[20px] pr-[20px] pl-[20px] pt-[15px] pb-[15px] rounded-[10px] fixed top-1 right-4 z-40 shadow-lg",
          Colors({ themeBackground: "secondary" }),
          className
        )}
      >
        {options.map((option) => (
          <li
            key={option}
            className="cursor-pointer text-text-secondary hover:scale-105 hover:text-text-accent transition-all transition-0.5"
            onClick={() => setIsMenuOpen(false)}
          >
            <a href={`#${option}`}>
              <Typography variant="nav">{option}</Typography>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
