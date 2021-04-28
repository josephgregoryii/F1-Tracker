import React from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu';

import './ScrollMenu.css'

import {
    ArrowDiv,
    MenuItemDiv
} from './ScrollMenuStyled/ScrollMenu.styled'

// One item component
// selected prop will be passed
const MenuItem = ({ text, selected }) => {
    return <MenuItemDiv
        className={`menu-item ${selected ? 'active' : ''}`}
    >{text}</MenuItemDiv>;
};

// All items component
const Menu = (list, selected) =>
    list.map(el => {
        return <MenuItem
            className="noselect"
            text={el.season}
            key={el.season}
            selected={selected} />;
    });

const Arrow = ({ text, className }) => {
    return (
        <ArrowDiv
            className={`${className} noselect`}
            key={text}
        >{text}</ArrowDiv>
    );
};

export const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
export const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

export default function ScrollMenuComponent(props) {
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
            menuStyle={{width: '1000px'}
            }
        />
    )
}
