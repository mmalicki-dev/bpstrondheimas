import { useState } from "react";
import Input from "../../Atoms/Input/Input";
import Textarea from "../../Atoms/Textarea/Textarea";
import Button from "../../Atoms/Button/Button";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Send us a message</h2>
      <Input label="Name" name="name" value={form.name} onChange={handleChange} />
      <Input label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
      <Textarea label="Message" name="message" value={form.message} onChange={handleChange} />
      <Button label="Send" type="submit" />
    </form>
  );
};

export default ContactForm;
