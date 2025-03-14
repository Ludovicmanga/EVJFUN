import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import { MainForm } from "@/src/components/MainForm/MainForm";

export default function HomePage() {
  return (
    <div>
      <div>
        <Image height={300} alt="logo" src={logo} />
      </div>
      <MainForm />
    </div>
  );
}
