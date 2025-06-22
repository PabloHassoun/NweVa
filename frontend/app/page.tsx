import clsx from "clsx";
import Link from "next/link";
import Navbar from "../ui/components/nav/navbar/component";
import Logo from "../ui/components/logo/component";
import Button from "../ui/components/button/component";
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
      <div className="flex gap-4">
        <Link href="/about">
          <Button
            variant="accent"
            iconPosition="right"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            }
          >
            Learn more
          </Button>
        </Link>
        <Link href="/contact">
          <Button
            variant="secondary"
            iconPosition="left"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75l9.75 7.5 9.75-7.5M4.5 4.5h15a2.25 2.25 0 012.25 2.25v12a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 18.75v-12A2.25 2.25 0 014.5 4.5z"
                />
              </svg>
            }
          >
            Contact me
          </Button>
        </Link>
      </div>
    </div>
  );
}
