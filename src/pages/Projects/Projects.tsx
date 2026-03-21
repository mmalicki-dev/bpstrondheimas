import MainLayout from "../../components/Templates/MainLayout/MainLayout";
import ProjectList from "../../components/Organisms/ProjectList/ProjectList";
import styles from "./Projects.module.css";
import PageHeader from "../../components/Molecules/PageHeader/PageHeader";

const Projects = () => {
  return (
    <MainLayout>
      <div className={styles.projects}>
        <PageHeader
          title="Our projects"
          subtitle="A selection of projects where BPS Trondheim has delivered skilled personnel and project support."
        />
        <ProjectList />
      </div>
    </MainLayout>
  );
};

export default Projects;
