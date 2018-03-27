// @flow
import * as React from "react";

const ButtonList = ({ islandNames, onClick, hide }) => (
  <ul className={hide ? "hide" : ""}>
    {islandNames.map(name => (
      <li key={name}>
        <button onClick={() => onClick(name)}>{name}</button>
      </li>
    ))}
  </ul>
);

export default ButtonList;
