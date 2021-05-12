import React from "react";
import { shortenName } from "../../helpers/shortenName";

import { SessionResultDiv } from "./styled";

export default function DriverColumn({ driver }) {
  return (
    <SessionResultDiv key={`${driver.name} name`}>
      {shortenName(driver.name)}
    </SessionResultDiv>
  );
}
