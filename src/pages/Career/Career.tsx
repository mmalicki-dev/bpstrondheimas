import MainLayout from "../../components/Templates/MainLayout/MainLayout";
import CareerForm from "../../components/Molecules/CareerForm/CareerForm";
import styles from "./Career.module.css";

const Career = () => {
  return (
    <MainLayout>
      <div className={styles.career}>
        <div className={styles.intro}>
          <h2>Join our team</h2>
          <p>
            At BPS Trondheim, we're always looking for skilled and motivated people to grow with us.
            Whether you're an experienced professional or just starting out, we value hard work,
            dedication, and a passion for quality. Take the next step in your career and become part
            of a team that builds more than just structures — we build futures.
          </p>
        </div>
        <div className={styles.formSection}>
          <h2>Apply now</h2>
          <CareerForm />
        </div>
      </div>
    </MainLayout>
  );
};

export default Career;
