import React from "react";
import Arrow from "./Arrow";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export const ArrowRight = Arrow({
  text: <ArrowForwardIosIcon />,
  className: "arrow-next",
});

export const ArrowLeft = Arrow({
  text: <ArrowBackIosIcon />,
  className: "arrow-prev",
});
