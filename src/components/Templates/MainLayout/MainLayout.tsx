import { type ReactNode } from "react";
import Header from "../../Organisms/Header/Header";
import Footer from "../../Organisms/Footer/Footer";
import styles from "./MainLayout.module.css";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
