"use client";
import React, { useEffect, useState } from "react";
import { MainForm } from "@/src/components/MainForm/MainForm";
import ResultDisplay from "@/src/components/ResultDisplay/ResultDisplay";
import Logo from "@/src/components/Logo/Logo";
import styles from "./page.module.css";
import { Card } from "@mui/material";
import Hero from "@/src/components/Hero/Hero";
import { Crisp } from "crisp-sdk-web";
import FormContainer from "@/src/components/FormContainer/FormContainer";
import EcologicalInfo from "@/src/components/EcologicalInfo/EcologicalInfo";

export default function HomePage() {
  const [destinationResult, setDestinationResult] = useState<string>();

  useEffect(() => {
    Crisp.configure("51eb8084-2587-498f-a1ea-0b9cc7c60482");
  }, []);

  return (
    <div>
      <Hero
        title="Construisez votre EVJF rêvé en quelques clics !"
        subtitle="Choisissez vos critères, on vous propose des idées de destinations géniales"
      />

      <div className={styles.formContainer}>
        <FormContainer>
          {destinationResult ? (
            <ResultDisplay destinationName={destinationResult} />
          ) : (
            <MainForm
              destinationResult={destinationResult}
              setDestinationResult={setDestinationResult}
            />
          )}
        </FormContainer>
        <div className={styles.ecologicalInfo}>
          <EcologicalInfo />
        </div>
      </div>
    </div>
  );
}
