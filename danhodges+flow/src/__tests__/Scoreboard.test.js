import React from "react";
import { shallow } from "enzyme";
import Scoreboard from "../Scoreboard";

describe("Scoreboard", () => {
  let cmpt;
  let startTimerSpy = jest.fn();

  beforeEach(() => {
    cmpt = shallow(
      <Scoreboard
        startTimer={startTimerSpy}
        wrongAnswers={3}
        correctAnswers={2}
        seconds={0}
      />,
    );
  });

  it("renders without exploding", () => {
    expect(cmpt.length).toBe(1);
  });

  it("starts the timer", () => {
    cmpt
      .find("button")
      .first()
      .simulate("click");
    expect(startTimerSpy).toHaveBeenCalled();
  });

  it("hides the start button", () => {
    cmpt.setProps({ seconds: 30 });
    expect(cmpt.find("button").length).toBe(0);
  });
});
