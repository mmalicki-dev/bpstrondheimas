import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import styles from "./Logo.module.css";

interface LogoProps {
  full?: boolean;
  size?: string;
}

const Logo = ({ full = false, size }: LogoProps) => {
  return (
    <Link to="/" className={styles.logo}>
      <Icon name="trondheim_bygg_service_logo" size={size} />
      {full && (
        <div className={styles.text}>
          <span className={styles.upper}>Trondheim Bygg</span>
          <span className={styles.upper}>Service AS</span>
        </div>
      )}
    </Link>
  );
};

export default Logo;
