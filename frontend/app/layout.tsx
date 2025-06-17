import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "NweVa",
  description: "Web & AI Innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
