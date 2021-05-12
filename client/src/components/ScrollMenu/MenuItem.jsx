import React from "react";

import { MenuItemDiv } from './styled'

const MenuItem = ({ text, selected }) => {
    return (
      <MenuItemDiv className={`menu-item ${selected ? "active" : ""}`}>
        {text}
      </MenuItemDiv>
    );
  };

export default MenuItem