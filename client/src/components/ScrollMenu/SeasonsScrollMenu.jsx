import React from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import Menu from "./Menu";
import "./SeasonsScrollMenu.css";

import { ArrowLeft, ArrowRight } from "./ArrowDirections";

export default function SeasonsScrollMenu(props) {
  return (
    <ScrollMenu
      data={Menu(props.allSeasons, props.currentSeason)}
      arrowLeft={ArrowLeft}
      arrowRight={ArrowRight}
      selected={props.currentSeason}
      onSelect={props.onSelect}
      scrollToSelected={props.scrollToSelected}
      hideSingleArrow={props.hideSingleArrow}
      wheel={props.wheel}
      translate={props.translate}
    />
  );
}
