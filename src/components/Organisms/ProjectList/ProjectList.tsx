import ProjectCard from "../../Molecules/ProjectCard/ProjectCard";
import ContentLayout from "../../Templates/ContentLayout/ContentLayout";
import styles from "./ProjectList.module.css";
import projects from "../../../data/projects.json";

const ProjectList = () => {
  return (
    <div className={styles.projectPage}>
      <ContentLayout>
        <div className={styles.list}>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </ContentLayout>
    </div>
  );
};

export default ProjectList;
