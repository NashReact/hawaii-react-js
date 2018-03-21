import React from "react";
import PropTypes from "prop-types";
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

const islandData = [
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

export default class Islands extends React.Component {
  render() {
    return (
      <React.Fragment>
        {islandData.map(({ name, svg }) => (
          <Island
            name={name}
            svg={svg}
            showBorder={this.props.selectedIsland === svg}
          />
        ))}
      </React.Fragment>
    );
  }
}

Islands.propTypes = {
  selectedIsland: PropTypes.string.isRequired,
};

Islands.defaultProps = {
  selectedIsland: "",
};
