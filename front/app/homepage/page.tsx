"use client";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import logo from "../../public/logo_evjfun.png";
import { CountryForm } from "@/src/components/CountryForm/CountryForm";
import { SeasonForm } from "@/src/components/SeasonForm/SeasonForm";
import { TravelDetailsForm } from "@/src/components/TravelDetailsForm/TravelDetailsForm";
import { Button } from "@mui/material";

export default function HomePage() {
  return (
    <div>
      <div className={styles.logoContainer}>
        <Image height={300} alt="logo" src={logo} />
      </div>
      <MainForm />
    </div>
  );
}

const MainForm = () => {
  const [travelCountry, setTravelCountry] = React.useState<
    "france" | "abroad"
  >();
  const [travelSeason, setTravelSeason] = React.useState<
    "spring" | "summer" | "autumn" | "winter" | "flex"
  >();
  const [travelDetails, setTravelDetails] = React.useState<string[]>([]);

  return (
    <div>
      <h1 className={styles.title}>
        {travelCountry === undefined
          ? "Je recherche une destination..."
          : travelSeason === undefined
          ? "Nous partons en..."
          : "Je recherche..."}
      </h1>
      <div className={styles.buttonsContainer}>
        {travelCountry === undefined ? (
          <CountryForm setTravelCountry={setTravelCountry} />
        ) : travelSeason === undefined ? (
          <SeasonForm setTravelSeason={setTravelSeason} />
        ) : (
          <TravelDetailsForm setTravelDetails={setTravelDetails} />
        )}
      </div>
      {travelDetails.length > 0 && <Button variant="contained">Valider</Button>}
    </div>
  );
};
