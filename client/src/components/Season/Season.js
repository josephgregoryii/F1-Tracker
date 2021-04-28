import React, {
    Component
} from 'react'
import axios from 'axios'

import {
    RacesLoadingComponent,
    RacesComponent,
    RaceItemComponent,
} from '../Races/RaceComponents'

class Season extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            currentSeason: '',
            meta: '',
            seasonRaces: {}
        }
        this.sortRaces = this.sortRaces.bind(this)
        this.renderRaces = this.renderRaces.bind(this)
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

    renderRaces(seasonRaces) {
        return Array.from(seasonRaces)

            // Custom sort to sort races by scheduled date
            .sort(this.sortRaces)

            // Map array to Component
            .map(race => {
                return (
                    <RaceItemComponent race={race} />
                )
            })
    }

    render() {
        const seasonRaces = this.state.isLoading ?
            <RacesLoadingComponent /> :
            <RacesComponent
                seasonResponse={this.state.seasonResponse}
                seasonRaces={this.state.seasonRaces}
                meta={this.state.meta}
            />

        return seasonRaces
    }
}

export default Season