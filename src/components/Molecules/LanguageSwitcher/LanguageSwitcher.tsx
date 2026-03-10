import { useLanguage } from "../../../context/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div>
      <button
        onClick={() => setLanguage("en")}
        disabled={language === "en"}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("no")}
        disabled={language === "no"}
      >
        NO
      </button>
    </div>
  );
};

export default LanguageSwitcher;
