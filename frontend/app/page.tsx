import Image from "next/image";

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
        <h1 className="text-7xl font-title text-white">NweVa</h1>
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
