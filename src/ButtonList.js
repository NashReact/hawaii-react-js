import React from "react";

const ButtonList = ({ data, onClick, hide }) => (
  <ul className={hide ? "hide" : ""}>
    {data.map(name => (
      <li key={name}>
        <button onClick={() => onClick(name)}>{name}</button>
      </li>
    ))}
  </ul>
);

export default ButtonList;
