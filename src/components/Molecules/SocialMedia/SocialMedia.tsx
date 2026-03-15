import Logo from "../../Atoms/Logo/Logo";
import Icon from "../../Atoms/Icon/Icon";
import styles from "./SocialMedia.module.css";

const socials = [
  { name: "facebook", href: "https://facebook.com" },
  { name: "instagram", href: "https://instagram.com" },
  { name: "linkedin", href: "https://linkedin.com" },
];

const SocialMedia = () => {
  return (
    <div className={styles.socialMedia}>
      <Logo full />
      <div className={styles.icons}>
        {socials.map(({ name, href }) => (
          <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name}>
            <Icon name={name} size="clamp(1.5rem, 6vw, 2.5rem)" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
