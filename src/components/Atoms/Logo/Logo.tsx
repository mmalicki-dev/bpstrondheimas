import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import styles from "./Logo.module.css";

interface LogoProps {
  full?: boolean;
}

const Logo = ({ full = false }: LogoProps) => {
  return (
    <Link to="/" className={styles.logo}>
      <Icon name="bpstrondheimas_logo" />
      {full && (
        <div className={styles.text}>
          <span className={styles.upper}>Bygg og pro service</span>
          <span className={styles.lower}>Trondheim AS</span>
        </div>
      )}
    </Link>
  );
};

export default Logo;
