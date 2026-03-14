import symbolDefs from "../../../assets/symbol-defs.svg";

interface IconProps {
  name: string;
  size?: string;
}

const Icon = ({ name, size = "clamp(2rem, 4vw, 4rem)" }: IconProps) => {
  return (
    <svg width={size} height={size}>
      <use href={`${symbolDefs}#icon-${name}`} />
    </svg>
  );
};

export default Icon;
