import Header from "../../Organisms/Header/Header";
import Footer from "../../Organisms/Footer/Footer";
import styles from "./MainLayout.module.css";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
