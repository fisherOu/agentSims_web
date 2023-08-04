/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const LineRoundedSearch = ({
  className,
  lineRoundedSearch = "https://generation-sessions.s3.amazonaws.com/7fffe1e230aaf47ad7397c3a59f1a690/img/line-rounded-search-9.svg",
}) => {
  return <img className={`line-rounded-search ${className}`} alt="Line rounded search" src={lineRoundedSearch} />;
};

LineRoundedSearch.propTypes = {
  lineRoundedSearch: PropTypes.string,
};
