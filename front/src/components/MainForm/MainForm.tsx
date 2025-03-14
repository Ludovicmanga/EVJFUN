"use client";
import { useState } from "react";
import { CountryForm } from "../CountryForm/CountryForm";
import { SeasonForm } from "../SeasonForm/SeasonForm";
import { TravelDetailsForm } from "../TravelDetailsForm/TravelDetailsForm";
import { Button } from "@mui/material";
import axios from "axios";

export const MainForm = () => {
  const [isInFrance, setIsInFrance] = useState<boolean>();
  const [travelSeason, setTravelSeason] = useState<
    "spring" | "summer" | "autumn" | "winter" | "flex"
  >();
  const [travelDetails, setTravelDetails] = useState<string[]>([]);

  const [destinationResult, setDestinationResult] = useState();

  const getDestinationFromCriterion = async () => {
    const res = await axios({
      url: "http://localhost:8080/destination/get-destination-from-criterion",
      method: "post",
      data: {
        is_in_france: isInFrance,
        season: travelSeason,
        travelDetails,
      },
    });

    if (res.data) {
      console.log(res.data, " is the data ??");
      setDestinationResult(res.data);
    }
  };

  return (
    <>
      {destinationResult && destinationResult !== "NO_DESTINATION_FOUND" ? (
        <div>{destinationResult} est la déstination qu'on te propose !</div>
      ) : destinationResult === "NO_DESTINATION_FOUND" ? (
        <div>
          Nous n'avons pas trouvé de destination pour ta recherche, essaye
          encore !
        </div>
      ) : (
        <div>
          <h1>
            {isInFrance === undefined
              ? "Je recherche une destination..."
              : travelSeason === undefined
              ? "Nous partons en..."
              : "Je recherche..."}
          </h1>
          <div>
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
            <Button onClick={getDestinationFromCriterion} variant="contained">
              Valider
            </Button>
          )}
        </div>
      )}
    </>
  );
};
