import React from "react";
import { shallow } from "enzyme";
import Islands from "../Islands";
import { HAWAII } from "../constants";
import Island from "../Island";

describe("Islands", () => {
  let cmpt;

  beforeEach(() => {
    cmpt = shallow(<Islands selectedIsland={HAWAII} />);
  });

  it("renders without exploding", () => {
    expect(cmpt.length).toBe(1);
  });

  it("renders all the islands", () => {
    expect(cmpt.find(Island).length).toBe(8);
  });
});
