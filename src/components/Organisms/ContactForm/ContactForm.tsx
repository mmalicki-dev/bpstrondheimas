import { useState } from "react";
import Input from "../../Atoms/Input/Input";
import Button from "../../Atoms/Button/Button";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
      <Input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <textarea
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button label="Send" type="submit" />
    </form>
  );
};

export default ContactForm;
