import FormButton from "../FormButton/FormButton";
import frenchFlag from "../../../public/french_flag.png";

export const SeasonForm = (props: {
  setTravelSeason: React.Dispatch<
    React.SetStateAction<
      "spring" | "summer" | "autumn" | "winter" | "flex" | undefined
    >
  >;
}) => {
  return (
    <>
      <FormButton
        onClick={() => props.setTravelSeason("summer")}
        text="Été"
        alt="summer"
        src={frenchFlag}
      />
      <FormButton
        onClick={() => props.setTravelSeason("autumn")}
        text="Automne"
        alt="autumn"
        src={frenchFlag}
      />
      <FormButton
        onClick={() => props.setTravelSeason("winter")}
        text="Hiver"
        alt="winter"
        src={frenchFlag}
      />
      <FormButton
        onClick={() => props.setTravelSeason("spring")}
        text="Printemps"
        alt="spring"
        src={frenchFlag}
      />
    </>
  );
};
