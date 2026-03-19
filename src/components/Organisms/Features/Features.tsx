import FeatureBlock from "../../Molecules/FeatureBlock/FeatureBlock";
import styles from "./Features.module.css";
import safetyImg from "../../../assets/safety.png";
import personellImg from "../../../assets/personell.png";
import experianceImg from "../../../assets/experiance.png";

const features = [
  {
    title: "Safety",
    description: "Safety is never an afterthought at BPS Trondheim. Every member of our workforce is trained to meet strict HSE standards, ensuring a safe working environment on every site, every time.",
    image: safetyImg,
  },
  {
    title: "Personnel",
    description: "We provide skilled, vetted professionals across a wide range of trades and disciplines. Our rigorous selection process means you get reliable people who are ready to contribute from day one.",
    image: personellImg,
  },
  {
    title: "Expertise",
    description: "With deep roots in the Nordic construction and infrastructure sectors, we bring the knowledge and experience needed to handle even the most demanding projects with confidence and precision.",
    image: experianceImg,
  },
];

const Features = () => {
  return (
    <section className={styles.features}>
      {features.map(({ title, description, image }, index) => (
        <FeatureBlock key={title} title={title} description={description} image={image} reverse={index % 2 !== 0} />
      ))}
    </section>
  );
};

export default Features;
