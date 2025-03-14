import FormButton from "../FormButton/FormButton";
import frenchFlag from "../../../public/french_flag.png";

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

  return (
    <>
      <FormButton
        disabled={disableIfMaxDetailsCriterionAndElementClicked("hasParty")}
        text="Une ville où faire la fête"
        alt="party"
        src={frenchFlag}
        onClick={() => addOrRemoveElement("hasParty")}
      />
      <FormButton
        disabled={disableIfMaxDetailsCriterionAndElementClicked(
          "isHistoricPlace"
        )}
        text="Une ville historique à visiter"
        alt="monument"
        src={frenchFlag}
        onClick={() => addOrRemoveElement("isHistoricPlace")}
      />
      <FormButton
        disabled={disableIfMaxDetailsCriterionAndElementClicked(
          "hasAccessToSea"
        )}
        text="Une proximité avec la mer"
        alt="sea"
        src={frenchFlag}
        onClick={() => addOrRemoveElement("hasAccessToSea")}
      />
      <FormButton
        disabled={disableIfMaxDetailsCriterionAndElementClicked(
          "hasAccessToMountain"
        )}
        text="Un lieu près de la montagne"
        alt="mountain"
        src={frenchFlag}
        onClick={() => addOrRemoveElement("hasAccessToMountain")}
      />
      <FormButton
        disabled={disableIfMaxDetailsCriterionAndElementClicked(
          "hasAccessToLake"
        )}
        text="Une proximité avec un lac"
        alt="fish"
        src={frenchFlag}
        onClick={() => addOrRemoveElement("hasAccessToLake")}
      />
      <FormButton
        disabled={disableIfMaxDetailsCriterionAndElementClicked("isWineRegion")}
        text="Une région viticole"
        alt="wine-glass"
        src={frenchFlag}
        onClick={() => addOrRemoveElement("isWineRegion")}
      />
    </>
  );
};
