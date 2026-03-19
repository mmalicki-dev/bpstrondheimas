import RequiredMark from "../RequiredMark/RequiredMark";
import styles from "./FileInput.module.css";

interface FileInputProps {
  label: string;
  name: string;
  multiple?: boolean;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInput = ({ label, name, multiple = false, required, onChange }: FileInputProps) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}{required && <RequiredMark />}
      </label>
      <input
        id={name}
        name={name}
        type="file"
        multiple={multiple}
        required={required}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
};

export default FileInput;
