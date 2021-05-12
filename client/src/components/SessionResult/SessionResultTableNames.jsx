import React from "react";
import { SessionResultDiv } from "./styled";

export default function SessionResultTableNames({ status }) {
  return [
    <SessionResultDiv key={"pos"}>POS</SessionResultDiv>,
    <SessionResultDiv key={"driver"}>DRIVER</SessionResultDiv>,
    <SessionResultDiv key={"team"}>TEAM</SessionResultDiv>,
    <SessionResultDiv key={"time-inter"}>
      {`TIME ${status === "Race" ? "(Interval)" : ""}`}
    </SessionResultDiv>,
    <SessionResultDiv key={"time-gap"}>TIME (Gap)</SessionResultDiv>,
  ];
}
