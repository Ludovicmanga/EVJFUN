import FormButton from "../FormButton/FormButton";
import frenchFlag from "../../../public/frenchFlag.png";
import mapImage from "../../../public/map.png";

export const CountryForm = (props: {
  setTravelCountry: React.Dispatch<
    React.SetStateAction<"france" | "abroad" | undefined>
  >;
}) => {
  return (
    <>
      <FormButton
        onClick={() => props.setTravelCountry("france")}
        text="En France"
        alt="french-flag"
        src={frenchFlag}
      />
      <FormButton
        onClick={() => props.setTravelCountry("abroad")}
        text="A l'étranger"
        alt="map-image"
        src={mapImage}
      />
    </>
  );
};
