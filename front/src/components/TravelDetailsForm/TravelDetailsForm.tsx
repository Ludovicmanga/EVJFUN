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
        disabled={disableIfMaxDetailsCriterionAndElementClicked("has_party")}
        text="Une ville où faire la fête"
        alt="party"
        src={frenchFlag}
        onClick={() => addOrRemoveElement("has_party")}
      />
      <FormButton
        disabled={disableIfMaxDetailsCriterionAndElementClicked(
          "is_historic_place"
        )}
        text="Une ville historique à visiter"
        alt="monument"
        src={frenchFlag}
        onClick={() => addOrRemoveElement("is_historic_place")}
      />
      <FormButton
        disabled={disableIfMaxDetailsCriterionAndElementClicked(
          "has_access_to_sea"
        )}
        text="Une proximité avec la mer"
        alt="sea"
        src={frenchFlag}
        onClick={() => addOrRemoveElement("has_access_to_sea")}
      />
      <FormButton
        disabled={disableIfMaxDetailsCriterionAndElementClicked(
          "has_access_to_mountain"
        )}
        text="Un lieu près de la montagne"
        alt="mountain"
        src={frenchFlag}
        onClick={() => addOrRemoveElement("has_access_to_mountain")}
      />
      <FormButton
        disabled={disableIfMaxDetailsCriterionAndElementClicked(
          "has_access_to_lake"
        )}
        text="Une proximité avec un lac"
        alt="fish"
        src={frenchFlag}
        onClick={() => addOrRemoveElement("has_access_to_lake")}
      />
      <FormButton
        disabled={disableIfMaxDetailsCriterionAndElementClicked(
          "is_wine_region"
        )}
        text="Une région viticole"
        alt="wine-glass"
        src={frenchFlag}
        onClick={() => addOrRemoveElement("is_wine_region")}
      />
    </>
  );
};
