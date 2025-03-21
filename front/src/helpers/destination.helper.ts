import { SeasonType } from "@/types/types";
import axios from "axios";

export const getDestinationFromCriterionApiCall =  async(args: {
    isInFrance: boolean,
    travelSeason: SeasonType,
    travelDetails: string[],
  }) => {
    console.log(process.env.NEXT_PUBLIC_BACKEND_URL, ' is the url')
    return await axios({
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/destination/get-destination-from-criterion`,
        method: "post",
        data: {
          ...args
        },
      });
}