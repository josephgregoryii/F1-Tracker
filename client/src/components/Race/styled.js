import styled from 'styled-components'

import {
    commonPadding,
    commonRaceAlignment,
    commonRacePosition
} from '../../styles/commonStyles'

export const RacesDiv = styled.div`
    overflow: auto;
    position: fixed;
    display: inline-block;
    top: 120px;
    left: 31px;
    bottom: 7%; 
    color: whitesmoke;

    width: 250px;
`

export const Image = styled.img`
    height: auto;
    width: 50%;
    max-width: 353px;
    min-width: 270px;
    background: darkgray;
    border-radius: 20px;

    :hover {

        top:-25px;
        left:-35px;
        width: 353px;
        height:auto;
        display:block;
        z-index:999;
    }
    
`

export const RaceResultDiv = styled.div`
    ${commonRaceAlignment}
    ${commonRacePosition}
    ${commonPadding}
    color: white;
    
    left: 780px;
    bottom: 7%;

    @media screen and (max-width: 1000px) {
        display: none;
    }

`

export const RaceDiv = styled.div`
    ${commonRacePosition}
    ${commonPadding}

    top: 120px;
    bottom: 7%;
    color: whitesmoke;


    float: right;
   
    left: 370px;

    @media screen and (max-width: 700px) {
        display: none;
    }

`

export const RaceHeaderDiv = styled.div`

    color: whitesmoke;
    font-size: x-large;
    align-items: center;
 
    position: fixed;
    width: 100%;
    top: 80px;

    &.secondary {
        ${ commonPadding }
        left: 780px;
        top: 74px;
        font-size: large;
    }
    
`
export const UnderlineDiv = styled.div`
    border-bottom: solid 4px whitesmoke;
    position: fixed;
    top: 110px;
    left: 33px;
    right: 25px;
`

export const RaceItemLi = styled.li`
    ${commonPadding}
    list-style-type:none;
    color: whitesmoke;
    text-align: left;

    :hover {
        opacity: 0.5;
    }

    &.selected {
        background-color: #e51917;
        transition: background-color 0.5s linear;
    }


`
export const RingLoaderDiv = styled.div`
    ${commonRaceAlignment}
    ${commonRacePosition}
    ${commonPadding}

    float: right;
    border-radius: 20px;
   
    left: 800px;

`