import MainLayout from "../../components/Templates/MainLayout/MainLayout";
import ContactInfo from "../../components/Molecules/ContactInfo/ContactInfo";
import ContactForm from "../../components/Molecules/ContactForm/ContactForm";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <MainLayout>
      <div className={styles.contact}>
        <ContactInfo full />
        <ContactForm />
      </div>
    </MainLayout>
  );
};

export default Contact;
