// @flow
import * as React from "react";

type IslandProps = {
  name: string,
  svg: any,
  showBorder: boolean,
};

const Island = ({ name, svg, showBorder }: IslandProps): React.Node => (
  <div className={`${name.toLowerCase()}${showBorder ? " border" : ""}`}>
    <img src={svg} alt={name} />
  </div>
);

Island.defaultProps = {
  showBorder: false,
};

export default Island;
