"use client";

import Image from "next/image";
import logo from "../../../public/logo.png";
import { goToHomePage } from "@/src/utils/utils";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <Image
      className={styles.logo}
      height={250}
      alt="logo"
      src={logo}
      onClick={goToHomePage}
    />
  );
}
