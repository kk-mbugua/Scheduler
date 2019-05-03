import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Locations from "./locations";
import Positions from "./positions";
import styles from "./positionsAndLocations.module.css";

class PositionsAndLocations extends Component {
  state = {
    // positionsExample: [
    //   {
    //     id: 1,
    //     name: "Assistant 1",
    //     location: "Help Desk",
    //     workdays: { Tuesday: { from: "0800", to: "2200" } }
    //   }
    // ],
    // locationsExample: [{ name: "Help Desk", positions:[{positions object}s] positionCount: 1}],
    positions: [],
    locations: []
  };

  componentDidMount() {
    this.getLocations();
    this.getPositions()
  }

  getLocations = () => {
    fetch("/api/locations")
      .then(res => res.json())
      .then(rawLocations => {
        let locations = [];
        rawLocations.forEach(rawLocation => {
          
          const location = {
            id: rawLocation._id,
            name: rawLocation.name,
            positions: [],
            positionCount: 0
          };
          locations.push(location);
        });
        this.setState({ locations });
      });
  };

  getPositions = () => {
    fetch("/api/positions")
      .then(res => res.json())
      .then(rawPositions => {
        let positions = [];
        rawPositions.forEach(rawPosition => {
          const position = {
            id: rawPosition._id,
            name: rawPosition.name,
            location: rawPosition.location_name,
            workdays: rawPosition.days
          };
          positions.push(position);
        });
  
        this.setState({ positions });
      });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.positions.length !== this.state.positions.length &&
      this.state.positions.length > 0
    ) {
      this.updateLocations();
    }

  }

  updateLocations = () => {
    let locations = [...this.state.locations];
    locations.forEach(location => {
      const positions = this.state.positions.filter(position => {
        return position.location === location.name;
      });

      positions.forEach(position => {
        location.positions.push(position);
      });

      location.positionCount = location.positions.length;
    });

    this.setState({ locations });
  };

  handleDeleteLocationOnClick = name => {
    fetch(`/api/locations/${name}`, { method: "DELETE" });
    this.getLocations();
  };

  handleAddLocation = sent => {
    fetch("/api/locations", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: sent,
        number_of_positions: 0
      })
    });

    const location = { name: sent, positions: [], positionCount: 0 };
    let locations = [...this.state.locations];
    locations.unshift(location);
    this.setState({ locations });
  };

  handleDeletePositionOnClick = id => {
    let oldPositions = [...this.state.positions];
    let positions = oldPositions.filter(position => {
      return position.id !== id;
    });
    this.setState({ positions });
  };

  handleAddPosition2 = (sent)=>{
    fetch("/api/positions", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: sent.positionName,
        location_name: sent.location_name,
        days: sent.days.filter(day=>{
          return !sent.selected.includes(day.name)
        }),
        number_of_positions: 0
      })
    });
  }

  handleOnAddPosition = sent => {
    this.handleAddPosition2(sent)
    let { selected, days, location_name, positionName } = sent;
    const position = {
      id: this.state.positions.length + 1,
      name: positionName,
      location: location_name,
      workdays: {}
    };

    days.forEach(day => {
      if (!selected.includes(day.name)) {
        position.workdays[day.name] = { from: day.from, to: day.to };
      }
    });

    const positions = [...this.state.positions];
    positions.unshift(position);
    this.setState({ positions });
  };

  render() {
    return (
      <Grid container direction="row" justify="space-around">
        <Grid className={styles.gridItem} item>
          <Locations
            locations={this.state.locations}
            onDelete={this.handleDeleteLocationOnClick}
            onAdd={this.handleAddLocation}
          />
        </Grid>
        <Grid className={styles.gridItem} item>
          <Positions
            positions={this.state.positions}
            onDelete={this.handleDeleteLocationOnClick}
            onAdd={this.handleOnAddPosition}
            locations={this.state.locations}
          />
        </Grid>
      </Grid>
    );
  }
}

export default PositionsAndLocations;
