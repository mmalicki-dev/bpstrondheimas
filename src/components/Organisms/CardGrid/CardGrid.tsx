import Card from "../../Molecules/Card/Card";

interface CardItem {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
}

interface CardGridProps {
  items: CardItem[];
}

const CardGrid = ({ items }: CardGridProps) => {
  return (
    <div>
      {items.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
};

export default CardGrid;
