import Image from "next/image";
import leafImg from "../../../public/leaf.png";
import styles from "./EcologicalInfo.module.css";

export default function EcologicalInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <Image src={leafImg} alt="Logo" height={26} />
      </div>
      <div className={styles.text}>
        EVJFUN ne propose que des destinations en train depuis la France
      </div>
    </div>
  );
}
