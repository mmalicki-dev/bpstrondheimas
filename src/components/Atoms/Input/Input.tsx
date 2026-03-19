import RequiredMark from "../RequiredMark/RequiredMark";
import styles from "./Input.module.css";

interface InputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, name, type = "text", value, required, onChange }: InputProps) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}{required && <RequiredMark />}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        required={required}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
};

export default Input;
