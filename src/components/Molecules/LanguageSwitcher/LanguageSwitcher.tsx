import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import styles from "./LanguageSwitcher.module.css";

const languages = [
  { code: "en", label: "English", flagClass: "flagEn" },
  { code: "no", label: "Norsk", flagClass: "flagNo" },
] as const;

type LangCode = (typeof languages)[number]["code"];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = languages.find((l) => l.code === language)!;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code: LangCode) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className={styles.wrapper} ref={ref}>
      <button
        className={`${styles.flag} ${styles[current.flagClass]}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Select language"
        aria-expanded={isOpen}
      />
      {isOpen && (
        <ul className={styles.dropdown}>
          {languages.map(({ code, label, flagClass }) => (
            <li key={code}>
              <button
                className={`${styles.option} ${code === language ? styles.optionActive : ""}`}
                onClick={() => handleSelect(code)}
              >
                <span className={`${styles.flag} ${styles[flagClass]}`} />
                <span>{label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
