import { useState } from "react";
import Input from "../../Atoms/Input/Input";
import Textarea from "../../Atoms/Textarea/Textarea";
import SubmitButton from "../../Atoms/SubmitButton/SubmitButton";
import styles from "./ContactForm.module.css";

type Status = "idle" | "loading" | "success" | "error";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 2000);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.formHeader}>Send us a message</h2>
      <Input
        label="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <Input
        label="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <Textarea
        label="Message"
        name="message"
        value={form.message}
        onChange={handleChange}
        required
      />
      <SubmitButton
        label="Send"
        status={status}
        onReset={() => setStatus("idle")}
      />
    </form>
  );
};

export default ContactForm;
