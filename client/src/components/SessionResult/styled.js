import styled from 'styled-components'

import {
    commonPadding,
    //    commonRacePosition, 
    //    commonRaceAlignment 
} from '../../styles/commonStyles'

export const SessionResultDiv = styled.div`
    ${commonPadding}

    list-style-type:none;
    color: whitesmoke;
    text-align: left;
    word-wrap: break-word;

    &.selected {
        background-color: #e51917;
        transition: background-color 0.5s linear;
    }
`