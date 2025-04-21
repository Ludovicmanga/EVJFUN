import FormButton from "../FormButton/FormButton";
import frenchFlag from "../../../public/french_flag.png";
import abroadIcon from "../../../public/airplane.png";
import { Dispatch, SetStateAction } from "react";

export const CountryForm = (props: {
  setIsInFrance: Dispatch<SetStateAction<boolean | undefined>>;
  btnsAreLoading: boolean;
}) => {
  return (
    <>
      <FormButton
        loading={props.btnsAreLoading}
        id="isInFrance"
        onClick={() => props.setIsInFrance(true)}
        text="En France"
        icon={{
          src: frenchFlag,
          height: 20,
          alt: "french-flag",
        }}
      />
      <FormButton
        loading={props.btnsAreLoading}
        id="isInFrance"
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
