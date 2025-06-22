import clsx from "clsx";
import Navbar from "../ui/components/nav/navbar/component";
import Logo from "../ui/components/logo/component";
import Colors from "../ui/design/colors/colors";

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
      <Logo />
    </div>
  );
}
