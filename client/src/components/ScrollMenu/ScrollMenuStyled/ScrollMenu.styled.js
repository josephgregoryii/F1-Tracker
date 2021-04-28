import styled from 'styled-components'

export const ArrowDiv = styled.div`
    padding: 20px;
    cursor: pointer;
`


export const MenuItemDiv = styled.div`
    color: whitesmoke;

    padding: 20px 30px;
    margin: auto;
    cursor: pointer;
    text-align: center;

    &.active {
        background: #15151e;
    }
    :hover {
    background: #44444b;
    }
`