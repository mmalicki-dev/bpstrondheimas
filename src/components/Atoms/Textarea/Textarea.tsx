import styles from "./Textarea.module.css";

interface TextareaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = ({ label, name, value, onChange }: TextareaProps) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={styles.textarea}
      />
    </div>
  );
};

export default Textarea;
