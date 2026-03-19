import { useState, useEffect } from "react";
import Logo from "../../Atoms/Logo/Logo";
import HamburgerButton from "../../Atoms/HamburgerButton/HamburgerButton";
import MobileMenu from "../../Molecules/MobileMenu/MobileMenu";
import Nav from "../../Molecules/Nav/Nav";
import styles from "./Header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.visible : ""}`}>
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
