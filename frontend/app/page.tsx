import Image from "next/image";
import Typography from "../ui/design/typography/typography";

export default function Home() {
  return (
    <div
      id="home"
      className="flex flex-row items-center justify-center gap-5 h-screen"
    >
      <Image
        src="/assets/svg/logo.svg"
        alt="Logo"
        width={35.54}
        height={77.5}
      />
      <div className="flex flex-col items-center justify-center h-screen">
        <Typography variant="display" className="text-white">
          NweVa
        </Typography>
        <Typography variant="subtitle" className="text-white">
          Web & AI Innovation
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
