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
  }

  getLocations = () => {
  
    fetch("/api/locations")
      .then(res => res.json())
      .then(rawLocations => {
        let locations = []
        rawLocations.forEach(rawLocation=>{
          const location ={ name: rawLocation.name,
            positions:[],
            positionCount: rawLocation.number_of_positions
          }
          locations.push(location)
        })
        this.setState({locations})
      })
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
    let oldLocations = [...this.state.locations];
    let locations = oldLocations.filter(location => {
      return location.name !== name;
    });
    this.setState({ locations });
  };

  handleAddLocation = sent => {
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

  handleOnAddPosition = sent => {
    let { selected, days, location, positionName } = sent;
    const position = {
      id: this.state.positions.length + 1,
      name: positionName,
      location: location,
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
