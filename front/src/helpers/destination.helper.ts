import { CriterionsWithMatchingDestinationsType, SeasonType } from "@/types/types";
import axios from "axios";

export const getDestinationFromCriterionApiCall =  async(args: {
    isInFrance: boolean,
    travelSeason: SeasonType,
    travelDetails: string[],
  }) => {
    return await axios({
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/destination/get-destination-from-criterion`,
        method: "post",
        data: {
          ...args
        },
      });
}

export const getCriterionWithMatchingDestinationApiCall = async(args: {
    isInFrance: boolean | undefined,
    travelSeason: SeasonType | undefined,
    travelDetails: string[],
  }) => {
    return await axios<CriterionsWithMatchingDestinationsType>({
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/destination/get-criteron-with-matching-destination`,
        method: "post",
        data: {
          ...args
        },
      });
}

export const isButtonToDisable = (
    id: keyof CriterionsWithMatchingDestinationsType,
    criterionsWithMatchingDestinations: CriterionsWithMatchingDestinationsType | undefined
  ): boolean => {
    if (
      criterionsWithMatchingDestinations &&
      criterionsWithMatchingDestinations[id]
    ) {
      console.log(`The button ${id} is not disabled because ${id} is true`);
      return false;
    }
    console.log(
      `The button ${id} is disabled because ${id} is false or undefined`
    );
    return true;
  };