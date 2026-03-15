import styles from "./ContactInfo.module.css";

const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>
      <h3>Contact us</h3>
      <a href="tel:+4712345678">+47 123 45 678</a>
      <a href="mailto:post@bpstrondheim.no">post@bpstrondheim.no</a>
    </div>
  );
};

export default ContactInfo;
