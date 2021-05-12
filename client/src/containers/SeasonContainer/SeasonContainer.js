import React, { Component } from 'react'
import axios from 'axios'

import { LinearProgressLoader, SeasonsMenu } from '../../components'
import SeasonRaces from '../SeasonRacesContainer/SeasonRaces'

import { DivContainer } from './styled'



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
            translate: -1,
        }
        this.onSelect = this.onSelect.bind(this)

    }

    async componentDidMount() {
        await axios
            .get('/f1/seasons')
            .then(res => {

                // Initialize currentSeason to top of JSON
                const currentSeason = res.data.results[0].season
                this.setState({
                    isLoading: !this.state.isLoading,
                    allSeasons: res.data.results,
                    currentSeason: currentSeason,
                })

            })

    }

    onSelect(key) {
        this.setState({
            currentSeason: key,
        });
    }

    render() {
        return this.state.isLoading ?
            <LinearProgressLoader /> :
            <DivContainer>
                <SeasonsMenu
                    {...this.state}
                    onSelect={this.onSelect}
                />
                <SeasonRaces
                    key={this.state.currentSeason}
                    currentSeason={this.state.currentSeason}
                />

            </DivContainer>
    }
}
export default SeasonsContainer