import MainLayout from "../../components/Templates/MainLayout/MainLayout";
import ProjectList from "../../components/Organisms/ProjectList/ProjectList";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <MainLayout>
      <div className={styles.projects}>
        <div className={styles.header}>
          <h1>Our projects</h1>
          <p>A selection of projects where BPS Trondheim has delivered skilled personnel and project support.</p>
        </div>
        <ProjectList />
      </div>
    </MainLayout>
  );
};

export default Projects;
