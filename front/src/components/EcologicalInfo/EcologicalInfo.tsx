import Image from "next/image";
import leafImg from "../../../public/leaf.png";
import styles from "./EcologicalInfo.module.css";

export default function EcologicalInfo() {
  return (
    <div className={styles.floating}>
      <Image src={leafImg} alt="Feuille verte" height={14} />
      <span className={styles.text}>
        EVJFUN ne propose que des destinations accessibles en train 🚆
      </span>
    </div>
  );
}
