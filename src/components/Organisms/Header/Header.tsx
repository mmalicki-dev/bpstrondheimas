import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../Atoms/Logo/Logo";
import HamburgerButton from "../../Atoms/HamburgerButton/HamburgerButton";
import MobileMenu from "../../Molecules/MobileMenu/MobileMenu";
import Nav from "../../Molecules/Nav/Nav";
import styles from "./Header.module.css";
import ContentLayout from "../../Templates/ContentLayout/ContentLayout";
import { useAuth } from "../../../context/auth/useAuth";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const { isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header
      className={`${styles.header} ${!isHome || scrolled ? styles.visible : ""}`}
    >
      <ContentLayout>
        <div className={styles.bar}>
          <Logo full />
          {isAdmin && (
            <div className={styles.adminBar}>
              <span className={styles.adminLabel}>Admin mode</span>
              <button className={styles.logoutBtn} onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
          <div className={styles.hamburger}>
            <HamburgerButton
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
          <div className={styles.desktopNav}>
            <Nav inline />
          </div>
        </div>
      </ContentLayout>
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
};

export default Header;
