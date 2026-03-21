import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "../../Atoms/Icon/Icon";
import styles from "./Hero.module.css";

const handleScrollDown = () => {
  const target = window.innerHeight;
  const start = window.scrollY;
  const distance = target - start;
  const duration = 1800;
  let startTime: number | null = null;

  const ease = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  const step = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start + distance * ease(progress));
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};

const Hero = () => {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={styles.hero}>
      <video
        className={styles.video}
        src="/video/background_video.mp4"
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
      <button className={`${styles.scrollDown} ${atTop ? "" : styles.hidden}`} onClick={handleScrollDown} aria-label="Scroll down">
        <Icon name="circle-down" size="2.5rem" />
      </button>
    </section>
  );
};

export default Hero;
