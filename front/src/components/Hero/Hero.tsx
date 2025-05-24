import styles from "./Hero.module.css";

export default function Hero(props: { title: string; subtitle: string }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.subtitle}>{props.subtitle}</p>
    </div>
  );
}
