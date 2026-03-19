import { useState } from "react";
import Logo from "../../Atoms/Logo/Logo";
import HamburgerButton from "../../Atoms/HamburgerButton/HamburgerButton";
import MobileMenu from "../../Molecules/MobileMenu/MobileMenu";
import Nav from "../../Molecules/Nav/Nav";
import styles from "./Header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
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
