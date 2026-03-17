import { Link } from "react-router-dom";
import backgroundVideo from "../../../assets/background_video.mp4";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <video
        className={styles.video}
        src={backgroundVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.headline}>Need qualified personnel? We deliver.</h1>
        <p className={styles.sub}>
          Trusted by businesses across the Nordics — fast, reliable, and fully responsible staffing.
        </p>
        <Link to="/contact" className={styles.cta}>Get in touch</Link>
      </div>
    </section>
  );
};

export default Hero;
