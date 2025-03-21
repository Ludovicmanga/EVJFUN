"use client";
import React, { useState } from "react";
import { MainForm } from "@/src/components/MainForm/MainForm";
import ResultDisplay from "@/src/components/ResultDisplay/ResultDisplay";

export default function HomePage() {
  const [destinationResult, setDestinationResult] = useState<string>();

  return (
    <div>
      {destinationResult ? (
        <ResultDisplay destinationName={destinationResult} />
      ) : (
        <MainForm
          destinationResult={destinationResult}
          setDestinationResult={setDestinationResult}
        />
      )}
    </div>
  );
}
