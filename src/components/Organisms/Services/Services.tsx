import ServiceItem from "../../Molecules/ServiceItem/ServiceItem";
import ContentLayout from "../../Templates/ContentLayout/ContentLayout";
import styles from "./Services.module.css";

const services = [
  { icon: "industrial", label: "Industrial Construction" },
  { icon: "infrastructure", label: "Infrastructure Projects" },
  { icon: "workforce", label: "Workforce Solutions" },
  { icon: "supervision", label: "Site Supervision & Coordination" },
  { icon: "hse", label: "HSE & Compliance" },
  { icon: "maintenance", label: "Maintenance & Technical Support" },
  { icon: "logistics", label: "Logistics & Site Support" },
  { icon: "complex", label: "Special & Complex Projects" },
];

const Services = () => {
  return (
    <section className={styles.services}>
      <ContentLayout>
        <div className={styles.center}>
          <span className={styles.centerText}>Workforce Capability</span>
        </div>
        <div className={styles.grid}>
          {services.map(({ icon, label }) => (
            <ServiceItem key={icon} icon={icon} label={label} />
          ))}
        </div>
      </ContentLayout>
    </section>
  );
};

export default Services;
