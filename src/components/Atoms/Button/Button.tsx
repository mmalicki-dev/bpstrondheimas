import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

const Button = ({ label, type = "button", variant = "primary", onClick }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className={`${styles.button} ${styles[variant]}`}>
      {label}
    </button>
  );
};

export default Button;
