import styled from 'styled-components'

import { commonPadding } from '../../styles/commonStyles'

export const DateDiv = styled.div`
    ${commonPadding}
    color: whitesmoke;
    font-size: large;
    user-select: none;
    position: relative;

    top: 68px;
    right: 25px;
    left: 370px;

    @media screen and (max-width: 700px) {
        display: none;
    }
`

export const DateBlockDiv = styled.div`
    width: auto;
    float: left;
`