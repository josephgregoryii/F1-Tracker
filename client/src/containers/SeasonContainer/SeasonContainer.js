import React, { Component } from 'react'
import axios from 'axios'

import { LinearProgressComponent } from '../../components/Loaders/Loaders'
import ScrollMenuComponent from '../../components/ScrollMenu/ScrollMenu'
import Season from '../../components/Season/Season'

import {
    MenuDiv,
    DivContainer,
} from './SeasonContainerStyled/SeasonContainer.styled'

class SeasonsContainer extends Component {
    constructor() {
        super()
        this.state = {

            isLoading: true,
            isError: false,

            allSeasons: [],
            currentSeason: "",

            // state variables to send to ScrollMenuComponent
            scrollToSelected: true,
            hideSingleArrow: true,
            wheel: true,
        }
        this.onSelect = this.onSelect.bind(this)

    }

    async componentDidMount() {
        try {
            const allSeasons = await axios.get('/f1/seasons').then(res => {
                return res.data
            })
            const currentSeason = allSeasons.results[0].season

            this.setState({
                isLoading: false,
                allSeasons: allSeasons.results,
                currentSeason: currentSeason,
            }
            )

        } catch (error) {
            console.error(error)
            this.setState({
                isLoading: false,
                isError: true
            })
        }
    }

    onSelect(key) {
        this.setState({
            currentSeason: key,
        });
    }

    render() {
        return (
            this.state.isLoading
                ? <LinearProgressComponent />
                :
                <DivContainer>
                    <MenuDiv key='menu-div'>
                        <ScrollMenuComponent {...this.state} onSelect={this.onSelect} />
                    </MenuDiv>
                    <Season
                        key={this.state.currentSeason}
                        currentSeason={this.state.currentSeason}
                    />
                </DivContainer>

        )
    }
}



export default SeasonsContainer