import React from 'react'
import FadeIn from 'react-fade-in'

import {
    RacesDiv,
    RaceHeaderDiv,
    UnderlineDiv
} from './styled'

export default function AllRaces(props) {
    return (
        <RacesDiv key='title'>
            <RaceHeaderDiv key='header'>
                <UnderlineDiv key='underline' />
                <FadeIn key='fade' className='noselect' >
                    {props.meta.title}
                </FadeIn>
            </RaceHeaderDiv>
            <FadeIn key='fade'>
                {props.seasonRaces}
            </FadeIn>
        </RacesDiv>

    )
}