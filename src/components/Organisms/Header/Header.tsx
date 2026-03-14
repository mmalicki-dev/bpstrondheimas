import { useState } from "react";
import Logo from "../../Atoms/Logo/Logo";
import HamburgerButton from "../../Atoms/HamburgerButton/HamburgerButton";
import Nav from "../../Molecules/Nav/Nav";
import styles from "./Header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Logo full />
        <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </div>
      <div className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ""}`}>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
