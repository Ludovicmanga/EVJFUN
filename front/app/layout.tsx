import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import Navbar from "@/src/components/Navbar/Navbar";

const poppins = Poppins({
  weight: ["400", "600", "700"], // on ajoute les poids nécessaires
  subsets: ["latin"],
  preload: true,
});

export const metadata: Metadata = {
  title: "EVJFUN",
  description: "EVJFUN, pour un EVJF fun !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={poppins.className}>
        <div className={styles.background}></div>
        <div className={styles.container}>
          <Navbar />
          <div className={styles.contentContainer}>
            <div className={styles.content}>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
