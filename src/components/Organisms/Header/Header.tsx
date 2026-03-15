import { useState } from "react";
import Logo from "../../Atoms/Logo/Logo";
import HamburgerButton from "../../Atoms/HamburgerButton/HamburgerButton";
import MobileMenu from "../../Molecules/MobileMenu/MobileMenu";
import styles from "./Header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Logo full />
        <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </div>
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
};

export default Header;
