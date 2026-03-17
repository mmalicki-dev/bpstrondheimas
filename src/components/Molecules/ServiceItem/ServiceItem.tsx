import Icon from "../../Atoms/Icon/Icon";
import styles from "./ServiceItem.module.css";

interface ServiceItemProps {
  icon: string;
  label: string;
}

const ServiceItem = ({ icon, label }: ServiceItemProps) => {
  return (
    <div className={styles.item}>
      <Icon name={icon} size="clamp(2rem, 6vw, 3rem)" />
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default ServiceItem;
