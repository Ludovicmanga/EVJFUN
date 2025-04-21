"use client";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { CountryForm } from "../CountryForm/CountryForm";
import { SeasonForm } from "../SeasonForm/SeasonForm";
import { TravelDetailsForm } from "../TravelDetailsForm/TravelDetailsForm";
import { Fab, IconButton } from "@mui/material";
import {
  CriterionsWithMatchingDestinationsType,
  SeasonType,
} from "@/types/types";
import {
  getCriterionWithMatchingDestinationApiCall,
  getDestinationFromCriterionApiCall,
} from "@/src/helpers/destination.helper";
import styles from "./MainForm.module.css";
import { ArrowBack, AutoAwesome } from "@mui/icons-material";
import tinycolor from "tinycolor2";

export const MainForm = (props: {
  setDestinationResult: Dispatch<SetStateAction<string | undefined>>;
  destinationResult: string | undefined;
}) => {
  const [isInFrance, setIsInFrance] = useState<boolean>();
  const [travelSeason, setTravelSeason] = useState<SeasonType>();
  const [travelDetails, setTravelDetails] = useState<string[]>([]);
  const validateMessageDiv = useRef<HTMLDivElement | null>(null);
  const [
    criterionsWithMatchingDestinations,
    setCriterionsWithMatchingDestinations,
  ] = useState<CriterionsWithMatchingDestinationsType>({
    summer: false,
    autumn: false,
    winter: false,
    spring: false,
    hasParty: false,
    hasAccessToSea: false,
    isHistoricPlace: false,
    hasAccessToMountain: false,
    hasAccessToLake: false,
    isWineRegion: false,
  });

  const handleSetCriterionWithMatchingDestination = async () => {
    const res = await getCriterionWithMatchingDestinationApiCall({
      isInFrance,
      travelSeason,
      travelDetails,
    });

    setCriterionsWithMatchingDestinations(res.data);
  };

  const handleBackArrowAction = () => {
    if (travelSeason) {
      setTravelSeason(undefined);
      setTravelDetails([]);
    } else if (isInFrance !== undefined) {
      setIsInFrance(undefined);
      setTravelSeason(undefined);
      setTravelDetails([]);
    }
  };

  useEffect(() => {
    handleSetCriterionWithMatchingDestination();
  }, [isInFrance, travelSeason, travelDetails]);

  useEffect(() => {
    if (travelDetails.length === 2 && validateMessageDiv.current) {
      validateMessageDiv.current.scrollIntoView();
    }
  }, [travelDetails.length]);

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
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.backButtonContainer}>
          <IconButton onClick={handleBackArrowAction}>
            {isInFrance !== undefined && <ArrowBack />}
          </IconButton>
        </div>
        <h1 className={styles.title}>
          {isInFrance === undefined
            ? "Je recherche une destination..."
            : travelSeason === undefined
            ? "Nous partons en..."
            : "Je recherche... (max 2)"}
        </h1>
      </div>
      <div className={styles.buttonsContainer}>
        {isInFrance === undefined ? (
          <CountryForm setIsInFrance={setIsInFrance} />
        ) : travelSeason === undefined ? (
          <SeasonForm
            setTravelSeason={setTravelSeason}
            criterionsWithMatchingDestinations={
              criterionsWithMatchingDestinations
            }
          />
        ) : (
          <TravelDetailsForm
            travelDetails={travelDetails}
            setTravelDetails={setTravelDetails}
            criterionsWithMatchingDestinations={
              criterionsWithMatchingDestinations
            }
          />
        )}
      </div>
      {travelDetails.length > 0 && (
        <div ref={validateMessageDiv}>
          <Fab
            variant="extended"
            color="primary"
            onClick={getDestinationFromCriterion}
            sx={{
              mt: 4,
              mb: 2,
              background: "#F79D6F",
              ":hover": {
                background: tinycolor("#F79D6F").darken(5).toString(),
              },
            }}
          >
            <AutoAwesome sx={{ mr: 1 }} />
            Valider ma recherche
          </Fab>
        </div>
      )}
    </div>
  );
};
