import SocialMedia from "../../Molecules/SocialMedia/SocialMedia";
import ContactInfo from "../../Molecules/ContactInfo/ContactInfo";
import Nav from "../../Molecules/Nav/Nav";
import ContentLayout from "../../Templates/ContentLayout/ContentLayout";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ContentLayout>
        <div className={styles.top}>
          <SocialMedia />
          <div className={styles.bottom}>
            <ContactInfo />
            <Nav />
          </div>
        </div>
        <p className={styles.copy}>&copy; {new Date().getFullYear()} Trondheim Bygg Service AS</p>
      </ContentLayout>
    </footer>
  );
};

export default Footer;
