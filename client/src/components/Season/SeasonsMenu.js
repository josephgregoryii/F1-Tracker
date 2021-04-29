import React from 'react'
import { ScrollMenuComponent } from '../ScrollMenu/ScrollMenu'

import {
    MenuDiv,
    TitleDiv,
    ScrollMenuDiv,
} from './SeasonStyled/SeasonContainerComponent.style'


export function SeasonsMenu(props) {
    return (
        <MenuDiv key='menu-div'>
            <TitleDiv>
                Formula 1 Tracker
            </TitleDiv>
            <ScrollMenuDiv>
                <ScrollMenuComponent {...props} onSelect={props.onSelect} />
            </ScrollMenuDiv>
        </MenuDiv>
    )
}