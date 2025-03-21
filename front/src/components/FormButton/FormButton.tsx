import { Button } from "@mui/material";
import { StaticImageData } from "next/image";
import Image from "next/image";

export default function FormButton(props: {
  text: string;
  icon: {
    alt: string;
    src: StaticImageData;
    height: number;
  };
  disabled?: boolean;
  onClick: () => void;
  isClicked?: boolean;
}) {
  return (
    <Button
      disabled={props.disabled}
      variant="contained"
      onClick={props.onClick}
      fullWidth
      startIcon={
        <Image
          src={props.icon.src}
          alt={props.icon.alt}
          height={props.icon.height}
        ></Image>
      }
      sx={{
        marginBottom: "0.5rem",
        backgroundColor: props.isClicked ? "#fcb900" : "#fedf00",
        color: "#743eae",
        transform: props.isClicked ? "scale(0.95)" : "scale(1)",
        transition: "all 0.2s ease-in-out",
        boxShadow: props.isClicked
          ? "0px 4px 10px rgba(0, 0, 0, 0.2)"
          : "0px 2px 5px rgba(0, 0, 0, 0.1)",
        display: "flex",
        justifyContent: "start",
        height: "3rem",
      }}
    >
      <div
        style={{
          marginLeft: "1rem",
        }}
      >
        {props.text}
      </div>
    </Button>
  );
}
