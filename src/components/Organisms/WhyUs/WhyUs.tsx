import Point from "../../Atoms/Point/Point";
import Testimonial from "../../Molecules/Testimonial/Testimonial";
import styles from "./WhyUs.module.css";

const points = [
  "5+ years of proven experience across the Nordics",
  "A trusted network of qualified professionals ready to deploy",
  "Full responsibility from placement to project completion",
  "Fast, flexible staffing that scales with your needs",
];

const testimonials = [
  {
    quote: "BPS Trondheim delivered a full crew within days. The quality of personnel exceeded our expectations and the process was seamless from start to finish.",
    name: "Erik Halvorsen",
    company: "Halvorsen Bygg AS",
  },
  {
    quote: "We have worked with many staffing agencies over the years, but none have matched BPS when it comes to reliability and accountability. They truly take ownership.",
    name: "Ingrid Moen",
    company: "NordInfra Solutions",
  },
  {
    quote: "Scaling our workforce for a large infrastructure project used to be a headache. With BPS Trondheim, it was handled professionally and on time.",
    name: "Lars Bakke",
    company: "Bakke & Partners",
  },
];

const WhyUs = () => {
  return (
    <section className={styles.whyUs}>
      <h2>Why choose us</h2>
      <div className={styles.content}>
        <div className={styles.points}>
          {points.map((point) => (
            <Point key={point} text={point} />
          ))}
        </div>
        <div className={styles.testimonials}>
          {testimonials.map(({ quote, name, company }) => (
            <Testimonial key={name} quote={quote} name={name} company={company} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
