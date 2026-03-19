import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../../Atoms/Logo/Logo";
import HamburgerButton from "../../Atoms/HamburgerButton/HamburgerButton";
import MobileMenu from "../../Molecules/MobileMenu/MobileMenu";
import Nav from "../../Molecules/Nav/Nav";
import styles from "./Header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <header className={`${styles.header} ${!isHome || scrolled ? styles.visible : ""}`}>
      <div className={styles.bar}>
        <Logo full />
        <div className={styles.hamburger}>
          <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </div>
        <div className={styles.desktopNav}>
          <Nav inline />
        </div>
      </div>
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
};

export default Header;
