import Typography from "../../Atoms/Typography/Typography";

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

const Card = ({ title, description, imageUrl }: CardProps) => {
  return (
    <div>
      {imageUrl && <img src={imageUrl} alt={title} />}
      <Typography variant="h3">{title}</Typography>
      <Typography variant="p">{description}</Typography>
    </div>
  );
};

export default Card;
