import React from 'react'

import {
    RaceItemLi,
} from './styled'


export default function RaceItem(props) {
    return (
        <RaceItemLi
            key={props.race.race_id}
            className={`${props.race.status} ${props.className} noselect`}
            onClick={() => props.selectRace(props.race)}
        > { props.race.name}
        </RaceItemLi>)
}