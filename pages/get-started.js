import Image from "next/image";
import Link from "next/link";
import styles from "../styles/getstarted.module.css"; // Importing CSS file
import typingimage from "@/public/codingLesson.png"
import codingimage from "@/public/typingLesson.png"
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className={styles.container}>
      {/* Navbar */}
      {/* Header */}
      <div className={styles.header}>
        <h2>Get Started With Pro Typing</h2>
        <p>Choose a lesson to begin</p>
      </div>

      {/* Lesson Cards */}
      <div className={styles.cardsContainer}>
       
        {/* Coding Lessons */}
        <div className={styles.card}>
          <Image
            src={codingimage}
            alt="Coding Lessons"
            width={150}
            height={150}
          />
          <div  className={styles.codingBtn}>
          <Link href="./lessons/tutorial">Typing Tutorials</Link>
          <p>for beginners</p>
          </div>
          
        </div>

         {/* Typing Lessons */}
         <div className={styles.card}>
          <Image
            src={typingimage}
            alt="Typing Lessons"
            width={150}
            height={150}
          />
          <Link href="./lessons/typing"><button className={styles.typingBtn}>Typing Lessons</button></Link>
        </div>
      </div>
    </div>
    </>
  );
}

          