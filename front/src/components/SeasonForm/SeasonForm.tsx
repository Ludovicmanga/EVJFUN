import FormButton from "../FormButton/FormButton";
import summerIcon from "../../../public/summer.png";
import autumnIcon from "../../../public/autumn.png";
import springIcon from "../../../public/spring.png";
import winterIcon from "../../../public/winter.png";
import yogaIcon from "../../../public/yoga.png";
import {
  CriterionsWithMatchingDestinationsType,
  SeasonType,
} from "@/types/types";

export const SeasonForm = (props: {
  setTravelSeason: React.Dispatch<React.SetStateAction<SeasonType | undefined>>;
  criterionsWithMatchingDestinations: CriterionsWithMatchingDestinationsType;
  btnsAreLoading: boolean;
}) => {
  const btnIsDisabled = (
    id: keyof CriterionsWithMatchingDestinationsType
  ): boolean => {
    return props.criterionsWithMatchingDestinations[id] === false;
  };
  return (
    <>
      <FormButton
        id="summer"
        loading={props.btnsAreLoading}
        disabled={btnIsDisabled("summer")}
        onClick={() => props.setTravelSeason("summer")}
        text="Été"
        icon={{
          src: summerIcon,
          height: 30,
          alt: "summer",
        }}
      />
      <FormButton
        id="autumn"
        loading={props.btnsAreLoading}
        disabled={btnIsDisabled("summer")}
        onClick={() => props.setTravelSeason("autumn")}
        text="Automne"
        icon={{
          src: autumnIcon,
          height: 30,
          alt: "autumn",
        }}
      />
      <FormButton
        id="winter"
        loading={props.btnsAreLoading}
        disabled={btnIsDisabled("summer")}
        onClick={() => props.setTravelSeason("winter")}
        text="Hiver"
        icon={{
          src: winterIcon,
          height: 30,
          alt: "winter",
        }}
      />
      <FormButton
        id="spring"
        loading={props.btnsAreLoading}
        disabled={btnIsDisabled("summer")}
        onClick={() => props.setTravelSeason("spring")}
        text="Printemps"
        icon={{
          src: springIcon,
          height: 30,
          alt: "spring",
        }}
      />
      <FormButton
        id="flex"
        loading={props.btnsAreLoading}
        onClick={() => props.setTravelSeason("flex")}
        text="On est flex"
        icon={{
          src: yogaIcon,
          height: 30,
          alt: "flex",
        }}
      />
    </>
  );
};
