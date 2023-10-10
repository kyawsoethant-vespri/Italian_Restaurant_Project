"use client";
import React from "react";
import Countdown from "react-countdown";

const CountDown = () => {
  const currentDate = new Date();
  const threeDaysFromNow = new Date(currentDate);
  threeDaysFromNow.setDate(currentDate.getDate() + 11);
  return (
    <>
      <Countdown
        className="font-bold text-5xl text-yellow-300"
        date={threeDaysFromNow}
      />
    </>
  );
};

export default CountDown;
