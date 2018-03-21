// @flow
import * as React from "react";
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

const randomIsland = (): string =>
  islandNames[Math.floor(Math.random() * islandNames.length)];

type AppState = {
  correctAnswers: number,
  wrongAnswers: number,
  selectedIsland: string,
  seconds: number,
};

const initialState = {
  correctAnswers: 0,
  wrongAnswers: 0,
  selectedIsland: randomIsland(),
  seconds: 0,
};

class App extends React.Component<{}, AppState> {
  state = { ...initialState };

  chooseIsland = (name: string): void => {
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

  startTimer = (): void => {
    this.setState({
      ...initialState,
      seconds: 30,
    });

    const tick = (): void => {
      setTimeout((): void => {
        this.setState(state => ({ seconds: state.seconds - 1 }));
        return this.state.seconds < 1 ? undefined : tick();
      }, 1000);
    };

    tick();
  };

  render(): React.Node {
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
            islandNames={islandNames}
            onClick={this.chooseIsland}
            hide={this.state.seconds === 0}
          />
        </div>
      </div>
    );
  }
}

export default App;
