import React from 'react'
import SeasonsScrollMenu from '../ScrollMenu/SeasonsScrollMenu'

import {
    MenuDiv,
    TitleDiv,
    ScrollMenuDiv,
} from './style'


export default function SeasonsMenu(props) {
    return (
        <MenuDiv key='menu-div'>
            <TitleDiv>
                Formula 1 Tracker
            </TitleDiv>
            <ScrollMenuDiv>
                <SeasonsScrollMenu {...props} onSelect={props.onSelect} />
            </ScrollMenuDiv>
        </MenuDiv>
    )
}