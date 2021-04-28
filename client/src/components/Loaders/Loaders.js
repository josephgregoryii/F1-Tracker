import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'

import { 
    LinearProgressDiv,
    RingLoaderDiv,
    useStyles,
 } from './LoadersStyled/Loaders.styled'

import RingLoader from 'react-spinners/RingLoader'



export function LinearProgressComponent() {
    const linearProgressStyle = useStyles()
    return (
        <LinearProgressDiv className={linearProgressStyle.root}>
            <LinearProgress classes={linearProgressStyle} />
            <LinearProgress classes={linearProgressStyle} color="secondary" />
        </LinearProgressDiv>
    )
}

export function RingLoaderComponent() {
    return (
        <RingLoaderDiv >
            <RingLoader color={'#e51917'} />
        </RingLoaderDiv>
    )
}
