import Link from 'next/link';
import styles from '../styles/index.module.css';
import Navbar from './Navbar';

export default function Home() {
  return (
    <div>
      <Navbar/>
      
      <div className={styles.container}>
      <div>
        <button className={styles.main}><Link href='/get-started'>Start</Link></button>
      </div>
    </div>
    </div>
  );
}


