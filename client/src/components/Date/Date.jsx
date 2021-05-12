import React from "react";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import FadeIn from "react-fade-in";

import { DateDiv } from "./styled";

export default function Date({ start_date, end_date }) {
  return start_date !== null && end_date !== null ? (
    <FadeIn >
      <DateDiv>
        {start_date} <DoubleArrowIcon /> {end_date}
      </DateDiv>
    </FadeIn>
  ) : null;
}
