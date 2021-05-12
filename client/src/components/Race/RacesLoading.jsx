import React from 'react'
import RingLoader from '../Loaders/RingProgressLoader'

import { 
    RacesDiv,
    UnderlineDiv 
} from './styled'

export default function RacesLoading() {
    return (
        <RacesDiv>
            <UnderlineDiv />
            <RingLoader />
        </RacesDiv>
    )
}