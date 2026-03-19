import { useState } from "react";
import MainLayout from "../../components/Templates/MainLayout/MainLayout";
import CareerForm from "../../components/Molecules/CareerForm/CareerForm";
import SubmitStatus from "../../components/Molecules/SubmitStatus/SubmitStatus";
import styles from "./Career.module.css";

type Status = "idle" | "loading" | "success" | "error";

const Career = () => {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = () => {
    setStatus("loading");
    setTimeout(() => setStatus("success"), 2000);
  };

  return (
    <MainLayout>
      <div className={styles.career}>
        <div className={styles.intro}>
          <h2 className={styles.introHeader}>Join our team</h2>
          <p className={styles.introText}>
            At BPS Trondheim, we're always looking for skilled and motivated
            people to grow with us. Whether you're an experienced professional
            or just starting out, we value hard work, dedication, and a passion
            for quality. Take the next step in your career and become part of a
            team that builds more than just structures — we build futures.
          </p>
          <div className={styles.statusArea}>
            {status !== "idle" && (
              <SubmitStatus status={status} onClose={() => setStatus("idle")} />
            )}
          </div>
        </div>
        <div className={styles.formSection}>
          <h2>Apply now</h2>
          <CareerForm onSubmit={handleSubmit} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Career;
