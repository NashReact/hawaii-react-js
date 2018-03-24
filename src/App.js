import React, { Component } from "react";
import "./App.css";
import Islands from "./Islands";
import Scoreboard from "./Scoreboard";
import ButtonList from "./ButtonList";
import {
  NIIHAU,
  KAUAI,
  OAHU,
  MOLOKAI,
  LANAI,
  MAUI,
  HAWAII,
  KAHOOLAWE,
} from "./constants";

const islandNames = [
  HAWAII,
  KAHOOLAWE,
  KAUAI,
  LANAI,
  MAUI,
  MOLOKAI,
  NIIHAU,
  OAHU,
];

const randomIsland = () =>
  islandNames[Math.floor(Math.random() * islandNames.length)];

const initialState = {
  correctAnswers: 0,
  wrongAnswers: 0,
  selectedIsland: randomIsland(),
  seconds: 0,
};

class App extends Component {
  state = { ...initialState };

  chooseIsland = name => {
    this.setState(
      state =>
        name === this.state.selectedIsland
          ? { correctAnswers: state.correctAnswers + 1 }
          : { wrongAnswers: state.wrongAnswers + 1 },
    );
    this.setState({
      selectedIsland: randomIsland(),
    });
  };

  startTimer = () => {
    this.setState({
      ...initialState,
      seconds: 30,
    });

    const tick = () => {
      setTimeout(() => {
        this.setState(state => ({ seconds: state.seconds - 1 }));
        return this.state.seconds < 1 ? undefined : tick();
      }, 1000);
    };

    tick();
  };

  render() {
    return (
      <div className="App">
        <div className="ocean">
          <Islands selectedIsland={this.state.selectedIsland} />
        </div>
        <div className="dashboard">
          <Scoreboard
            correctAnswers={this.state.correctAnswers}
            wrongAnswers={this.state.wrongAnswers}
            seconds={this.state.seconds}
            startTimer={this.startTimer}
          />
          <ButtonList
            data={islandNames}
            onClick={this.chooseIsland}
            hide={this.state.seconds === 0}
          />
        </div>
      </div>
    );
  }
}

export default App;
