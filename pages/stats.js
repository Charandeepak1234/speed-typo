import styles from '../styles/Home.module.css';
import Navbar from './Navbar';

export default function Stats() {
  return (
    <div>
      <Navbar/>
      <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Your Typing Stats</h1>
        <p className={styles.description}>Track your progress and improve your typing skills.</p>
      </main>
    </div>
    </div>
  );
}