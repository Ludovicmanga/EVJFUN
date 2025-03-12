import FormButton from "../FormButton/FormButton";
import frenchFlag from "../../../public/frenchFlag.png";
import mapImage from "../../../public/map.png";

export const TravelDetailsForm = (props: {
  setTravelDetails: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  return (
    <>
      <FormButton
        text="Une ville où faire la fête"
        alt="party"
        src={frenchFlag}
        onClick={() => props.setTravelDetails((curr) => curr.concat("party"))}
      />
      <FormButton
        text="Une ville historique à visiter"
        alt="monument"
        src={mapImage}
        onClick={() => props.setTravelDetails((curr) => curr.concat("history"))}
      />
      <FormButton
        text="Une proximité avec la mer"
        alt="sea"
        src={mapImage}
        onClick={() => props.setTravelDetails((curr) => curr.concat("sea"))}
      />
      <FormButton
        text="Un lieu près de la montagne"
        alt="mountain"
        src={mapImage}
        onClick={() =>
          props.setTravelDetails((curr) => curr.concat("mountain"))
        }
      />
      <FormButton
        text="Une proximité avec un lac"
        alt="fish"
        src={mapImage}
        onClick={() => props.setTravelDetails((curr) => curr.concat("lake"))}
      />
      <FormButton
        text="Une région viticole"
        alt="wine-glass"
        src={mapImage}
        onClick={() => props.setTravelDetails((curr) => curr.concat("wine"))}
      />
    </>
  );
};
