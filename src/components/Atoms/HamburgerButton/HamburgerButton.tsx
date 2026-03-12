import styles from "./HamburgerButton.module.css";

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerButton = ({ isOpen, onClick }: HamburgerButtonProps) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      <span className={`${styles.line} ${isOpen ? styles.lineTop : ""}`} />
      <span className={`${styles.line} ${isOpen ? styles.lineMiddle : ""}`} />
      <span className={`${styles.line} ${isOpen ? styles.lineBottom : ""}`} />
    </button>
  );
};

export default HamburgerButton;
