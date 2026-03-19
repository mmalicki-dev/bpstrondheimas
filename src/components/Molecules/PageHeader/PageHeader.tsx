import styles from "./PageHeader.module.css";

interface PageHeaderProps {
  title: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
  return <h1 className={styles.pageHeader}>{title}</h1>;
};

export default PageHeader;
