import React from "react";

const ButtonList = ({ data, callback, hide }) => (
  <ul className={hide ? "hide" : ""}>
    {data.map(name => (
      <li key={name}>
        <button onClick={() => callback(name)}>{name}</button>
      </li>
    ))}
  </ul>
);

export default ButtonList;
