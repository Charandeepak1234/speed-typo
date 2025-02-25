"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from '../../../styles/newlesson2.module.css';

const paragraphs = [
  "The quick brown fox jumps over the lazy dog.",
  "Typing speed tests help improve accuracy and speed.",
  "Practice makes a person perfect in typing tests."
];

const keyboardRows = [
  ["1","2","3","4","5","6","7","8","9","0","-","="],
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m", " "]
];

const TypingTest = () => {
  const [text, setText] = useState("");
  const [input, setInput] = useState("");
  const [index, setIndex] = useState(0);
  const [errors, setErrors] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [cpm, setCpm] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    setText(paragraphs[Math.floor(Math.random() * paragraphs.length)]);
  }, []);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      setShowResults(true);
      calculateResults();
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const startTest = () => {
    setIsRunning(true);
    setShowResults(false);
    setInput("");
    setErrors(0);
    setIndex(0);
    setTimeLeft(60);
    setWpm(0);
    setCpm(0);
    inputRef.current.focus();
  };

  const resetTest = () => {
    setText(paragraphs[Math.floor(Math.random() * paragraphs.length)]);
    setInput("");
    setErrors(0);
    setIndex(0);
    setTimeLeft(60);
    setIsRunning(false);
    setShowResults(false);
    setWpm(0);
    setCpm(0);
  };

  const calculateResults = () => {
    const wordsTyped = (index - errors) / 5;
    setWpm(Math.max(0, Math.round((wordsTyped / 60) * 60)));
    setCpm(index - errors);
  };

  const handleInputChange = (e) => {
    if (!isRunning) return;
    const value = e.target.value;
    const currentChar = text[index];

    if (index < text.length && timeLeft > 0) {
      if (value[value.length - 1] !== currentChar) {
        setErrors(errors + 1);
      }
      setIndex(index + 1);
    }

    setInput(value);

    if (value.length === text.length) {
      calculateResults();
      setIsRunning(false);
      setShowResults(true);
    }
  };

  return (
    <div className={styles.container}>
      {showResults ? (
        <div className={styles.resultBox}>
          <h2>✅ Typing Test Results</h2>
          <p>⚡ WPM: {wpm}</p>
          <p>🔤 CPM: {cpm}</p>
          <p>❌ Errors: {errors}</p>
          <button onClick={resetTest} className={styles.retryButton}>
            🔄 Try Again
          </button>
        </div>
      ) : (
        <>
          <h2>🔥 Typing Speed Test 🔥</h2>
          <p className={styles.timer}>⏳ Time Left: {timeLeft}s</p>

          <div className={styles.text}>
            {text.split("").map((char, i) => (
              <span
                key={i}
                className={
                  i < index
                    ? input[i] === char
                      ? styles.correct
                      : styles.incorrect
                    : i === index
                    ? styles.active
                    : ""
                }
              >
                {char}
              </span>
            ))}
          </div>

          <input
            type="text"
            className={styles.inputField}
            value={input}
            onChange={handleInputChange}
            ref={inputRef}
            autoComplete="off"
          />

          <div className={styles.keyboard}>
            {keyboardRows.map((row, rowIndex) => (
              <div key={rowIndex} className={styles.keyboardRow}>
                {row.map((key) => {
                  const nextKey = text[index]?.toLowerCase();
                  return (
                    <span
                      key={key}
                      className={`${styles.key} ${nextKey === key ? styles.glowingKey : ""} 
                                  ${input.slice(-1) === key ? styles.pressedKey : ""}`}
                    >
                      {key.toUpperCase()}
                    </span>
                  );
                })}
              </div>
            ))}
          </div>

          {isRunning ? (
            <button onClick={() => setIsRunning(false)} className={styles.stopButton}>
              ⏹ Stop Test
            </button>
          ) : (
            <button onClick={startTest} className={styles.startButton}>
              🚀 Start Test
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default TypingTest;
