import clsx from "clsx";
import Colors from "../../../design/colors/colors";
import Typography from "../../../design/typography/typography";

interface NavbarProps {
  options: string[];
  className?: string;
}

export default function Navbar({ options, className }: NavbarProps) {
  return (
    <ul
      className={clsx(
        "flex gap-[40px] pr-[40px] pl-[40px] pt-[10px] pb-[10px] rounded-[10px]",
        Colors({ themeBackground: "secondary" }),
        className
      )}
    >
      {options.map((option) => (
        <li
          key={option}
          className="cursor-pointer text-text-secondary hover:scale-105 hover:text-text-accent transition-all transition-0.5"
        >
          <Typography variant="nav">{option}</Typography>
        </li>
      ))}
    </ul>
  );
}
