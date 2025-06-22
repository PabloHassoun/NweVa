// Navbar.tsx
"use client";

import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import Colors from "../../../design/colors/colors";
import Typography from "../../../design/typography/typography";

gsap.registerPlugin(useGSAP);

// --- Hook custom pour gérer les media queries ---
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);
  return matches;
};

// --- Composant interne pour les liens de navigation ---
interface NavLinksProps {
  options: string[];
  onLinkClick?: () => void;
  className?: string;
}

const NavLinks = ({ options, onLinkClick, className }: NavLinksProps) => (
  <>
    {options.map((option) => (
      <li
        key={option}
        className={clsx(
          "cursor-pointer text-text-secondary hover:scale-105 hover:text-text-accent transition-all duration-300",
          className
        )}
        onClick={onLinkClick}
      >
        <a href={`#${option}`}>
          <Typography variant="nav">{option}</Typography>
        </a>
      </li>
    ))}
  </>
);

// --- Composant principal Navbar ---
interface NavbarProps {
  options: string[];
  className?: string;
}

export default function Navbar({ options, className }: NavbarProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const navbarDesktopRef = useRef<HTMLUListElement>(null); // Renommé pour plus de clarté
  const menuMobileRef = useRef<HTMLUListElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const hamburgerTimeline = useRef<gsap.core.Timeline>(undefined);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInViewport, setIsInViewport] = useState(true);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const { contextSafe } = useGSAP({ scope: containerRef });

  // 1. Intersection Observer pour détecter la visibilité de la navbar desktop
  useEffect(() => {
    const navbar = navbarDesktopRef.current;
    if (!navbar || isMobile) return; // L'observer ne s'active que sur desktop

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
        // Ferme le menu si la navbar redevient visible
        if (entry.isIntersecting) {
          setIsMenuOpen(false);
        }
      },
      { root: null, threshold: 0.1 }
    );
    observer.observe(navbar);
    return () => observer.unobserve(navbar);
  }, [isMobile]); // On relance si on passe de mobile à desktop

  // 2. Logique de visibilité unifiée (responsive + scroll)
  useGSAP(
    () => {
      // Sur mobile, la navbar desktop est toujours cachée.
      // Sur desktop, elle apparaît/disparaît en fonction du scroll.
      gsap.to(navbarDesktopRef.current, {
        opacity: !isMobile && isInViewport ? 1 : 0,
        pointerEvents: !isMobile && isInViewport ? "auto" : "none",
        duration: 0.5,
        ease: "power1.inOut",
      });

      // Le hamburger apparaît sur mobile OU sur desktop quand on a scrollé.
      gsap.to(hamburgerRef.current, {
        opacity: isMobile || !isInViewport ? 1 : 0,
        pointerEvents: isMobile || !isInViewport ? "auto" : "none",
        duration: 0.3,
        ease: "power1.inOut",
      });
    },
    { dependencies: [isInViewport, isMobile] }
  );

  // 3. Animation du menu mobile et du hamburger (adaptée pour le responsive)
  useGSAP(
    () => {
      gsap.to(menuMobileRef.current, {
        opacity: isMenuOpen ? 1 : 0,
        pointerEvents: isMenuOpen ? "auto" : "none",
        x: isMobile ? 0 : isMenuOpen ? 0 : 50,
        y: isMobile ? (isMenuOpen ? 0 : -50) : 0,
        duration: 0.5,
        ease: "power2.out",
      });

      hamburgerTimeline.current?.[isMenuOpen ? "play" : "reverse"]();
    },
    { dependencies: [isMenuOpen, isMobile] }
  );

  // Création de la timeline de l'icône hamburger (inchangée)
  useGSAP(
    () => {
      const line1 = ".hamburger-line-1",
        line2 = ".hamburger-line-2",
        line3 = ".hamburger-line-3";
      gsap.set([line1, line2, line3], { transformOrigin: "center" });
      hamburgerTimeline.current = gsap
        .timeline({ paused: true, reversed: true })
        .to(line1, { y: 8, rotation: 45, duration: 0.3, ease: "power2.out" }, 0)
        .to(line2, { scaleX: 0, duration: 0.2, ease: "power2.out" }, 0)
        .to(
          line3,
          { y: -8, rotation: -45, duration: 0.3, ease: "power2.out" },
          0
        );
    },
    { scope: hamburgerRef }
  );

  // Effet pour fermer le menu si on passe en mode desktop
  useEffect(() => {
    if (!isMobile) setIsMenuOpen(false);
  }, [isMobile]);

  const handleLinkClick = contextSafe(() => setIsMenuOpen(false));
  const toggleMenu = contextSafe(() => setIsMenuOpen((prev) => !prev));

  return (
    <div ref={containerRef}>
      {/* Navbar principale (Desktop) - La visibilité est maintenant gérée par GSAP */}
      <ul
        ref={navbarDesktopRef}
        className={clsx(
          "flex gap-[40px] pr-[40px] pl-[40px] pt-[10px] pb-[10px] rounded-[10px]",
          Colors({ themeBackground: "secondary" }),
          className
        )}
      >
        <NavLinks options={options} />
      </ul>

      {/* Bouton hamburger - La visibilité est maintenant gérée par GSAP */}
      <button
        ref={hamburgerRef}
        onClick={toggleMenu}
        className={clsx(
          "fixed top-5 right-10 z-50 p-4 rounded-[10px] cursor-pointer",
          "opacity-0 pointer-events-none", // État initial géré par GSAP
          "hover:scale-105 hover:bg-text-accent transition-transform duration-300",
          Colors({ themeBackground: "secondary" })
        )}
        aria-label="Ouvrir le menu"
      >
        <div className="flex flex-col justify-around w-6 h-6">
          <span className="h-0.5 w-full bg-text-secondary rounded-full hamburger-line-1"></span>
          <span className="h-0.5 w-full bg-text-secondary rounded-full hamburger-line-2"></span>
          <span className="h-0.5 w-full bg-text-secondary rounded-full hamburger-line-3"></span>
        </div>
      </button>

      {/* Menu mobile animé */}
      <ul
        ref={menuMobileRef}
        style={{ transform: isMobile ? "translateY(-50px)" : "translateX(50px)" }}
        className={clsx(
          "flex gap-[20px] p-[20px] rounded-[10px] fixed z-40 shadow-lg",
          isMobile
            ? "flex-row top-0 left-1/2 -translate-x-1/2"
            : "flex-col top-5 right-10",
          "opacity-0 pointer-events-none",
          Colors({ themeBackground: "secondary" }),
          className
        )}
      >
        <NavLinks options={options} onLinkClick={handleLinkClick} />
      </ul>
    </div>
  );
}
