import React from 'react'
import FadeIn from 'react-fade-in'

import {
    RaceDiv,
    RacesDiv,
    RaceHeaderDiv,
    UnderlineDiv,
    RaceItemLi,
} from './RacesStyled/Races.styled'


import {
    RingLoaderComponent
} from '../Loaders/Loaders'


export function SelectedRace(props) {
    return (
        <RaceDiv >
            test test testicales
        </RaceDiv>
    )
}

export function RacesLoading() {
    return (
        <RacesDiv>
            <UnderlineDiv />
            <RingLoaderComponent />
        </RacesDiv>
    )
}

export function Races(props) {
    return (
        <RacesDiv key='title'>
            <RaceHeaderDiv key='header'>
                <UnderlineDiv key='underline'/>
                <FadeIn key='fade'>
                    {props.meta.title}
                </FadeIn>
            </RaceHeaderDiv>
            <FadeIn key='fade'>
                {props.seasonRaces}
            </FadeIn>
        </RacesDiv>

    )
}

export function RaceItem(props) {
    return (
        <RaceItemLi
            key={props.race.race_id}
            className={props.race.status}
            selectRace={() => props.selectRace}
            > {props.race.name}
        </RaceItemLi>)
}