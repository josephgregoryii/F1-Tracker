import React from "react";

import { SessionResultDiv } from "./styled";

export default function PositionColumn({ driver }) {
  return (
    <SessionResultDiv key={`${driver.name} pos`}>
      {driver.position}
    </SessionResultDiv>
  );
}
