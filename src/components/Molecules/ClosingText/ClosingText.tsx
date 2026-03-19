import styles from "./ClosingText.module.css";

interface ClosingTextProps {
  text: string;
}

const ClosingText = ({ text }: ClosingTextProps) => {
  return <h2 className={styles.closingText}>{text}</h2>;
};

export default ClosingText;
