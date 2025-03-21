"use client";
import styles from "./ResultDisplay.module.css";
import cocoHappy from "../../../public/happy_coco.webp";
import cocoSad from "../../../public/sad_coco.webp";
import Image from "next/image";
import { Button } from "@mui/material";
import cocoImg from "../../../public/coco.png";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";
import { goToHomePage } from "@/src/utils/utils";

export default function ResultDisplay(props: { destinationName: string }) {
  const aDestinationWasFound = props.destinationName !== "NO_DESTINATION_FOUND";
  const router = useRouter();

  const handleGoToGuidePage = () => {
    window.open(
      "https://www.notion.so/City-Guide-EVJF-VILLE-1b943a7977d780d0aaf4c792d29e918f",
      "_blank"
    );
  };

  return (
    <div>
      <h1 className={styles.mainMessage}>
        {aDestinationWasFound
          ? "Coco te conseille de partir à..."
          : "Aucune destination avec ces critères..."}
      </h1>
      {aDestinationWasFound && (
        <div className={styles.destinationNameContainer}>
          <div className={styles.destinationName}>{props.destinationName}</div>
        </div>
      )}
      <div className={styles.imgContainer}>
        <Image
          height={400}
          alt="coco_happy"
          src={aDestinationWasFound ? cocoHappy : cocoSad}
        />
      </div>
      <div className={styles.submitBtnContainer}>
        <Button
          onClick={aDestinationWasFound ? handleGoToGuidePage : goToHomePage}
          startIcon={<Image alt="test" src={cocoImg} height={60}></Image>}
          variant="contained"
          sx={{
            background: "#DE8D63",
          }}
        >
          {aDestinationWasFound
            ? `Voir notre guide pour ${props.destinationName}`
            : "Faire une nouvelle recherche"}
        </Button>
      </div>
    </div>
  );
}
