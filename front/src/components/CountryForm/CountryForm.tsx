import FormButton from "../FormButton/FormButton";
import frenchFlag from "../../../public/french_flag.png";
import { Dispatch, SetStateAction } from "react";

export const CountryForm = (props: {
  setIsInFrance: Dispatch<SetStateAction<boolean | undefined>>;
}) => {
  return (
    <>
      <FormButton
        onClick={() => props.setIsInFrance(true)}
        text="En France"
        alt="french-flag"
        src={frenchFlag}
      />
      <FormButton
        onClick={() => props.setIsInFrance(false)}
        text="A l'étranger"
        alt="map-image"
        src={frenchFlag}
      />
    </>
  );
};
