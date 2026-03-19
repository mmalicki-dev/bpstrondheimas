import { useEffect } from "react";
import styles from "./SubmitStatus.module.css";

type Status = "loading" | "success" | "error";

interface SubmitStatusProps {
  status: Status;
  onClose: () => void;
}

const SubmitStatus = ({ status, onClose }: SubmitStatusProps) => {
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(onClose, 15000);
      return () => clearTimeout(timer);
    }
  }, [status, onClose]);

  return (
    <div className={styles.overlay}>
      <div className={styles.card}>
        {status === "loading" && (
          <div className={styles.dots}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </div>
        )}
        {status === "success" && (
          <>
            <div className={`${styles.icon} ${styles.success}`}>✓</div>
            <p className={styles.message}>Application sent successfully!</p>
          </>
        )}
        {status === "error" && (
          <>
            <div className={`${styles.icon} ${styles.error}`}>✕</div>
            <p className={styles.message}>Something went wrong. Please try again.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default SubmitStatus;
