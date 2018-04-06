// @flow
import * as React from "react";

type ButtonListProps = {
  islandNames: string[],
  onClick: string => void,
  hide: boolean,
};

const ButtonList = ({
  islandNames,
  onClick,
  hide,
}: ButtonListProps): React.Node => (
  <ul className={hide ? "hide" : ""}>
    {islandNames.map(name => (
      <li key={name}>
        <button onClick={() => onClick(name)}>{name}</button>
      </li>
    ))}
  </ul>
);

export default ButtonList;
