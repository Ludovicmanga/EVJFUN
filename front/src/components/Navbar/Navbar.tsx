"use client";
import { goToHomePage, goToToolboxPage } from "@/src/utils/utils";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.navLinks}>
          <div className={styles.navLink} onClick={goToHomePage}>
            Générateur de destinations
          </div>
          <div className={styles.navLink} onClick={goToToolboxPage}>
            Boîte à outils
          </div>
          <div className={styles.navLink} onClick={goToHomePage}>
            Qui sommes-nous ?
          </div>
        </div>
      </nav>
    </header>
  );
}
