interface TypographyProps {
  variant?: "h1" | "h2" | "h3" | "p";
  children: React.ReactNode;
}

const Typography = ({ variant = "p", children }: TypographyProps) => {
  const Tag = variant;
  return <Tag>{children}</Tag>;
};

export default Typography;
