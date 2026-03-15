import SocialMedia from "../../Molecules/SocialMedia/SocialMedia";
import ContactInfo from "../../Molecules/ContactInfo/ContactInfo";
import Nav from "../../Molecules/Nav/Nav";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <SocialMedia />
        <div className={styles.bottom}>
          <ContactInfo />
          <Nav />
        </div>
      </div>
      <p className={styles.copy}>&copy; {new Date().getFullYear()} BPS Trondheim AS</p>
    </footer>
  );
};

export default Footer;
