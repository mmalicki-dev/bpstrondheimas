import MainLayout from "../../components/Templates/MainLayout/MainLayout";
import Hero from "../../components/Organisms/Hero/Hero";
import Services from "../../components/Organisms/Services/Services";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Services />
    </MainLayout>
  );
};

export default Home;
