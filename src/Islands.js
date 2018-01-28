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
  KAHOOLAWE
} from "./constants.js";

export default class Islands extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Island
          name={HAWAII}
          svg={hawaii}
          showBorder={this.props.selectedIsland === HAWAII}
        />
        <Island
          name={KAHOOLAWE}
          svg={kahoolawe}
          showBorder={this.props.selectedIsland === KAHOOLAWE}
        />
        <Island
          name={KAUAI}
          svg={kauai}
          showBorder={this.props.selectedIsland === KAUAI}
        />
        <Island
          name={LANAI}
          svg={lanai}
          showBorder={this.props.selectedIsland === LANAI}
        />
        <Island
          name={MAUI}
          svg={maui}
          showBorder={this.props.selectedIsland === MAUI}
        />
        <Island
          name={MOLOKAI}
          svg={molokai}
          showBorder={this.props.selectedIsland === MOLOKAI}
        />
        <Island
          name={NIIHAU}
          svg={niihau}
          showBorder={this.props.selectedIsland === NIIHAU}
        />
        <Island
          name={OAHU}
          svg={oahu}
          showBorder={this.props.selectedIsland === OAHU}
        />
      </React.Fragment>
    );
  }
}

Islands.propTypes = {
  selectedIsland: PropTypes.string.isRequired
};

Islands.defaultProps = {
  selectedIsland: ""
};
