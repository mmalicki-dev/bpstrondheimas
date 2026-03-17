import styles from "./Point.module.css";

interface PointProps {
  text: string;
}

const Point = ({ text }: PointProps) => {
  return <p className={styles.point}>{text}</p>;
};

export default Point;
