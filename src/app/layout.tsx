import type { Metadata } from "next";
import "./globals.css";
import { outfit, syne, rubik, inter, openSans } from '../../public/font/all-font-family';

export const metadata: Metadata = {
  title: "NNSEL Porfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className={`${outfit.variable} ${syne.variable} ${rubik.variable} ${inter.variable} ${openSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
