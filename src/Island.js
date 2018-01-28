import React from "react";
import PropTypes from "prop-types";

const Island = ({ name, svg, showBorder }) => (
  <div className={`${name.toLowerCase()}${showBorder ? " border" : ""}`}>
    <img src={svg} alt={name} />
  </div>
);

Island.propTypes = {
  name: PropTypes.string.isRequired,
  showBorder: PropTypes.bool
};

Island.defaultProps = {
  showBorder: false
};

export default Island;
