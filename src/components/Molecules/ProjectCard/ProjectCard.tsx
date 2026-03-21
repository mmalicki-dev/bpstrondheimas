import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  image: string;
  title: string;
  involvement: string;
}

const ProjectCard = ({ image, title, involvement }: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.inner}>
        <div className={styles.front}>
          <img src={image} alt={title} className={styles.image} />
        </div>
        <div className={styles.back}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.involvement}>{involvement}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
