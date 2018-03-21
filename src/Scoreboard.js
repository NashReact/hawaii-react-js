// @flow
import * as React from "react";

type ScoreboardProps = {
  correctAnswers: number,
  wrongAnswers: number,
  seconds: number,
  startTimer: () => void,
};

const Scoreboard = ({
  correctAnswers,
  wrongAnswers,
  seconds,
  startTimer,
}: ScoreboardProps) => (
  <div>
    {correctAnswers + wrongAnswers + seconds === 0 ? (
      <h3>Welcome to Pick An Island!</h3>
    ) : (
      <div>
        <div>Correct: {correctAnswers}</div>
        <div>Wrong: {wrongAnswers}</div>
      </div>
    )}
    {seconds === 0 ? (
      <button onClick={startTimer}>Start/Reset</button>
    ) : (
      <div>{seconds} seconds</div>
    )}
    <p>
      When the timer starts, click the name that corresponds to the island with
      a red border.
    </p>
  </div>
);

export default Scoreboard;
