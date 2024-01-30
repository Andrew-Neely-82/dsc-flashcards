import { Inter } from "next/font/google";
import "@/app/styling/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DSC Flash cards",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
