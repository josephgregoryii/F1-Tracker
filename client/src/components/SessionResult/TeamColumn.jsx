import React from "react";
import { shortenTeamName } from "../../helpers/shortenTeamName";
import { SessionResultDiv } from "./styled";

export default function TeamColumn({ driver }) {
  return (
    <SessionResultDiv key={`${driver.name} ${driver.team_name}`}>
      {shortenTeamName(driver.team_name)}
    </SessionResultDiv>
  );
}
