import Link from "next/link";
import styles from "/styles/typing.module.css"; // Import the CSS Module
import 'bootstrap-icons/font/bootstrap-icons.css';
import lesson1 from "@/public/lesson1img.png"
import lesson2 from "@/public/lesson2img.png"
import lesson3 from "@/public/lesson3img.png"
import lesson4 from "@/public/lesson4img.png"
import lesson5 from "@/public/lesson5img.png"
import lesson6 from "@/public/lesson6img.png"
import Image from "next/image";


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
          <Link href="/lessons/typing/lesson1">
            <div>
               <Image
                         src={lesson1}
                          alt="Coding Lessons"
                          width={200}
                          height={200}
                        />
              <button className={styles.buttonElement}>Lesson 1</button>
            </div>
          </Link>
        </li>
        <li className={styles.container2}>
          <Link href="/lessons/typing/lesson2">
            <div>
              <Image
                         src={lesson2}
                          alt="Coding Lessons"
                          width={200}
                          height={200}
                        />
              <button className={styles.buttonElement}>Lesson 2</button>
            </div>
          </Link>
        </li>
        <li className={styles.container3}>
          <Link href="/lessons/typing/lesson3">
            <div>
              <Image
                         src={lesson3}
                          alt="Coding Lessons"
                          width={200}
                          height={200}
                        />
              <button className={styles.buttonElement}>Lesson 3</button>
            </div>
          </Link>
        </li>
        <li className={styles.container4}>
          <Link href="/lessons/typing/lesson4">
            <div>
              <Image
                         src={lesson4}
                          alt="Coding Lessons"
                          width={200}
                          height={200}
                        />
              <button className={styles.buttonElement}>Lesson 4</button>
            </div>
          </Link>
        </li>
        <li className={styles.container5}>
          <Link href="/lessons/typing/lesson5">
            <div>
              <Image
                         src={lesson5}
                          alt="Coding Lessons"
                          width={200}
                          height={200}
                        />
              <button className={styles.buttonElement}>Lesson 5</button>
            </div>
          </Link>
        </li>
        <li className={styles.container6}>
          <Link href="/lessons/typing/lesson6">
            <div>
              <Image
                         src={lesson6}
                          alt="Coding Lessons"
                          width={200}
                          height={200}
                        />
              <button className={styles.buttonElement}>Lesson 6</button>
            </div>
          </Link>
        </li>
        <li className={styles.container1}>
          <Link href="/lessons/typing/lesson7">
            <div>
              <Image
                         src={lesson1}
                          alt="Coding Lessons"
                          width={200}
                          height={200}
                        />
              <button className={styles.buttonElement}>Lesson 7</button>
            </div>
          </Link>
        </li>
        <li className={styles.container1}>
          <Link href="/lessons/typing/lesson8">
            <div>
              <Image
                         src={lesson1}
                          alt="Coding Lessons"
                          width={200}
                          height={200}
                        />
              <button className={styles.buttonElement}>Lesson 8</button>
            </div>
          </Link>
        </li>
        <li className={styles.container1}>
          <Link href="/lessons/typing/lesson9">
            <div>
              <Image
                         src={lesson1}
                          alt="Coding Lessons"
                          width={200}
                          height={200}
                        />
              <button className={styles.buttonElement}>Lesson 9</button>
            </div>
          </Link>
        </li>
        <li className={styles.container1}>
          <Link href="/lessons/typing/lesson10">
            <div>
              <Image
                         src={lesson1}
                          alt="Coding Lessons"
                          width={200}
                          height={200}
                        />
              <button className={styles.buttonElement}>Lesson 10</button>
            </div>
          </Link>
        </li>
        <li className={styles.container1}>
          <Link href="/lessons/typing/lesson11">
            <div>
              <Image
                         src={lesson1}
                          alt="Coding Lessons"
                          width={200}
                          height={200}
                        />
              <button className={styles.buttonElement}>Lesson 11</button>
            </div>
          </Link>
        </li>
        <li className={styles.container1}>
          <Link href="/lessons/typing/lesson12">
            <div>
              <Image
                         src={lesson1}
                          alt="Coding Lessons"
                          width={200}
                          height={200}
                        />
              <button className={styles.buttonElement}>Lesson 12</button>
            </div>
          </Link>
        </li>
        <li className={styles.container1}>
          <Link href="/lessons/typing/lesson13">
            <div>
              <Image
                         src={lesson1}
                          alt="Coding Lessons"
                          width={200}
                          height={200}
                        />
              <button className={styles.buttonElement}>Lesson 13</button>
            </div>
          </Link>
        </li>
        <li className={styles.container1}>
          <Link href="/lessons/typing/lesson14">
            <div>
              <Image
                         src={lesson1}
                          alt="Coding Lessons"
                          width={200}
                          height={200}
                        />
              <button className={styles.buttonElement}>Lesson 14</button>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Typing;
