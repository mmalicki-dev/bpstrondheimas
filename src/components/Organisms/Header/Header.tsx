import { useState } from "react";
import Navigation from "../../Molecules/Navigation/Navigation";
import Logo from "../../Atoms/Logo/Logo";
import LanguageSwitcher from "../../Molecules/LanguageSwitcher/LanguageSwitcher";
import HamburgerButton from "../../Atoms/HamburgerButton/HamburgerButton";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Logo isFull />
      <Navigation isOpen={isMenuOpen} />
      <LanguageSwitcher />
      <div className={styles.hamburger}>
        <HamburgerButton
          isOpen={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
      </div>
    </header>
  );
};

export default Header;
