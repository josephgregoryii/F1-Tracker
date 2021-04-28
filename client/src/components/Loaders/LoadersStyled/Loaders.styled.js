import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'

export const LinearProgressDiv = styled.div`
    width: 100%;
`

export const RingLoaderDiv = styled.div`
    margin: auto;
    width: 50%;
`

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    colorPrimary: {
        backgroundColor: '#44444b',
    },
    colorSecondary: {
        backgroundColor: '#e51917',
    },
    barColorPrimary: {
        backgroundColor: '#15151e',
    },
    barColorSecondary: {
        backgroundColor: '#15151e'
    }
}));