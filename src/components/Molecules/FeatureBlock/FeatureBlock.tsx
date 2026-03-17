import styles from "./FeatureBlock.module.css";

interface FeatureBlockProps {
  title: string;
  description: string;
}

const FeatureBlock = ({ title, description }: FeatureBlockProps) => {
  return (
    <div className={styles.block}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureBlock;
