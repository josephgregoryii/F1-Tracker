import React, {
    Component
} from 'react'
import axios from 'axios'

import {
    RacesLoading,
    RaceItem,
    Races,
} from '../Races/RaceComponents'

class Season extends Component {
    constructor(props) {
        super(props)
        this.state = {
            meta: '',
            isLoading: true,
            seasonRaces: {},
            currentRace: {},
            selectedRace: {},
            currentSeason: '',
            
        }
        this.sortRaces = this.sortRaces.bind(this)
        this.renderRaces = this.renderRaces.bind(this)
        this.selectRace = this.selectRace.bind(this)
    }

    async componentDidMount() {
        await axios
            .get(`/f1/seasons/${this.props.currentSeason}/races`)
            .then(res => {
                const seasonRaces = this.renderRaces(res.data.results)
                setTimeout(() => {
                    this.setState({
                        currentSeason: this.props.currentSeason,
                        seasonRaces: seasonRaces,
                        isLoading: !this.state.isLoading,
                        meta: res.data.meta,
                    })
                }, 500)
            })


    }

    sortRaces(raceA, raceB) {
        return (raceA.start_date < raceB.start_date) ?
            -1 :
            ((raceA.start_date > raceB.start_date) ?
                1 :
                0
            )
    }
    selectRace({ race }) {
        this.setState({
            currentRace: race
        }, () => console.log(this.state.currentRace)
        )
    }

    renderRaces(seasonRaces) {
        return Array.from(seasonRaces)

            // Custom sort to sort races by scheduled date
            .sort(this.sortRaces)

            // Map array to Component
            .map(race => {
                return <RaceItem
                    key={race.race_id}
                    race={race}
                    selectRace={this.selectRace}
                />
            }, this)
    }

    render() {
        return this.state.isLoading ?
            <RacesLoading /> :
            <Races
                key={this.state.meta.title}
                seasonResponse={this.state.seasonResponse}
                seasonRaces={this.state.seasonRaces}
                meta={this.state.meta}
            />

    }
}

export default Season