import clsx from "clsx";
import Image from "next/image";
import Colors from "../ui/design/colors/colors";
import Typography from "../ui/design/typography/typography";

export default function Home() {
  return (
    <div
      className={clsx(
        "flex flex-row items-center justify-center gap-5 h-screen",
        Colors({ themeBackground: "primary" })
      )}
    >
      <Image
        src="/assets/svg/logo.svg"
        alt="Logo"
        width={35.54}
        height={77.5}
      />
      <div
        className={clsx("flex flex-col items-center justify-center h-screen")}
      >
        <Typography variant="display" element="h1" themeText="primary">
          NweVa
        </Typography>
        <Typography variant="subtitle" element="h2" themeText="accent">
          AI & Web Innovations
        </Typography>
      </div>
      <Image
        src="/assets/svg/logo.svg"
        alt="Logo"
        width={35.54}
        height={77.5}
        className="rotate-180"
      />
    </div>
  );
}
