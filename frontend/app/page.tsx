import clsx from "clsx";
import Image from "next/image";
import Navbar from "../ui/components/nav/navbar/component";
import Colors from "../ui/design/colors/colors";
import Typography from "../ui/design/typography/typography";

const options = ["About", "Skills", "Works", "Contact"];

export default function Home() {
  return (
    <div
      className={clsx(
        "flex flex-col items-center gap-[150px] h-1800",
        Colors({ themeBackground: "primary" })
      )}
    >
      <Navbar options={options} className="mt-[100px]" />
      <div className="flex flex-row gap-5 items-center justify-center">
        <Image
          src="/assets/svg/logo.svg"
          alt="Logo"
          width={35.54}
          height={77.5}
        />
        <div className={clsx("flex flex-col items-center justify-center")}>
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
    </div>
  );
}
