import React, { Component } from 'react'
import { LinearProgress } from '@material-ui/core'
import styled from 'styled-components'

class Season extends Component {
    constructor(props) {
        super(props)
        this.state = {
            render: false,
            seasonID: "",
            seasonRaces: {},
            seasonDrivers: {},
            seasonObj: {}
        }
    }

    componentDidMount() {
        if (this.props.season) {
            // Timer is set to disable multiple API calls within a single second
            setTimeout(function () {
                this.setState({ render: true })
                this.fetchData(`/f1/seasons/stage/${this.props.season}`)
            }.bind(this), 1000)

        }

    }

    fetchData(url) {
        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(season => this.setState({
                seasonRaces: season.stage.stages,
                seasonDrivers: season.stage.competitors,
                seasonObj: season
            }
                //, () => console.log(`state for ${this.state.seasonObj.stage.description}`, this.state)
            ))
            .catch(error => console.log(error))
    }

    sortRaces(raceA, raceB) {
        return (raceA.scheduled < raceB.scheduled) ? -1 : ((raceA.scheduled > raceB.scheduled) ? 1 : 0)
    }

    render() {
        //If this.state.render == true, which is set to true by the timer.
        if (this.state.render) { 
            const SeasonRaceInfo = Array.from(this.state.seasonRaces)

                // Filter out cancelled races. May change later
                .filter(race => race.status !== 'Cancelled')

                // Custom sort to sort races by scheduled date
                .sort(this.sortRaces)

                // Map array to React Component
                .map(race => {
                    //console.log('race', race)
                    return (
                        <RaceDiv 
                            key={race.id} 
                            className={race.status}>
                            {race.description}
                        </RaceDiv>
                    )
                })
            return (
                <div>
                    {SeasonRaceInfo}
                </div>
            )
        }
        else {
            return (
                <div>
                    <LinearProgress />
                    <LinearProgress color="secondary" />
                </div>
            )
        }

    }
}
export default Season

const RaceDiv = styled.div`
    text-align: center;
`