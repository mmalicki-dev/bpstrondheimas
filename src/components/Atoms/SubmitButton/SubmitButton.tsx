import { useEffect } from "react";
import styles from "./SubmitButton.module.css";

type Status = "idle" | "loading" | "success" | "error";

interface SubmitButtonProps {
  label: string;
  status: Status;
  onReset: () => void;
}

const SubmitButton = ({ label, status, onReset }: SubmitButtonProps) => {
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(onReset, 15000);
      return () => clearTimeout(timer);
    }
  }, [status, onReset]);

  const stateClass = status !== "idle" ? styles[status] : "";

  return (
    <button type="submit" className={`${styles.button} ${stateClass}`}>
      {status === "idle" && label}
      {status === "loading" && (
        <div className={styles.dots}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
      )}
      {status === "success" && "✓"}
      {status === "error" && "✕"}
    </button>
  );
};

export default SubmitButton;
