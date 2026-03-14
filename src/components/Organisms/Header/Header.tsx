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
      <Logo />
      <Navigation isOpen={isMenuOpen} />
      <div className={styles.actions}>
        <LanguageSwitcher />
        <div className={styles.hamburger}>
          <HamburgerButton
            isOpen={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
