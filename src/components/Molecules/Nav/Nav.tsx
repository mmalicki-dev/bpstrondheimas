import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/career", label: "Career" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Nav = () => {
  return (
    <nav className={styles.nav}>
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          end
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Nav;
