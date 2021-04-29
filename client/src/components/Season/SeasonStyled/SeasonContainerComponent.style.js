import styled from 'styled-components'

export const MenuDiv = styled.div`
    font-family: "Formula1-Bold";
    position: fixed;
    width: 100%;
    display: inline-block;

    background: linear-gradient(to right, #e51917 0%, #15151e 100%);
    user-select: none;
    cursor: pointer;
    border: none;
`

export const ScrollMenuDiv = styled.div`
    @media screen and (max-width: 700px) {
        display: none;
    }

`


export const TitleDiv = styled.div`
    font-family: 'Formula1-Wide';
    text-decoration: underline;
    display: flex;
    align-items: center;
    position: absolute;
    float: left;
    top: 30%;
    right: 5%;
    color: whitesmoke;

    @media screen and (max-width: 700px) {
        right: 0%;
        left: 0%;
        background: linear-gradient(to right, #e51917 0%, #15151e 100%);
        padding: 5%;
        position: absolute;
    }
`
