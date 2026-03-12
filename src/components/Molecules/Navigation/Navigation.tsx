import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

interface NavigationProps {
  isOpen?: boolean;
}

const Navigation = ({ isOpen = false }: NavigationProps) => {
  return (
    <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/career">Career</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
