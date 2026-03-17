import styles from "./Testimonial.module.css";

interface TestimonialProps {
  quote: string;
  name: string;
  company: string;
}

const Testimonial = ({ quote, name, company }: TestimonialProps) => {
  return (
    <div className={styles.testimonial}>
      <p className={styles.quote}>"{quote}"</p>
      <span className={styles.name}>{name}</span>
      <span className={styles.company}>{company}</span>
    </div>
  );
};

export default Testimonial;
