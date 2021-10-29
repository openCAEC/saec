import React, { useEffect, useState } from "react";

// @ts-ignore
// Ignorar erro de importação de módulo scss pelo ts
// import * as styles from "./countdown.module.scss";

const CountdownComponent = () => {


const calculateTimeLeft = () => {
 
  const difference = +new Date("11/08/2021") - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / 1000 / 60) % 60),
      segundos: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

useEffect(() => {
  const timer = setTimeout(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);
  // Clear timeout if the component is unmounted
  return () => clearTimeout(timer);
});

const timerComponents = [];

Object.keys(timeLeft).forEach((interval) => {
  if (!timeLeft[interval]) {
    return;
  }

  timerComponents.push(
    <span>
      {timeLeft[interval]} {interval}{" "}
    </span>
  );
});

  return (
    <div>
     
      {timerComponents.length ? timerComponents : <span>A SAEC 2021 está no ar!</span>}
    </div>
  );
};

export default CountdownComponent;
