import React from "react";
import { SessionResultDiv } from "./styled";

import {
  DriverColumn,
  PositionColumn,
  TeamColumn,
  TimeGapColumn,
  GeneralTimeColumn,
  GridTimeColumn,
  RaceTimeIntervalColumn,
  SessionResultTableNames,
} from "./index";

export default function SessionResult(props) {
  if (!props.sessionResults) {
    return null;
  }

  if (props.sessionResults.session.details.status === "Not Started") {
    return (
      <SessionResultDiv>
        Weekend has either not started or has been cancled/postponed.
      </SessionResultDiv>
    );
  } else {
    const status = props.sessionResults.session.general.session_name;
    const mappedItems = Array.from(props.sessionResults.drivers).map(
      (driver) => {
        return [
          /** Position Column **/
          <PositionColumn key={`${driver.name} pos`} driver={driver} />,

          /** Driver Column **/
          <DriverColumn key={`${driver.name} driver`} driver={driver} />,

          /** Team Column **/
          <TeamColumn key={`${driver.name} team`} driver={driver} />,

          /** Time Interval Column **/
          status && status.includes("Race") && (
            <RaceTimeIntervalColumn
              key={`${driver.name} time-inter`}
              driver={driver}
              status={props.sessionResults.race.status}
              sessionName={props.sessionResults.session.general.session_name}
            />
          ),

          status &&
            (status.includes("Qualifying") || status.includes("Practice")) && (
              <GeneralTimeColumn
                key={`${driver.name} gen-time`}
                driver={driver}
                status={props.sessionResults.race.status}
                sessionName={props.sessionResults.session.general.session_name}
              />
            ),
          status && status.includes("Grid") && (
            <GridTimeColumn key={`${driver.name} grid`} />
          ),

          status && status.includes("FastestLap") && (
            <GridTimeColumn key={`${driver.name} fast-lap`} />
          ),

          /** Time Gap Column **/
          status &&
            !status.includes("Grid") &&
            !status.includes("FastestLap") && (
              <TimeGapColumn
                key={`${driver.name} gap-time`}
                driver={driver}
                status={props.sessionResults.race.status}
                sessionName={props.sessionResults.session.general.session_name}
              />
            ),
          status && status.includes("Grid") && (
            <GridTimeColumn key={`${driver.name} grid-time`} />
          ),
          status && status.includes("FastestLap") && (
            <GridTimeColumn key={`${driver.name} fastestLap-time`} />
          ),
        ];
      }
    );
    return [
      <SessionResultTableNames key={"table-names"} status={status} />,
      mappedItems,
    ];
  }
}
