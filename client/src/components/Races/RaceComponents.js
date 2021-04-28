import React from 'react'
import FadeIn from 'react-fade-in'

import {
    RacesDiv,
    RaceHeaderDiv,
    UnderlineDiv,
    RaceItemDiv,
} from './RacesStyled/Races.styled'

import {
    RingLoaderComponent
} from '../Loaders/Loaders'


export function RacesLoadingComponent() {
    return (
        <RacesDiv>
            <UnderlineDiv />
            <RingLoaderComponent />
        </RacesDiv>
    )
}

export function RacesComponent(props) {
    return (
        <RacesDiv key='title-div'>
            <RaceHeaderDiv>
                <UnderlineDiv />
                <FadeIn >
                    {props.meta.title}
                </FadeIn>
            </RaceHeaderDiv>
            <FadeIn key='fade-in'>
                {props.seasonRaces}
            </FadeIn>
        </RacesDiv>
    )
}

export function RaceItemComponent(props) {
    return (
        <RaceItemDiv
            key={props.race.race_id}
            className={props.race.status}>
            {props.race.name}
        </RaceItemDiv>)
}