import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

interface NavProps {
  inline?: boolean;
}

const Nav = ({ inline = false }: NavProps) => {
  return (
    <nav className={`${styles.nav} ${inline ? styles.inline : ""}`}>
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
