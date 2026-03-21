import MainLayout from "../../components/Templates/MainLayout/MainLayout";
import ContentLayout from "../../components/Templates/ContentLayout/ContentLayout";
import ContactInfo from "../../components/Molecules/ContactInfo/ContactInfo";
import ContactForm from "../../components/Molecules/ContactForm/ContactForm";
import OurTeam from "../../components/Molecules/OurTeam/OurTeam";
import PageHeader from "../../components/Molecules/PageHeader/PageHeader";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <MainLayout>
      <PageHeader title="Contact us" />
      <div className={styles.contact}>
        <ContentLayout>
          <div className={styles.contactArea}>
            <ContactInfo full />
            <OurTeam compact />
          </div>
          <ContactForm />
        </ContentLayout>
      </div>
    </MainLayout>
  );
};

export default Contact;
