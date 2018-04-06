import React from "react";
import { shallow } from "enzyme";
import Island from "../Islands";

describe("Island", () => {
  let cmpt;

  beforeEach(() => {
    cmpt = shallow(
      <Island name={"MOCK_NAME"} svg={"MOCK_SVG"} showBorder={false} />,
    );
  });

  it("renders without exploding", () => {
    expect(cmpt.length).toBe(1);
  });
});
