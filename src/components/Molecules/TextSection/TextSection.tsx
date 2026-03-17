import type { ReactNode } from "react";
import styles from "./TextSection.module.css";

interface TextSectionProps {
  title: string;
  children: ReactNode;
}

const TextSection = ({ title, children }: TextSectionProps) => {
  return (
    <div className={styles.textSection}>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
};

export default TextSection;
