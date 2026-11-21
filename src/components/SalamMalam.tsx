import styles from "./Salam.module.css";

export function SalamMalam() {
  return (
    <section className={styles.kotak}>
      <h3 className={styles.judul}>Halo, Selamat Malam React!</h3>
      <p>Ini komponen TypeScript pertamaku.</p>
    </section>
  );
}
