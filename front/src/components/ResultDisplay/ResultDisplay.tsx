"use client";
import styles from "./ResultDisplay.module.css";
import cocoHappy from "../../../public/happy_coco.webp";
import cocoSad from "../../../public/sad_coco.webp";
import Image from "next/image";
import { Button, Divider } from "@mui/material";
import cocoImg from "../../../public/coco.png";
import eyesImg from "../../../public/eyes.png";
import refreshImg from "../../../public/refresh.png";
import { useRouter } from "next/navigation";
import { MouseEvent, useEffect, useRef } from "react";
import { goToHomePage } from "@/src/utils/utils";

export default function ResultDisplay(props: { destinationName: string }) {
  const aDestinationWasFound = props.destinationName !== "NO_DESTINATION_FOUND";
  const btnRefToDisplayRef = useRef<HTMLButtonElement | null>(null);

  const handleScrollToBottom = () => {
    if (btnRefToDisplayRef.current) {
      btnRefToDisplayRef.current.scrollIntoView();
    }
  };

  useEffect(() => {
    handleScrollToBottom();
  }, [btnRefToDisplayRef.current]);

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
          startIcon={<Image alt="test" src={eyesImg} height={30}></Image>}
          variant="contained"
          sx={{
            background: "#DE8D63",
          }}
          ref={btnRefToDisplayRef}
        >
          {aDestinationWasFound
            ? `Voir notre guide pour cette ville`
            : "Faire une nouvelle recherche"}
        </Button>
      </div>
      <Divider variant="fullWidth">ou</Divider>

      <div className={styles.submitBtnContainer}>
        <Button
          onClick={goToHomePage}
          startIcon={<Image alt="test" src={refreshImg} height={30}></Image>}
          variant="contained"
          sx={{
            background: "#DE8D63",
          }}
          ref={btnRefToDisplayRef}
        >
          Faire une nouvelle recherche
        </Button>
      </div>
    </div>
  );
}
