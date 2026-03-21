import ContentLayout from "../../Templates/ContentLayout/ContentLayout";
import styles from "./PageHeader.module.css";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div className={styles.pageHeader}>
      <ContentLayout>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </ContentLayout>
    </div>
  );
};

export default PageHeader;
