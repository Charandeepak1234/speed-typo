import Link from 'next/link'
import React from 'react'
import styles from '../styles/navbar.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Navbar = () => {
  return (
    <div>
        <nav className={styles.navbar}>
        <div className={styles.leftCorner}>
          <h1  className={styles.typeLogo} >ProTyping</h1>
        </div>
        <div className={styles.rightCorner}>
          <Link href="/" className={styles.navLink}><i class="bi bi-house-door"></i></Link>
          <Link href="/stats" className={styles.navLink}>Stats</Link>
          <Link href="/login" className={styles.navLink}>Login</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar