import React from "react";
import RaceInfo from "./RaceInfo";
import Date from "../Date/Date";
import RaceStatus from "../RaceStatus/RaceStatus";
import FadeIn from "react-fade-in";
import { getDate } from "../../helpers/getDate";

import { isWeekend } from "../../helpers/isWeekend";

import LiveIcon from "../LiveIcon/LiveIcon";

import { Image, RaceDiv, RaceResultDiv, RaceHeaderDiv } from "./styled";

export default function SelectedRace(props) {
  console.log("p", props);
  const start_date = getDate(props.race.start_date);
  const end_date = getDate(props.race.end_date);
  const session_name = props.sessionResults
    ? props.sessionResults.session.general.session_name
    : null;
  const isLive = isWeekend();

  return (
    <div>
      {start_date && end_date ? (
        <Date start_date={start_date} end_date={end_date} />
      ) : null}
      <RaceDiv>
        <Image
          src={require(`../../assets/img/${props.race.name}.svg`).default}
          alt={`${props.race.name} | Formula 1 Tracker`}
        />
        <FadeIn>
          <RaceStatus {...props} />
          <RaceInfo {...props} />
        </FadeIn>
      </RaceDiv>
      {props.sessionResults ? (
        <RaceResultDiv>
          <RaceHeaderDiv className="secondary">
            {session_name === "FastestLap"
              ? `${session_name} (Order by per-lap results)`
              : session_name}
            {isLive ? <LiveIcon /> : null}
          </RaceHeaderDiv>
        </RaceResultDiv>
      ) : null}
    </div>
  );
}
