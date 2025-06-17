import clsx from "clsx";
import ColorsProps from "../../../types/colorsProps";

const Colors = ({ themeText, themeBackground }: ColorsProps) => {
  let textColor = "";
  let backgroundColor = "";
  switch (themeText) {
    case "primary":
      textColor = "text-text-primary";
      break;
    case "secondary":
      textColor = "text-text-secondary";
      break;
    case "accent":
      textColor = "text-text-accent";
      break;
    case "success":
      textColor = "text-text-success";
      break;
    case "warning":
      textColor = "text-text-warning";
      break;
    case "error":
      textColor = "text-text-error";
      break;
    default:
      textColor = "";
      break;
  }
  switch (themeBackground) {
    case "primary":
      backgroundColor = "bg-background-primary";
      break;
    case "secondary":
      backgroundColor = "bg-background-secondary";
      break;
    case "accent":
      backgroundColor = "bg-accent";
      break;
    case "success":
      backgroundColor = "bg-success";
      break;
    case "warning":
      backgroundColor = "bg-warning";
      break;
    case "error":
      backgroundColor = "bg-error";
      break;
    default:
      backgroundColor = "";
      break;
  }
  const classStyle = clsx(textColor, backgroundColor);
  return classStyle;
};

export default Colors;
