import MainLayout from "../../components/Templates/MainLayout/MainLayout";
import Hero from "../../components/Organisms/Hero/Hero";
import Services from "../../components/Organisms/Services/Services";
import WhyUs from "../../components/Organisms/WhyUs/WhyUs";
import Features from "../../components/Organisms/Features/Features";
import CTABanner from "../../components/Organisms/CTABanner/CTABanner";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <Services />
      <WhyUs />
      <CTABanner />
    </MainLayout>
  );
};

export default Home;
