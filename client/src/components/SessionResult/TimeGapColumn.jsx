import React from "react";
import { SessionResultDiv } from "./styled";

export default function TimeGapColumn({ driver, status, sessionName }) {
  return driver.time ? (
    <SessionResultDiv>
      {driver.position === 1 ? 'Leader' : `${driver.gap ? `+${driver.gap}` : 'Out'}`}
    </SessionResultDiv>
  ) : status === "Complete" ? (
    <SessionResultDiv>DNF</SessionResultDiv>
  ) : (
    <SessionResultDiv>N/A</SessionResultDiv>
  );
}
