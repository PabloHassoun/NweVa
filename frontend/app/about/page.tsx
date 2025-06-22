import Colors from "../../ui/design/colors/colors";
import Typography from "../../ui/design/typography/typography";

export default function AboutPage() {
  return (
    <div className={Colors({ themeBackground: "primary" }) + " p-8"}>
      <Typography variant="title" themeText="accent">
        About Page
      </Typography>
    </div>
  );
}
