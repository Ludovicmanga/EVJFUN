import FormButton from "../FormButton/FormButton";
import frenchFlag from "../../../public/french_flag.png";
import abroadIcon from "../../../public/airplane.png";
import { Dispatch, SetStateAction } from "react";

export const CountryForm = (props: {
  setIsInFrance: Dispatch<SetStateAction<boolean | undefined>>;
}) => {
  return (
    <>
      <FormButton
        onClick={() => props.setIsInFrance(true)}
        text="En France"
        icon={{
          src: frenchFlag,
          height: 20,
          alt: "french-flag",
        }}
      />
      <FormButton
        onClick={() => props.setIsInFrance(false)}
        text="A l'étranger"
        icon={{
          src: abroadIcon,
          height: 30,
          alt: "abroad",
        }}
      />
    </>
  );
};
