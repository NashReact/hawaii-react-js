import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import Islands from "../Islands";
import Scoreboard from "../Scoreboard";
import ButtonList from "../ButtonList";

describe("App", () => {
  let cmpt;

  beforeEach(() => {
    cmpt = shallow(<App />);
  });

  it("renders without exploding", () => {
    expect(cmpt.length).toBe(1);
  });

  it("renders the Islands", () => {
    expect(cmpt.find(Islands).length).toBe(1);
  });

  it("renders the Scoreboard", () => {
    expect(cmpt.find(Scoreboard).length).toBe(1);
  });

  it("renders the ButtonList", () => {
    expect(cmpt.find(ButtonList).length).toBe(1);
  });
});
