import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

import { useStyles, LinearProgressDiv } from "./styled";

export default function LinearProgressLoader() {
  const linearProgressStyle = useStyles();
  return (
    <LinearProgressDiv className={linearProgressStyle.root}>
      <LinearProgress classes={linearProgressStyle} />
      <LinearProgress classes={linearProgressStyle} color="secondary" />
    </LinearProgressDiv>
  );
}
