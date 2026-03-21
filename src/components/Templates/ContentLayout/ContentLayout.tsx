import { type ReactNode } from "react";
import styles from "./ContentLayout.module.css";

interface ContentLayoutProps {
  children: ReactNode;
}

const ContentLayout = ({ children }: ContentLayoutProps) => {
  return <div className={styles.content}>{children}</div>;
};

export default ContentLayout;
