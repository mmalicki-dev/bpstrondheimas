import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button = ({ label, type = "button", onClick }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className={styles.button}>
      {label}
    </button>
  );
};

export default Button;
