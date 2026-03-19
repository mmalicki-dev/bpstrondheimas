import styles from "./ContactInfo.module.css";

interface ContactInfoProps {
  full?: boolean;
}

const ContactInfo = ({ full = false }: ContactInfoProps) => {
  return (
    <div className={styles.contactInfo}>
      {!full && <h2>Contact us</h2>}
      {full && (
        <div className={styles.group}>
          <h3>Address</h3>
          <p>Eksempelgata 12</p>
          <p>7010 Trondheim, Norway</p>
        </div>
      )}
      <div className={styles.group}>
        <h3>Phone</h3>
        <a href="tel:+4712345678">+47 123 45 678</a>
      </div>
      <div className={styles.group}>
        <h3>Email</h3>
        <a href="mailto:post@bpstrondheim.no">post@bpstrondheim.no</a>
      </div>
      {full && (
        <div className={styles.group}>
          <h3>Opening hours</h3>
          <p>Monday – Friday: 07:00 – 16:00</p>
          <p>Saturday – Sunday: Closed</p>
        </div>
      )}
    </div>
  );
};

export default ContactInfo;
