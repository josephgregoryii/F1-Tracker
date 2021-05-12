import React from "react";
import { SessionResultDiv } from "./styled";

export default function GeneralTimeColumn({ driver, status, sessionName }) {
  return driver.time ? (
    <SessionResultDiv>
      {driver.time}
    </SessionResultDiv>
  ) : status === "Complete" ? (
    <SessionResultDiv>Out</SessionResultDiv>
  ) : (
    <SessionResultDiv>N/A</SessionResultDiv>
  );
}
