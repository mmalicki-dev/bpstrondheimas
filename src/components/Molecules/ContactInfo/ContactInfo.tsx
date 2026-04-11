import styles from "./ContactInfo.module.css";

interface ContactInfoProps {
  full?: boolean;
}

const ContactInfo = ({ full = false }: ContactInfoProps) => {
  return (
    <div className={styles.contactInfo}>
      {!full && <h2 className={styles.contactFooterHeader}>Contact us</h2>}
      {full && (
        <div className={styles.group}>
          <h3 className={styles.groupTitle}>Address</h3>
          <p className={styles.groupTekst}>Eksempelgata 12</p>
          <p className={styles.groupTekst}>7010 Trondheim, Norway</p>
        </div>
      )}
      <div className={styles.group}>
        <h3 className={styles.groupTitle}>Org. nr</h3>
        <p className={styles.groupTekst}>123 456 789</p>
      </div>
      <div className={styles.group}>
        <h3 className={styles.groupTitle}>Phone</h3>
        <a className={styles.groupTekst} href="tel:+4712345678">
          +47 123 45 678
        </a>
      </div>
      <div className={styles.group}>
        <h3 className={styles.groupTitle}>Email</h3>
        <a className={styles.groupTekst} href="mailto:post@bpstrondheim.no">
          post@bpstrondheim.no
        </a>
      </div>
      {full && (
        <div className={styles.group}>
          <h3 className={styles.groupTitle}>Opening hours</h3>
          <p className={styles.groupTekst}>Monday – Friday: 07:00 – 16:00</p>
        </div>
      )}
    </div>
  );
};

export default ContactInfo;
