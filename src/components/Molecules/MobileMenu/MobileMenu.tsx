import Icon from "../../Atoms/Icon/Icon";
import Nav from "../Nav/Nav";
import styles from "./MobileMenu.module.css";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <div className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ""}`}>
      <button className={styles.closeButton} onClick={onClose}>
        <Icon name="cross" />
      </button>
      <Nav />
    </div>
  );
};

export default MobileMenu;
