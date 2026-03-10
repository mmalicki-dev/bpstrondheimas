interface LinkProps {
  href: string;
  label: string;
}

const Link = ({ href, label }: LinkProps) => {
  return <a href={href}>{label}</a>;
};

export default Link;
