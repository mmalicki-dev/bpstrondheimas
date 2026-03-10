import MainLayout from "../../components/Templates/MainLayout/MainLayout";
import ContactForm from "../../components/Organisms/ContactForm/ContactForm";
import Typography from "../../components/Atoms/Typography/Typography";

const Contact = () => {
  return (
    <MainLayout>
      <Typography variant="h1">Contact</Typography>
      <ContactForm />
    </MainLayout>
  );
};

export default Contact;
