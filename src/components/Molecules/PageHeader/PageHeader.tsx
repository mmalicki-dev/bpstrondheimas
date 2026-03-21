import ContentLayout from "../../Templates/ContentLayout/ContentLayout";
import styles from "./PageHeader.module.css";

interface PageHeaderProps {
  title: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <div className={styles.pageHeader}>
      <ContentLayout>
        <h1>{title}</h1>
      </ContentLayout>
    </div>
  );
};

export default PageHeader;
