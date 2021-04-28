import styled from 'styled-components'

export const RacesDiv = styled.div`
    overflow: auto;
    position: fixed;
    top: 15%;
    bottom: 5%; /* specify bottom */
    margin: 2% 50% 2% 2%;
    width: 25%;
`
export const RaceHeaderDiv = styled.div`
    color: whitesmoke;
    font-size: x-large;
    align-items: center;
 
    position: fixed;
    width: 97%;
    top: 12%;
`
export const UnderlineDiv = styled.div`
    border-bottom: solid 4px whitesmoke;
    position: fixed;
    width: 97%;
    top: 16.1%;
`

export const RaceItemDiv = styled.div`
    color: whitesmoke;
    text-align: left;
    padding: 10px 5px 10px 5px;
    word-wrap: break-word;

    :hover {
        background-color: #e51917;
    }
`