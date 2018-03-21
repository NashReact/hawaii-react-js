// @flow
import * as React from "react";
import Island from "./Island";
import niihau from "./img/niihau.svg";
import kauai from "./img/kauai.svg";
import oahu from "./img/oahu.svg";
import molokai from "./img/molokai.svg";
import lanai from "./img/lanai.svg";
import maui from "./img/maui.svg";
import hawaii from "./img/hawaii.svg";
import kahoolawe from "./img/kahoolawe.svg";

import {
  NIIHAU,
  KAUAI,
  OAHU,
  MOLOKAI,
  LANAI,
  MAUI,
  HAWAII,
  KAHOOLAWE,
} from "./constants.js";

export type IslandData = {
  name: string,
  svg: any,
};

const islandData: Array<IslandData> = [
  {
    name: NIIHAU,
    svg: niihau,
  },
  {
    name: KAUAI,
    svg: kauai,
  },
  {
    name: OAHU,
    svg: oahu,
  },
  {
    name: MOLOKAI,
    svg: molokai,
  },
  {
    name: LANAI,
    svg: lanai,
  },
  {
    name: MAUI,
    svg: maui,
  },
  {
    name: HAWAII,
    svg: hawaii,
  },
  {
    name: KAHOOLAWE,
    svg: kahoolawe,
  },
];

type IslandsProps = {
  selectedIsland: string,
};

export default class Islands extends React.Component<IslandsProps> {
  static defaultProps = {
    selectedIsland: "",
  };

  render(): React.Fragment {
    return (
      <React.Fragment>
        {islandData.map(({ name, svg }: IslandData) => (
          <Island
            name={name}
            key={name}
            svg={svg}
            showBorder={this.props.selectedIsland === name}
          />
        ))}
      </React.Fragment>
    );
  }
}
