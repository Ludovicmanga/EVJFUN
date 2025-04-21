import FormButton from "../FormButton/FormButton";
import partyIcon from "../../../public/party.png";
import seaIcon from "../../../public/sea.png";
import lakeIcon from "../../../public/lake.png";
import historicIcon from "../../../public/historic.png";
import mountainIcon from "../../../public/mountain.png";
import wineIcon from "../../../public/wine.png";
import { CriterionsWithMatchingDestinationsType } from "@/types/types";

export const TravelDetailsForm = (props: {
  setTravelDetails: React.Dispatch<React.SetStateAction<string[]>>;
  travelDetails: string[];
  criterionsWithMatchingDestinations: CriterionsWithMatchingDestinationsType;
}) => {
  const maxDetailsCriterionAndElementClicked = (id: string) => {
    return props.travelDetails.length > 1 && !props.travelDetails.includes(id);
  };

  const addOrRemoveElement = (id: string) => {
    if (props.travelDetails.includes(id)) {
      props.setTravelDetails((curr) => curr.filter((el) => el !== id));
    } else {
      props.setTravelDetails((curr) => curr.concat(id));
    }
  };

  const isClicked = (id: string) => props.travelDetails.includes(id);

  const btnIsDisabled = (
    id: keyof CriterionsWithMatchingDestinationsType
  ): boolean => {
    return (
      props.criterionsWithMatchingDestinations[id] === false ||
      maxDetailsCriterionAndElementClicked(id)
    );
  };

  return (
    <>
      <FormButton
        id="hasParty"
        disabled={btnIsDisabled("hasParty")}
        isClicked={isClicked("hasParty")}
        text="Une ville où faire la fête"
        icon={{
          src: partyIcon,
          height: 25,
          alt: "party",
        }}
        onClick={() => addOrRemoveElement("hasParty")}
      />
      <FormButton
        id="isHistoricPlace"
        text="Une ville historique à visiter"
        onClick={() => addOrRemoveElement("isHistoricPlace")}
        icon={{
          src: historicIcon,
          height: 25,
          alt: "history",
        }}
        disabled={btnIsDisabled("isHistoricPlace")}
        isClicked={isClicked("isHistoricPlace")}
      />
      <FormButton
        id="hasAccessToSea"
        disabled={btnIsDisabled("hasAccessToSea")}
        isClicked={isClicked("hasAccessToSea")}
        text="Une proximité avec la mer"
        icon={{
          src: seaIcon,
          height: 25,
          alt: "sea",
        }}
        onClick={() => addOrRemoveElement("hasAccessToSea")}
      />
      <FormButton
        id="hasAccessToMountain"
        disabled={btnIsDisabled("hasAccessToMountain")}
        isClicked={isClicked("hasAccessToMountain")}
        text="Un lieu près de la montagne"
        icon={{
          src: mountainIcon,
          height: 25,
          alt: "mountain",
        }}
        onClick={() => addOrRemoveElement("hasAccessToMountain")}
      />
      <FormButton
        id="hasAccessToLake"
        text="Une proximité avec un lac"
        icon={{
          src: lakeIcon,
          height: 25,
          alt: "lake",
        }}
        onClick={() => addOrRemoveElement("hasAccessToLake")}
        disabled={btnIsDisabled("hasAccessToLake")}
        isClicked={isClicked("hasAccessToLake")}
      />
      <FormButton
        id="isWineRegion"
        disabled={btnIsDisabled("isWineRegion")}
        isClicked={isClicked("isWineRegion")}
        text="Une région viticole"
        icon={{
          src: wineIcon,
          height: 25,
          alt: "wine",
        }}
        onClick={() => addOrRemoveElement("isWineRegion")}
      />
    </>
  );
};
