import React, { Component } from "react";

import SelectedRace from "../../components/Race/SelectedRace";

import SessionResult from "../../components/SessionResult/SessionResult";

import RingProgressLoader from "../../components/Loaders/RingProgressLoader";

import axios from "axios";

import { RingLoaderDiv, SessionDiv } from "./styled";
import { isWeekend } from "../../helpers/isWeekend";

class Session extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedRace: {},
      raceId: 0,
      sessionId: 0,
      sessionResults: {},
    };
    this.intervalId = null;
    this.selectSession = this.selectSession.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.setState(
      {
        selectedRace: this.props.selectedRace,
        raceId: this.props.selectedRace.race_id,
      },
      //() => console.log("new mount")
    );
  }

  componentDidUpdate(prevState) {
    if (prevState.selectedRace.race_id !== this.props.selectedRace.race_id) {
      this.setState({ raceId: null });

      setTimeout(() => {
        this.setState({
          selectedRace: this.props.selectedRace,
          raceId: this.props.selectedRace.race_id,
          sessionId: 0,
          sessionResults: {},
        });
      }, 500);
    }
  }

  componentWillUnmount() {
    console.log("unmounted");
    clearInterval(this.intervalId);
    this.setState({
      sessionId: 0,
      sessionResults: {},
    });
  }

  async selectSession(session) {
    this.fetchData(session);
    if (isWeekend()) {
      if (this.intervalId !== null) {
        clearInterval(this.intervalId)
      }
      // update session every minute during a race weekend
      this.intervalId = setInterval(() => this.fetchData(session), 1000 * 60);
    }
  }

  async fetchData(session) {
    await axios.get(`/f1/session/${session}`).then((res) => {
      const results = res.data.results;
      this.setState(
        {
          sessionId: session,
          sessionResults: results,
        },
        //() => console.log("new sesion", this.state)
      );
    });
  }

  render() {
    return this.state.raceId ? (
      <div>
        <SelectedRace
          race={this.state.selectedRace}
          selectSession={this.selectSession}
          sessionResults={
            this.state.sessionId ? this.state.sessionResults : null
          }
          sessionId={this.state.sessionId ? this.state.sessionId : null}
        />
        <SessionDiv>
          <SessionResult
            sessionResults={
              this.state.sessionId ? this.state.sessionResults : null
            }
          />
        </SessionDiv>
      </div>
    ) : (
      <RingLoaderDiv>
        <RingProgressLoader />
      </RingLoaderDiv>
    );
  }
}

export default Session;
