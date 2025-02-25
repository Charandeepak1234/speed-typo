"use client";

import { useState, useEffect } from "react";
import styles from "../../../styles/turtor2.module.css";

const LEVELS = {
  easy: "ASDF JKL; ASDF JKL; ASDF JKL;",
  medium: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.",
  hard: "PRACTICING TOUCH TYPING CAN SIGNIFICANTLY IMPROVE SPEED AND ACCURACY."
};

export default function TypingTutor() {
  const [level, setLevel] = useState("easy");
  const [targetText, setTargetText] = useState(LEVELS.easy);
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [errors, setErrors] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    let timer;
    if (startTime && !isPaused && !showResult) { // Stop timer when showResult is true
      timer = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [startTime, isPaused, showResult]);

  useEffect(() => {
    setTargetText(LEVELS[level]);
    setUserInput("");
  }, [level]);

  useEffect(() => {
    if (userInput.length === 0) {
      setWpm(0);
      setAccuracy(100);
      setErrors(0);
    } else {
      if (!startTime) setStartTime(Date.now());

      const elapsedMinutes = elapsedTime / 60;
      const calculatedWpm = elapsedMinutes > 0 ? (userInput.length / 5) / elapsedMinutes : 0;
      setWpm(Math.round(calculatedWpm));

      const correctChars = userInput.split("").filter((char, i) => char === targetText[i]).length;
      const incorrectChars = userInput.length - correctChars;
      setErrors(incorrectChars);
      const calculatedAccuracy = (correctChars / userInput.length) * 100;
      setAccuracy(Math.round(calculatedAccuracy));
    }

    if (userInput.length === targetText.length) {
      setTimeout(() => {
        if (level === "easy") setLevel("medium");
        else if (level === "medium") setLevel("hard");
        else {
          setShowResult(true); // Show result page
        }
      }, 1000);
    }
  }, [userInput]);

  const handleChange = (e) => {
    setUserInput(e.target.value.toUpperCase());
  };

  const restartGame = () => {
    setLevel("easy");
    setElapsedTime(0);
    setShowResult(false);
    setUserInput("");
    setStartTime(null);
  };

  if (showResult) {
    return (
      <div className={styles.resultPage}>
        <h1>Typing Completed!</h1>
        <p>Total Time: {elapsedTime}s</p>
        <p>WPM: {wpm}</p>
        <p>Accuracy: {accuracy}%</p>
        <p>Errors: {errors}</p>
        <button onClick={restartGame} className={styles.button}>Restart</button>
        <button onClick={restartGame} className={styles.button}>Home</button> {/* Home button */}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Typing Tutor</h1>
      <p className={styles.level}>Level: {level.toUpperCase()}</p>
      <p>Elapsed Time: {elapsedTime}s</p>
      
      <div className={styles.textContainer}>
        {targetText.split("").map((char, index) => {
          let colorClass = styles.gray;
          if (userInput[index]) {
            colorClass = userInput[index] === char ? styles.correct : styles.incorrect;
          }
          return <span key={index} className={colorClass}>{char}</span>;
        })}
      </div>

      <input
        type="text"
        value={userInput}
        onChange={handleChange}
        className={styles.inputField}
        autoFocus
        disabled={isPaused}
      />

      <div className={styles.stats}>
        <p>WPM: <strong>{wpm}</strong></p>
        <p>Accuracy: <strong>{accuracy}%</strong></p>
        <p>Errors: <strong>{errors}</strong></p>
      </div>

      <div className={styles.buttonContainer}>
        {isPaused ? (
          <button onClick={() => setIsPaused(false)} className={styles.button}>Start</button>
        ) : (
          <button onClick={() => setIsPaused(true)} className={styles.button}>Stop</button>
        )}
      </div>
    </div>
  );
}
