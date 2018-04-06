import React from "react";
import { shallow } from "enzyme";
import ButtonList from "../ButtonList";

describe("ButtonList", () => {
  let cmpt;
  let clickSpy = jest.fn();
  const dataMock = ["MOCK_NAME_ONE", "MOCK_NAME_TWO"];

  beforeEach(() => {
    cmpt = shallow(
      <ButtonList islandNames={dataMock} onClick={clickSpy} hide={false} />,
    );
  });

  it("renders without exploding", () => {
    expect(cmpt.length).toBe(1);
  });

  it("renders all the data", () => {
    expect(cmpt.find("li").length).toBe(2);
  });

  it("clicks the names", () => {
    cmpt
      .find("button")
      .at(1)
      .simulate("click");
    expect(clickSpy.mock.calls[0][0]).toBe("MOCK_NAME_TWO");
  });
});
