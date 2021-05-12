import styled from 'styled-components'

export const Circle = styled.div`
    @keyframes fade {
        from { opacity: 1.0; }
        50% { opacity: 0.25; }
        to { opacity: 1.0; }
    }                                                                                                                                                                                                                                  

    @-webkit-keyframes fade {
        from { opacity: 1.0; }
        50% { opacity: 0.25; }
        to { opacity: 1.0; }
    }


    animation:fade 3s infinite;
    -webkit-animation:fade 3s infinite;
    position: fixed;
    display: inline-block;
    background-color: red;
    top: 84px;
    right: 95px;

    border-radius: 50%;
    width: 20px;
    height: 20px;
`

export const WrapperDiv = styled.div`
    position: fixed;
    top: 84px;
    right: 120px;

`