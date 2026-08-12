import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Yashawantha H M | Developer Portfolio",
  description:
    "Portfolio of Yashawantha H M — Computer Science Engineering student and developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}