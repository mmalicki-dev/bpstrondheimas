import ProjectCard from "../../Molecules/ProjectCard/ProjectCard";
import ContentLayout from "../../Templates/ContentLayout/ContentLayout";
import styles from "./ProjectList.module.css";

const projects = [
  {
    image: "https://picsum.photos/seed/construction1/800/450",
    title: "Nyhavn Commercial Complex",
    location: "Trondheim",
    year: "2023",
    involvement:
      "BPS Trondheim supplied a full crew of skilled carpenters and scaffolding workers throughout the construction phase, ensuring the project met its tight delivery schedule.",
  },
  {
    image: "https://picsum.photos/seed/highway2/800/450",
    title: "E6 Motorway Extension",
    location: "Trøndelag",
    year: "2022",
    involvement:
      "We provided specialised ground workers and machine operators for a 12-month roadworks contract, covering everything from groundwork to final asphalt laying.",
  },
  {
    image: "https://picsum.photos/seed/residential3/800/450",
    title: "Solvik Residential Development",
    location: "Stjørdal",
    year: "2023",
    involvement:
      "BPS Trondheim handled the full staffing of the site — from foundation teams to finishing crews — across 48 residential units delivered on time and on budget.",
  },
  {
    image: "https://picsum.photos/seed/industrial4/800/450",
    title: "Nidaros Energy Terminal",
    location: "Orkanger",
    year: "2024",
    involvement:
      "We sourced and placed certified industrial technicians and safety personnel for the terminal expansion, working closely with the site manager to maintain compliance throughout.",
  },
];

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
