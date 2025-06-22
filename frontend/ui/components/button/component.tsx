import clsx from "clsx";
import Colors from "../../design/colors/colors";

export type ButtonVariant = "primary" | "secondary" | "accent";
export type IconPosition = "left" | "right" | "only";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  icon,
  iconPosition = "left",
  className,
  ...rest
}: ButtonProps) {
  const variantClass = (() => {
    switch (variant) {
      case "secondary":
        return Colors({ themeBackground: "secondary", themeText: "primary" });
      case "accent":
        return Colors({ themeBackground: "accent", themeText: "secondary" });
      default:
        return Colors({ themeBackground: "primary", themeText: "secondary" });
    }
  })();

  const renderIcon = () => icon && <span className="w-5 h-5">{icon}</span>;
  const showText = iconPosition !== "only";

  return (
    <button
      className={clsx(
        "px-4 py-2 rounded-md flex items-center gap-2 font-nav text-xl",
        variantClass,
        className
      )}
      {...rest}
    >
      {icon && iconPosition === "left" && renderIcon()}
      {showText && <span>{children}</span>}
      {icon && iconPosition === "right" && renderIcon()}
      {icon && iconPosition === "only" && renderIcon()}
    </button>
  );
}
