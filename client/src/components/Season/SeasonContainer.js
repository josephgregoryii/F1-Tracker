import React, { Component } from 'react'

import Season from './Season'
import ScrollMenuComponent from '../ScrollMenu/ScrollMenu'

import { MenuDiv } from './SeasonStyled/SeasonContainer.styled'

class SeasonsContainer extends Component {
    constructor() {
        super()
        this.state = {
            allSeasons: [],
            currentSeason: "",
            scrollToSelected: true,
            hideSingleArrow: true,
            wheel: true,
        }
        this.onSelect = this.onSelect.bind(this)

    }

    componentDidMount() {
        this.fetchData('/f1/seasons')
    }

    fetchData(url) {
        return fetch(url)
            .then(res => res.json())
            .then(seasons => this.setState({
                allSeasons: seasons,
                currentSeason: seasons[0].id
            }))
    }

    onSelect(key) {
        this.setState({ currentSeason: key });
    }

    render() {
        return (
            <div>
                <MenuDiv>
                    <ScrollMenuComponent {...this.state} onSelect={this.onSelect} />
                </MenuDiv>
                <Season
                    key={this.state.currentSeason}
                    season={this.state.currentSeason}
                />
            </div>
        );
    }
}

export default SeasonsContainer