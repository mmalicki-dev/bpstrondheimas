import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  image: string;
  title: string;
  location: string;
  year: string;
  involvement: string;
}

const ProjectCard = ({ image, title, location, year, involvement }: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.body}>
        <div className={styles.meta}>
          <span>{location}</span>
          <span>{year}</span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.involvement}>{involvement}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
