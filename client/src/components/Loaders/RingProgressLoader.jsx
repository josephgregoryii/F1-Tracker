import React from "react";
import RingLoader from "react-spinners/RingLoader";

import { RingLoaderDiv } from "./styled";

export default function RingProgressLoader() {
  return (
    <RingLoaderDiv>
      <RingLoader color={"#e51917"} />
    </RingLoaderDiv>
  );
}
