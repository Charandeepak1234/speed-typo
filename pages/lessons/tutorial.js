import Link from "next/link";
import styles from "/styles/typing.module.css"; // Import the CSS Module
import 'bootstrap-icons/font/bootstrap-icons.css';


const Typing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleCard}>
        <h1>ProTyping</h1>
        <div>
          <Link href='../'><p><i class="bi bi-house-door"></i></p></Link>
          <Link href='/get-started'><p>Get-Started</p></Link>
        </div>
      </div>
      <ul className={styles.lessonList}>
        <li className={styles.container1}>
          <Link href="/lessons/tutorial/tutorial1">
            <div>
              <button className={styles.buttonElement}>Lesson 1</button>
            </div>
          </Link>
        </li>
        <li className={styles.container2}>
          <Link href="/lessons/tutorial/tutorial2">
            <div>
              <button className={styles.buttonElement}>Lesson 2</button>
            </div>
          </Link>
        </li>
        <li className={styles.container3}>
          <Link href="/lessons/tutorial/tutorial3">
            <div>
              <button className={styles.buttonElement}>Lesson 3</button>
            </div>
          </Link>
        </li>
        <li className={styles.container4}>
          <Link href="/lessons/tutorial/tutorial4">
            <div>
              <button className={styles.buttonElement}>Lesson 4</button>
            </div>
          </Link>
        </li>
        <li className={styles.container5}>
          <Link href="/lessons/tutorial/tutorial5">
            <div>
              <button className={styles.buttonElement}>Lesson 5</button>
            </div>
          </Link>
        </li>
        <li className={styles.container6}>
          <Link href="/lessons/tutorial/tutorial6">
            <div>
              <button className={styles.buttonElement}>Lesson 6</button>
            </div>
          </Link>
        </li>
        <li className={styles.container1}>
          <Link href="/lessons/tutorial/tutorial7">
            <div>
              <button className={styles.buttonElement}>Lesson 7</button>
            </div>
          </Link>
        </li>
        <li className={styles.container1}>
          <Link href="/lessons/tutorial/tutorial8">
            <div>
              <button className={styles.buttonElement}>Lesson 8</button>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Typing;
