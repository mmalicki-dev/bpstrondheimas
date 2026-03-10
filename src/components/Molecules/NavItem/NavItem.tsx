import Link from "../../Atoms/Link/Link";

interface NavItemProps {
  href: string;
  label: string;
}

const NavItem = ({ href, label }: NavItemProps) => {
  return (
    <li>
      <Link href={href} label={label} />
    </li>
  );
};

export default NavItem;
