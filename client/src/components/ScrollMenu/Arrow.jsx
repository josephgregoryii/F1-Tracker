import React from "react";
import { ArrowDiv } from "./styled";

const Arrow = ({ text, className }) => {
  return (
    <ArrowDiv className={`${className} noselect`} key={text}>
      {text}
    </ArrowDiv>
  );
};

export default Arrow;
