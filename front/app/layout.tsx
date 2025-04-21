import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import styles from "./layout.module.css";
import { Paper, useMediaQuery } from "@mui/material";
import tinycolor from "tinycolor2";
import Logo from "@/src/components/Logo/Logo";
import Sidebar from "@/src/components/Sidebar/Sidebar";

const poppins = Poppins({
  weight: "400",
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
        <div className={styles.container}>
          <Paper
            sx={{
              background: tinycolor("DE8D63").lighten(7).toString(),
              margin: "1rem",
            }}
            className={styles.contentContainer}
          >
            <div
              style={{
                position: "absolute",
                top: 18,
                left: 13,
              }}
            >
              <Sidebar />
            </div>
            <Logo />
            {children}
          </Paper>
        </div>
      </body>
    </html>
  );
}
