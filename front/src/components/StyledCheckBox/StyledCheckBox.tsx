import styles from "./StyledCheckBox.module.css";

export const StyledCheckbox = () => {
  return (
    <label className={styles.container}>
      <input type="checkbox" />
      <svg viewBox="0 0 64 64" height="2em" width="2em">
        <path
          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
          pathLength="575.0541381835938"
          className={styles.path}
        ></path>
      </svg>
    </label>
  );
};
