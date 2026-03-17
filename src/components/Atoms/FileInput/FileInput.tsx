import styles from "./FileInput.module.css";

interface FileInputProps {
  label: string;
  name: string;
  multiple?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInput = ({ label, name, multiple = false, onChange }: FileInputProps) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <input
        id={name}
        name={name}
        type="file"
        multiple={multiple}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
};

export default FileInput;
