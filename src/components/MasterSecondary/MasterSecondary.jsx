/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { LineRoundedArrow } from "../LineRoundedArrow";
import { LineRoundedSearch } from "../LineRoundedSearch";
import "./style.css";

export const MasterSecondary = ({
  iconLeft = true,
  iconRight = true,
  size,
  type,
  className,
  buttonTextClassName,
  text = "Default",
}) => {
  return (
    <div className={`master-secondary size-0-${size} type-0-${type} ${className}`}>
      {iconLeft && (
        <LineRoundedSearch
          className={`${
            type === "primary" && size === "smaller"
              ? "class-5"
              : type === "secondary" && size === "smaller"
              ? "class-6"
              : size === "large"
              ? "class-7"
              : "class-8"
          }`}
          lineRoundedSearch={
            type === "primary" && size === "small"
              ? "https://generation-sessions.s3.amazonaws.com/7fffe1e230aaf47ad7397c3a59f1a690/img/line-rounded-search.svg"
              : type === "primary" && size === "smaller"
              ? "https://generation-sessions.s3.amazonaws.com/7fffe1e230aaf47ad7397c3a59f1a690/img/line-rounded-search-16.svg"
              : type === "secondary" && size === "smaller"
              ? "https://generation-sessions.s3.amazonaws.com/7fffe1e230aaf47ad7397c3a59f1a690/img/line-rounded-search-15.svg"
              : size === "default" && type === "primary"
              ? "https://generation-sessions.s3.amazonaws.com/7fffe1e230aaf47ad7397c3a59f1a690/img/line-rounded-search-14.svg"
              : type === "primary" && size === "large"
              ? "https://generation-sessions.s3.amazonaws.com/7fffe1e230aaf47ad7397c3a59f1a690/img/line-rounded-search-12.svg"
              : type === "secondary" && size === "large"
              ? "https://generation-sessions.s3.amazonaws.com/7fffe1e230aaf47ad7397c3a59f1a690/img/line-rounded-search-11.svg"
              : "https://generation-sessions.s3.amazonaws.com/7fffe1e230aaf47ad7397c3a59f1a690/img/line-rounded-search-13.svg"
          }
        />
      )}

      <div className={`text-wrapper ${buttonTextClassName}`}>{text}</div>
      {iconRight && (
        <LineRoundedArrow
          className={`${
            type === "primary" && size === "smaller"
              ? "class-9"
              : type === "secondary" && size === "smaller"
              ? "class-10"
              : size === "large"
              ? "class-7"
              : "class-8"
          }`}
          lineRoundedArrow={
            type === "primary" && size === "small"
              ? "https://generation-sessions.s3.amazonaws.com/7fffe1e230aaf47ad7397c3a59f1a690/img/line-rounded-arrow-right-16.svg"
              : type === "primary" && size === "smaller"
              ? "https://generation-sessions.s3.amazonaws.com/7fffe1e230aaf47ad7397c3a59f1a690/img/line-rounded-arrow-right-15.svg"
              : type === "secondary" && size === "smaller"
              ? "https://generation-sessions.s3.amazonaws.com/7fffe1e230aaf47ad7397c3a59f1a690/img/line-rounded-arrow-right-14.svg"
              : size === "default" && type === "primary"
              ? "https://generation-sessions.s3.amazonaws.com/7fffe1e230aaf47ad7397c3a59f1a690/img/line-rounded-arrow-right-13.svg"
              : type === "primary" && size === "large"
              ? "https://generation-sessions.s3.amazonaws.com/7fffe1e230aaf47ad7397c3a59f1a690/img/line-rounded-arrow-right-11.svg"
              : type === "secondary" && size === "large"
              ? "https://generation-sessions.s3.amazonaws.com/7fffe1e230aaf47ad7397c3a59f1a690/img/line-rounded-arrow-right-10.svg"
              : "https://generation-sessions.s3.amazonaws.com/7fffe1e230aaf47ad7397c3a59f1a690/img/line-rounded-arrow-right-12.svg"
          }
        />
      )}
    </div>
  );
};

MasterSecondary.propTypes = {
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
  size: PropTypes.oneOf(["default", "smaller", "large", "small"]),
  type: PropTypes.oneOf(["primary", "secondary"]),
  text: PropTypes.string,
};
