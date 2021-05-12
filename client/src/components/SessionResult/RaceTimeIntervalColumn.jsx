import React from "react";
import { SessionResultDiv } from "./styled";

export default function RaceTimeIntervalColumn({ driver, status }) {
  return driver.time ? (
    <SessionResultDiv key={`${driver.name} ${driver.gap}`}>
      {driver.position === 1 ? driver.gap : `+${driver.interval}`}
    </SessionResultDiv>
  ) : status === "Complete" ? (
    <SessionResultDiv key={`${driver.name} DNF`}>DNF</SessionResultDiv>
  ) : (
    <SessionResultDiv key={`${driver.name} N/A`}>N/A</SessionResultDiv>
  );
}
