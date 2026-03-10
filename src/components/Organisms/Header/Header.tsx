import Navigation from "../../Molecules/Navigation/Navigation";
import Logo from "../../Atoms/Logo/Logo";
import LanguageSwitcher from "../../Molecules/LanguageSwitcher/LanguageSwitcher";

const Header = () => {
  return (
    <header>
      <Logo />
      <Navigation />
      <LanguageSwitcher />
    </header>
  );
};

export default Header;
