import React from "react";
import MenuItem from './MenuItem'

// All items component
const Menu = (list, selected) =>
  list.map((el) => {
    return (
      <MenuItem
        className="noselect"
        text={el.season}
        key={el.season}
        selected={selected}
      />
    );
  });

export default Menu;
