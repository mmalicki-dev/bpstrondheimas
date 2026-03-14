import Icon from "../Icon/Icon";
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
      <Icon name="hamburger" />
    </button>
  );
};

export default HamburgerButton;
