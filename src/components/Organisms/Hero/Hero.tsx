import Typography from "../../Atoms/Typography/Typography";
import Button from "../../Atoms/Button/Button";

const Hero = () => {
  return (
    <section>
      <Typography variant="h1">Welcome to BPS Trondheim</Typography>
      <Typography variant="p">Your description goes here.</Typography>
      <Button label="Get Started" />
    </section>
  );
};

export default Hero;
