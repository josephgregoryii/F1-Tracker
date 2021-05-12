import React, { Component } from "react";
import axios from "axios";

import RacesLoading from "../../components/Race/RacesLoading";
import RaceItem from "../../components/Race/RaceItem";
import AllRaces from "../../components/Race/AllRaces";
import Session from "../SessionContainer/SessionContainer";

class SeasonRaces extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meta: "",
      isLoading: true,
      seasonRaces: {},
      currentRace: {},
      selectedRace: {},
      currentSeason: "",
      selectedRaceId: null,
    };
    this.sortRaces = this.sortRaces.bind(this);
    this.renderRaces = this.renderRaces.bind(this);
    this.selectRace = this.selectRace.bind(this);
  }

  async componentDidMount() {
    await axios
      .get(`/f1/seasons/${this.props.currentSeason}/races`)
      .then((res) => {
        setTimeout(() => {
          this.setState({
            currentSeason: this.props.currentSeason,
            seasonRaces: res.data.results,
            isLoading: !this.state.isLoading,
            meta: res.data.meta,
          });
        }, 500);
      });
  }

  sortRaces(raceA, raceB) {
    /* Custom sort to sort races from start_date */
    return raceA.start_date < raceB.start_date
      ? -1
      : raceA.start_date > raceB.start_date
      ? 1
      : 0;
  }

  selectRace(race) {
    /* Callback function to set state for user-selected race */
    //console.log('r', race);
    this.setState(
      {
        selectedRaceId: race.race_id,
        selectedRace: race,
      } //() => console.log(this.state.selectedRaceId)
    );
  }

  renderRaces(seasonRaces) {
    return (
      Array.from(seasonRaces)

        // Custom sort to sort races by scheduled date
        .sort(this.sortRaces)

        // Map array to Component
        .map((race) => {
          return (
            <RaceItem
              key={race.race_id}
              race={race}
              selectRace={this.selectRace}
              className={`${
                this.state.selectedRaceId === race.race_id ? "selected" : ""
              }`}
            />
          );
        }, this)
    );
  }

  render() {
    const seasonRaces = this.renderRaces(this.state.seasonRaces);

    return this.state.isLoading ? (
      <RacesLoading />
    ) : (
      <div>
        <AllRaces
          key={this.state.meta.title}
          seasonResponse={this.state.seasonResponse}
          seasonRaces={seasonRaces}
          meta={this.state.meta}
        />
        {this.state.selectedRaceId ? (
          <Session 
            selectedRace={this.state.selectedRace}
             />
        ) : null}
      </div>
    );
  }
}

export default SeasonRaces;
