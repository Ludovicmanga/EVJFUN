import { Button } from "@mui/material";
import { StaticImageData } from "next/image";
import Image from "next/image";

export default function FormButton(props: {
  text: string;
  alt: string;
  src: StaticImageData;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <Button
      disabled={props.disabled}
      variant="contained"
      startIcon={<Image height={20} alt={props.alt} src={props.src} />}
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
}
