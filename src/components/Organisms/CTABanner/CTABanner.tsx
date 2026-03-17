import { Link } from "react-router-dom";
import styles from "./CTABanner.module.css";

const CTABanner = () => {
  return (
    <section className={styles.banner}>
      <h2 className={styles.heading}>Ready to secure your workforce?</h2>
      <p className={styles.sub}>Let's talk. We'll find the right people for your project — fast.</p>
      <Link to="/contact" className={styles.cta}>Get in touch</Link>
    </section>
  );
};

export default CTABanner;
