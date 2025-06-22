import Image from "next/image";
import clsx from "clsx";
import Typography from "../../design/typography/typography";

interface LogoProps {
  /**
   * Scaling factor applied to the default logo size.
   * 1 corresponds to the dimensions used on the homepage.
   */
  size?: number;
  className?: string;
}

export default function Logo({ size = 1, className }: LogoProps) {
  const width = 35.54 * size;
  const height = 77.5 * size;

  return (
    <div className={clsx("flex flex-row gap-5 items-center justify-center", className)}>
      <Image src="/assets/svg/logo.svg" alt="Logo" width={width} height={height} />
      <div className="flex flex-col items-center justify-center">
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
        width={width}
        height={height}
        className="rotate-180"
      />
    </div>
  );
}
