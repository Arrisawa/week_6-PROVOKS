import styles from "./Salam.module.css";

export function SalamPagi() {
  return (
    <section className={styles.kotak}>
      <h2 className={styles.judul}>Halo, Selamat Pagi React!</h2>
      <p>Ini komponen TypeScript pertamaku.</p>
    </section>
  );
}
