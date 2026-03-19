import styles from "./FeatureBlock.module.css";

interface FeatureBlockProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

const FeatureBlock = ({ title, description, image, reverse = false }: FeatureBlockProps) => {
  return (
    <div className={`${styles.block} ${reverse ? styles.reverse : ""}`}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureBlock;
