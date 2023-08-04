/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const LineRoundedArrow = ({
  className,
  lineRoundedArrow = "https://generation-sessions.s3.amazonaws.com/7fffe1e230aaf47ad7397c3a59f1a690/img/line-rounded-arrow-right-8.svg",
}) => {
  return <img className={`line-rounded-arrow ${className}`} alt="Line rounded arrow" src={lineRoundedArrow} />;
};

LineRoundedArrow.propTypes = {
  lineRoundedArrow: PropTypes.string,
};
