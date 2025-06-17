export default interface ColorsProps {
  themeText?:
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "warning"
    | "error";
  themeBackground?:
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "warning"
    | "error";
  themeBorder?:
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "loading"
    | "error";
  themeButton?:
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "loading"
    | "error";
  themeInput?:
    | "primary"
    | "secondary"
    | "accent"
    | "success"
    | "waiting"
    | "error";
  themeCard?: "primary" | "secondary" | "accent";
  themeLink?: "primary" | "secondary" | "accent";
}
