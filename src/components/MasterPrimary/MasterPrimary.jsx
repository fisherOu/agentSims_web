/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { LineRoundedArrow } from "../LineRoundedArrow";
import { LineRoundedSearch } from "../LineRoundedSearch";
import "./style.css";

export const MasterPrimary = ({
  iconLeft = true,
  iconRight = true,
  size,
  type,
  className,
  buttonTextClassName,
  text = "Default",
}) => {
  return (
    <div className={`master-primary ${size} ${type} ${className}`}>
      {iconLeft && (
        <LineRoundedSearch
          className={`${size === "smaller" ? "class" : size === "large" ? "class-2" : "class-3"}`}
          lineRoundedSearch={
            type === "primary" && size === "smaller"
              ? "https://generation-sessions.s3.amazonaws.com/7fffe1e230aaf47ad7397c3a59f1a690/img/line-rounded-search-7.svg"
              : type === "secondary" && size === "smaller"
              ? "https://generation-sessions.s3.amazonaws.com/7fffe1e230aaf47ad7397c3a59f1a690/img/line-rounded-search-6.svg"
              : type === "secondary" && size === "small"
              ? "https://generation-sessions.s3.amazonaws.com/7fffe1e230aaf47ad7397c3a59f1a690/img/line-rounded-search-5.svg"
              : size === "default" && type === "primary"
              ? "https://generation-sessions.s3.amazonaws.com/7fffe1e230aaf47ad7397c3a59f1a690/img/line-rounded-search-4.svg"
              : size === "default" && type === "secondary"
              ? "https://generation-sessions.s3.amazonaws.com/7fffe1e230aaf47ad7397c3a59f1a690/img/line-rounded-search-3.svg"
              : type === "primary" && size === "large"
              ? "https://generation-sessions.s3.amazonaws.com/7fffe1e230aaf47ad7397c3a59f1a690/img/line-rounded-search-2.svg"
              : type === "secondary" && size === "large"
              ? "https://generation-sessions.s3.amazonaws.com/7fffe1e230aaf47ad7397c3a59f1a690/img/line-rounded-search-1.svg"
              : "https://generation-sessions.s3.amazonaws.com/7fffe1e230aaf47ad7397c3a59f1a690/img/line-rounded-search-8.svg"
          }
        />
      )}

      <div className={`button-text ${buttonTextClassName}`}>{text}</div>
      {iconRight && (
        <LineRoundedArrow
          className={`${size === "smaller" ? "class-4" : size === "large" ? "class-2" : "class-3"}`}
          lineRoundedArrow={
            type === "primary" && size === "smaller"
              ? "https://generation-sessions.s3.amazonaws.com/7fffe1e230aaf47ad7397c3a59f1a690/img/line-rounded-arrow-right-6.svg"
              : type === "secondary" && size === "smaller"
              ? "https://generation-sessions.s3.amazonaws.com/7fffe1e230aaf47ad7397c3a59f1a690/img/line-rounded-arrow-right-5.svg"
              : type === "secondary" && size === "small"
              ? "https://generation-sessions.s3.amazonaws.com/7fffe1e230aaf47ad7397c3a59f1a690/img/line-rounded-arrow-right-4.svg"
              : size === "default" && type === "primary"
              ? "https://generation-sessions.s3.amazonaws.com/7fffe1e230aaf47ad7397c3a59f1a690/img/line-rounded-arrow-right-3.svg"
              : size === "default" && type === "secondary"
              ? "https://generation-sessions.s3.amazonaws.com/7fffe1e230aaf47ad7397c3a59f1a690/img/line-rounded-arrow-right-2.svg"
              : type === "primary" && size === "large"
              ? "https://generation-sessions.s3.amazonaws.com/7fffe1e230aaf47ad7397c3a59f1a690/img/line-rounded-arrow-right-1.svg"
              : type === "secondary" && size === "large"
              ? "https://generation-sessions.s3.amazonaws.com/7fffe1e230aaf47ad7397c3a59f1a690/img/line-rounded-arrow-right.svg"
              : "https://generation-sessions.s3.amazonaws.com/7fffe1e230aaf47ad7397c3a59f1a690/img/line-rounded-arrow-right-7.svg"
          }
        />
      )}
    </div>
  );
};

MasterPrimary.propTypes = {
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
  size: PropTypes.oneOf(["default", "smaller", "large", "small"]),
  type: PropTypes.oneOf(["primary", "secondary"]),
  text: PropTypes.string,
};
