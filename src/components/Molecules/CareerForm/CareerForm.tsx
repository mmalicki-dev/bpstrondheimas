import { useState } from "react";
import Input from "../../Atoms/Input/Input";
import Textarea from "../../Atoms/Textarea/Textarea";
import FileInput from "../../Atoms/FileInput/FileInput";
import Button from "../../Atoms/Button/Button";
import styles from "./CareerForm.module.css";

const CareerForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    coverLetter: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleReset = () => {
    setForm({ fullName: "", email: "", phone: "", address: "", city: "", coverLetter: "" });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input label="Full name" name="fullName" value={form.fullName} onChange={handleChange} />
      <Input label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
      <Input label="Phone" name="phone" type="tel" value={form.phone} onChange={handleChange} />
      <Input
        label="Address"
        name="address"
        value={form.address}
        onChange={handleChange}
      />
      <Input
        label="City"
        name="city"
        value={form.city}
        onChange={handleChange}
      />
      <Textarea
        label="Cover letter"
        name="coverLetter"
        value={form.coverLetter}
        onChange={handleChange}
      />
      <FileInput label="Resume" name="resume" onChange={() => {}} />
      <FileInput
        label="Additional files"
        name="additionalFiles"
        multiple
        onChange={() => {}}
      />
      <div className={styles.buttons}>
        <Button label="Submit application" type="submit" />
        <Button label="Reset" variant="secondary" onClick={handleReset} />
      </div>
    </form>
  );
};

export default CareerForm;
