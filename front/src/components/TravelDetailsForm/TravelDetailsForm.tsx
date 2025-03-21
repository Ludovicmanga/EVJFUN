import FormButton from "../FormButton/FormButton";
import partyIcon from "../../../public/party.png";
import seaIcon from "../../../public/sea.png";
import lakeIcon from "../../../public/lake.png";
import historicIcon from "../../../public/historic.png";
import mountainIcon from "../../../public/mountain.png";
import wineIcon from "../../../public/wine.png";

export const TravelDetailsForm = (props: {
  setTravelDetails: React.Dispatch<React.SetStateAction<string[]>>;
  travelDetails: string[];
}) => {
  const disableIfMaxDetailsCriterionAndElementClicked = (id: string) => {
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

  return (
    <>
      <FormButton
        disabled={disableIfMaxDetailsCriterionAndElementClicked("hasParty")}
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
        disabled={disableIfMaxDetailsCriterionAndElementClicked(
          "isHistoricPlace"
        )}
        isClicked={isClicked("isHistoricPlace")}
        text="Une ville historique à visiter"
        icon={{
          src: historicIcon,
          height: 25,
          alt: "history",
        }}
        onClick={() => addOrRemoveElement("isHistoricPlace")}
      />
      <FormButton
        disabled={disableIfMaxDetailsCriterionAndElementClicked(
          "hasAccessToSea"
        )}
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
        disabled={disableIfMaxDetailsCriterionAndElementClicked(
          "hasAccessToMountain"
        )}
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
        disabled={disableIfMaxDetailsCriterionAndElementClicked(
          "hasAccessToLake"
        )}
        isClicked={isClicked("hasAccessToLake")}
        text="Une proximité avec un lac"
        icon={{
          src: lakeIcon,
          height: 25,
          alt: "lake",
        }}
        onClick={() => addOrRemoveElement("hasAccessToLake")}
      />
      <FormButton
        disabled={disableIfMaxDetailsCriterionAndElementClicked("isWineRegion")}
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
