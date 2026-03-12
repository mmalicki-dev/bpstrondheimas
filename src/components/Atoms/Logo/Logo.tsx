import { Link } from "react-router-dom";
import symbolDefs from "../../../assets/symbol-defs.svg?url";
import styles from "./Logo.module.css";

interface LogoProps {
  isFull?: boolean;
}

const Logo = ({ isFull = false }: LogoProps) => {
  return (
    <Link to="/" className={styles.logo}>
      <svg className={styles.icon} aria-hidden="true">
        <use href={`${symbolDefs}#icon-bpstrondheimas_logo`} />
      </svg>
      {isFull && (
        <span className={styles.nameWrapper}>
          <span className={styles.nameMain}>Bygg og pro service</span>
          <span className={styles.nameSub}>Trondheim AS</span>
        </span>
      )}
    </Link>
  );
};

export default Logo;
