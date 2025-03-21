"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { CountryForm } from "../CountryForm/CountryForm";
import { SeasonForm } from "../SeasonForm/SeasonForm";
import { TravelDetailsForm } from "../TravelDetailsForm/TravelDetailsForm";
import { Button, Fab } from "@mui/material";
import { SeasonType } from "@/types/types";
import { getDestinationFromCriterionApiCall } from "@/src/helpers/destination.helper";
import styles from "./MainForm.module.css";
import { useRouter } from "next/navigation";
import { AutoAwesome, AutoFixHigh, Navigation } from "@mui/icons-material";

export const MainForm = (props: {
  setDestinationResult: Dispatch<SetStateAction<string | undefined>>;
  destinationResult: string | undefined;
}) => {
  const [isInFrance, setIsInFrance] = useState<boolean>();
  const [travelSeason, setTravelSeason] = useState<SeasonType>();
  const [travelDetails, setTravelDetails] = useState<string[]>([]);

  const getDestinationFromCriterion = async () => {
    if (isInFrance !== undefined && travelSeason && travelDetails) {
      const res = await getDestinationFromCriterionApiCall({
        isInFrance,
        travelSeason,
        travelDetails,
      });

      if (res.data) {
        props.setDestinationResult(res.data);
      }
    }
  };

  return (
    <div>
      <h1 className={styles.title}>
        {isInFrance === undefined
          ? "Je recherche une destination..."
          : travelSeason === undefined
          ? "Nous partons en..."
          : "Je recherche... (max 2)"}
      </h1>
      <div className={styles.buttonsContainer}>
        {isInFrance === undefined ? (
          <CountryForm setIsInFrance={setIsInFrance} />
        ) : travelSeason === undefined ? (
          <SeasonForm setTravelSeason={setTravelSeason} />
        ) : (
          <TravelDetailsForm
            travelDetails={travelDetails}
            setTravelDetails={setTravelDetails}
          />
        )}
      </div>
      {travelDetails.length > 0 && (
        <Fab
          variant="extended"
          color="primary"
          onClick={getDestinationFromCriterion}
          sx={{
            mt: 4,
            mb: 2,
            background: "#F79D6F",
          }}
        >
          <AutoAwesome sx={{ mr: 1 }} />
          Valider ma recherche
        </Fab>
      )}
    </div>
  );
};
