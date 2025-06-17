import clsx from "clsx";
import ColorsProps from "../../../types/colorsProps";

type TElement = "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span";
type TVariants = "display" | "title" | "subtitle" | "body";
interface TypographyProps {
  themeText?: ColorsProps["themeText"];
  children: React.ReactNode;
  element?: TElement;
  variant?: TVariants;
  className?: string;
}

const Typography = ({
  themeText,
  children,
  element = "p",
  variant = "body",
  className,
}: TypographyProps) => {
  const Element = element;
  let variantStyle = "";
  switch (variant) {
    case "display":
      variantStyle = "text-7xl font-title";
      break;
    case "title":
      variantStyle = "text-5xl font-title";
      break;
    case "subtitle":
      variantStyle = "text-2xl font-text";
      break;
    case "body":
      variantStyle = "text-xl font-text";
      break;
  }
  return (
    <Element className={clsx(themeText, variantStyle, className)}>
      {children}
    </Element>
  );
};

export default Typography;
