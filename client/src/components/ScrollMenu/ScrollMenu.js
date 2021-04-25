import React from 'react'
import styled from 'styled-components'
import ScrollMenu from 'react-horizontal-scrolling-menu';

// One item component
// selected prop will be passed
const MenuItem = ({ text, selected }) => {
    return <MenuItemDiv
        className={`menu-item ${selected ? 'active' : ''}`}
    >{text}</MenuItemDiv>;
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
    list.map(el => {
        const { id, description } = el
        return <MenuItem 
            text={description} 
            key={id} 
            selected={selected} />;
    });

const ArrowDiv = styled.div`
    padding: 20px;
    cursor: pointer;
`
export const Arrow = ({ text, className }) => {
    return (
        <ArrowDiv
            className={className}
        >{text}</ArrowDiv>
    );
};

export const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
export const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

export default function ScrollMenuComponent(props) {
    return (
        <ScrollMenu
            data={Menu(props.allSeasons, props.currentSeason )}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            selected={props.currentSeason}
            onSelect={props.onSelect}
            scrollToSelected={props.scrollToSelected}
            hideSingleArrow={props.hideSingleArrow}
            wheel={props.wheel}
        />
    )
}

const MenuItemDiv = styled.div`
    padding: 20px 30px;
    margin: 5px 5px;
    margin-right: 5%;
    cursor: pointer;

    &.active {
    background-color: #950316;
   }
`