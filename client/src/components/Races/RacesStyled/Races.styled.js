import styled from 'styled-components'

export const RacesDiv = styled.div`
    overflow: auto;
    position: fixed;
    display: inline-block;
    top: 15%;
    bottom: 5%; 
    margin: 2% 50% 2% 2%;
    width: 23%;

    @media screen and (max-width: 700px) {
        display: none;
    }

`

export const RaceDiv = styled.div`
    align-items: center;
    position: fixed;
    white-space: nowrap;
    float: right;
    background: whitesmoke;
    width: 40%;
    top:20%;
    left: 30%;
    right: 10%;
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

export const RaceItemLi = styled.li`
    list-style-type:none;
    color: whitesmoke;
    text-align: left;
    padding: 10px 5px 10px 5px;
    word-wrap: break-word;

    :hover {
        background-color: #e51917;
    }
`