import React from 'react'

import { RaceStatusDiv } from './styled'

const RaceStatus = ({ race }) => {
    return (
        <RaceStatusDiv>
            {`Status: ${ race.status }`}
        </RaceStatusDiv>
    )
}

export default RaceStatus