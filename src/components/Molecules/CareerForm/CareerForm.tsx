import { useState } from "react";
import Input from "../../Atoms/Input/Input";
import Textarea from "../../Atoms/Textarea/Textarea";
import FileInput from "../../Atoms/FileInput/FileInput";
import Button from "../../Atoms/Button/Button";
import SubmitButton from "../../Atoms/SubmitButton/SubmitButton";
import styles from "./CareerForm.module.css";

type Status = "idle" | "loading" | "success" | "error";

interface CareerFormProps {
  onSubmit: () => void;
  status: Status;
  onReset: () => void;
}

const CareerForm = ({ onSubmit, status, onReset }: CareerFormProps) => {
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

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  const handleReset = () => {
    setForm({ fullName: "", email: "", phone: "", address: "", city: "", coverLetter: "" });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input label="Full name" name="fullName" value={form.fullName} onChange={handleChange} required />
      <Input label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
      <Input label="Phone" name="phone" type="tel" value={form.phone} onChange={handleChange} required />
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
        required
      />
      <Textarea
        label="Cover letter"
        name="coverLetter"
        value={form.coverLetter}
        onChange={handleChange}
      />
      <FileInput label="CV / Resume" name="resume" onChange={() => {}} required />
      <FileInput
        label="Additional files"
        name="additionalFiles"
        multiple
        onChange={() => {}}
      />
      <div className={styles.buttons}>
        <div className={styles.mobileSubmit}>
          <SubmitButton label="Submit application" status={status} onReset={onReset} />
        </div>
        <div className={styles.tabletSubmit}>
          <Button label="Submit application" type="submit" />
        </div>
        <Button label="Reset" variant="secondary" onClick={handleReset} />
      </div>
    </form>
  );
};

export default CareerForm;
