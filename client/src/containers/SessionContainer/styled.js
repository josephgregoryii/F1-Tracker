import styled from 'styled-components'

import {
    commonRaceAlignment,
    commonRacePosition,
    commonPadding,
} from '../../styles/commonStyles'

export const SessionDiv = styled.div`
    ${commonRaceAlignment}
    ${commonRacePosition}
    display: grid;
    grid-template-columns: auto auto auto auto auto;


    color: white;
    top: 120px; 
    left: 780px;
    bottom: 7%;

    @media screen and (max-width: 1000px) {
        display: none;
    }

`

export const RingLoaderDiv = styled.div`
    ${commonRaceAlignment}
    ${commonRacePosition}
    ${commonPadding}

    float: right;
    border-radius: 20px;
   
    left: 400px;

`