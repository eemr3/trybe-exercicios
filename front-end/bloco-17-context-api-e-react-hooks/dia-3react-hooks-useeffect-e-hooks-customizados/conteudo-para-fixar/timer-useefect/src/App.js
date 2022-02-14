import React, { useEffect, useState } from "react";
import "./App.css";

const TIMER_INTERVAL = 1000;
const NUMBER_TIMEOUT = 10000;
const MESSAGE_TIMEOUT = 4000;
const MIN_RANDOM = 1;
const MAX_RANDOM = 100;

function App() {
  const [number, setNumber] = useState(1);
  const [isMultiple, setIsMultiple] = useState(false);
  const [timer, setTimer] = useState(0);

  const incrementTimerInterval = () => setTimer((timer) => timer + 1);

  const verifyMultiple = (randomMultiple) => {
    if (randomMultiple % 3 === 0 || randomMultiple % 5 === 0) {
      setIsMultiple(true);
      setTimeout(() => setIsMultiple(false), MESSAGE_TIMEOUT);
    }
  };

  const handleRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * MAX_RANDOM) + MIN_RANDOM;
    verifyMultiple(randomNumber);
    setNumber(randomNumber);
    setTimer(0);
  };

  useEffect(() => {
    const intervalId = setInterval(handleRandomNumber, NUMBER_TIMEOUT);
    const setIntervalId = setInterval(incrementTimerInterval, TIMER_INTERVAL);

    return () => {
      clearInterval(intervalId);
      clearInterval(setIntervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <p>{`Número aleatório: ${number}`}</p>
      <p>{isMultiple && "Acerto"}</p>
      <p>Tempo: {timer}</p>
    </div>
  );
}

export default App;
