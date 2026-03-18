import MainLayout from "../../components/Templates/MainLayout/MainLayout";
import TextSection from "../../components/Molecules/TextSection/TextSection";
import OurTeam from "../../components/Molecules/OurTeam/OurTeam";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <MainLayout>
      <div className={styles.aboutUs}>
        <h1>We connect skilled workers with the right opportunities — building a stronger workforce across Norway.</h1>
        <TextSection title="Who we are">
          With over five years of experience operating across the Nordics, BPS Trondheim has
          established itself as a trusted partner for businesses in need of qualified personnel.
          We understand the key challenge facing industries today — finding and securing the right
          people for the right roles. That is exactly what we set out to solve. Through a deep
          network of professionals and a thorough understanding of the Nordic labour market, we
          deliver staffing solutions that are reliable, efficient, and built for the long term.
        </TextSection>
        <OurTeam />
        <TextSection title="Our competence">
          Our team brings hands-on expertise across a wide range of industries, from construction
          and engineering to services and trades. We take the time to understand both the needs of
          our clients and the strengths of our candidates, ensuring every placement is the right
          fit. Years of operating in competitive Nordic markets have sharpened our ability to
          identify talent quickly and match it precisely where it matters most.
        </TextSection>
        <TextSection title="Flexibility and scalability">
          We know that business needs change — sometimes overnight. Whether you need one specialist
          or an entire crew, we scale with you. Our flexible staffing model allows companies to
          respond rapidly to shifting demands without compromising on quality. From short-term
          assignments to long-term contracts, we adapt to your timeline and grow alongside your
          ambitions.
        </TextSection>
        <TextSection title="Full responsibility and project support">
          When you work with BPS Trondheim, you are not just getting staff — you are getting a
          committed partner. We take full responsibility for the personnel we place, handling
          everything from contracts and compliance to follow-up and support throughout the project.
          Our clients can focus on what they do best, confident that the people side is in
          reliable hands.
        </TextSection>
        <h2 className={styles.closing}>Quality first. Always!</h2>
      </div>
    </MainLayout>
  );
};

export default AboutUs;
