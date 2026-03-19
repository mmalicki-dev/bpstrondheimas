import RequiredMark from "../RequiredMark/RequiredMark";
import styles from "./Textarea.module.css";

interface TextareaProps {
  label: string;
  name: string;
  value: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = ({ label, name, value, required, onChange }: TextareaProps) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}{required && <RequiredMark />}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        required={required}
        onChange={onChange}
        className={styles.textarea}
      />
    </div>
  );
};

export default Textarea;
