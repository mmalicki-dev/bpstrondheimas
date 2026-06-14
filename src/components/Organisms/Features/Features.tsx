import FeatureBlock from "../../Molecules/FeatureBlock/FeatureBlock";
import ContentLayout from "../../Templates/ContentLayout/ContentLayout";
import styles from "./Features.module.css";
const features = [
  {
    title: "Safety",
    description: "Safety is never an afterthought at Trondheim Bygg Service AS. Every member of our workforce is trained to meet strict HSE standards, ensuring a safe working environment on every site, every time.",
    image: "/images/safety.png",
  },
  {
    title: "Personnel",
    description: "We provide skilled, vetted professionals across a wide range of trades and disciplines. Our rigorous selection process means you get reliable people who are ready to contribute from day one.",
    image: "/images/personell.png",
  },
  {
    title: "Expertise",
    description: "With deep roots in the Nordic construction and infrastructure sectors, we bring the knowledge and experience needed to handle even the most demanding projects with confidence and precision.",
    image: "/images/experiance.png",
  },
];

const Features = () => {
  return (
    <section className={styles.features}>
      <ContentLayout>
        {features.map(({ title, description, image }, index) => (
          <FeatureBlock key={title} title={title} description={description} image={image} reverse={index % 2 !== 0} />
        ))}
      </ContentLayout>
    </section>
  );
};

export default Features;
