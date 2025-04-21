"use client";
import styles from "./ResultDisplay.module.css";
import cocoHappy from "../../../public/happy_coco.webp";
import Image from "next/image";
import { Divider, Fab, Typography } from "@mui/material";
import searchImg from "../../../public/search.png";
import eyesImg from "../../../public/eyes.png";
import { useEffect, useRef } from "react";
import { goToHomePage } from "@/src/utils/utils";
import tinycolor from "tinycolor2";

export default function ResultDisplay(props: { destinationName: string }) {
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
      <h1 className={styles.mainMessage}>Coco te conseille de partir à...</h1>
      <div className={styles.destinationNameContainer}>
        <div className={styles.destinationName}>{props.destinationName}</div>
      </div>
      <div className={styles.imgContainer}>
        <Image height={400} alt="coco_happy" src={cocoHappy} />
      </div>
      <div className={styles.btnsContainer}>
        <div className={styles.submitBtnContainer}>
          <Fab
            variant="extended"
            size="large"
            sx={{
              background: tinycolor("#F79D6F").darken(5).toString(),
              ":hover": {
                background: tinycolor("#F79D6F").darken(10).toString(),
              },
            }}
            ref={btnRefToDisplayRef}
            onClick={handleGoToGuidePage}
            color="primary"
          >
            <Image
              src={eyesImg}
              alt="Logo"
              height={20}
              style={{
                marginRight: "0.8rem",
              }}
            />
            <Typography
              textTransform={"uppercase"}
              sx={{
                fontWeight: "bold",
              }}
            >
              V
            </Typography>
            <Typography
              textTransform={"lowercase"}
              sx={{
                fontWeight: "bold",
              }}
            >
              oir notre guide
            </Typography>
          </Fab>
        </div>
        <Divider variant="fullWidth">ou</Divider>
        <div className={styles.submitBtnContainer}>
          <Fab
            variant="extended"
            size="large"
            sx={{
              background: tinycolor("#F79D6F").darken(5).toString(),
              ":hover": {
                background: tinycolor("#F79D6F").darken(10).toString(),
              },
            }}
            ref={btnRefToDisplayRef}
            onClick={goToHomePage}
            color="primary"
          >
            <Image
              src={searchImg}
              alt="Logo"
              height={20}
              style={{
                marginRight: "0.8rem",
              }}
            />
            <Typography
              textTransform={"uppercase"}
              sx={{
                fontWeight: "bold",
              }}
            >
              N
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
              }}
              textTransform={"lowercase"}
            >
              ouvelle recherche
            </Typography>
          </Fab>
        </div>
      </div>
    </div>
  );
}
