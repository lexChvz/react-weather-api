import styles from '../components/styles/Components.module.css';

export default function Header() {
  return (
    <>
      <img src='weather.svg' className={styles.headerImg} alt='sun and cloud image' />
      <h1>Weather Forecast API</h1>
    </>
  );
}
