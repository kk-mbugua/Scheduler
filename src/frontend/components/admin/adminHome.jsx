import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import eImage from "./images/employee.jpg";
import pImage from "./images/position.png";
import sImage from "./images/schedule.png";
import CardActionArea from "@material-ui/core/CardActionArea";

class AdminHome extends Component {
  state = {};

  onClick = link => {
    //this.props.history.push(link);
  };

  render() {
    return (
      <Paper>
        <Grid spacing={24} container direction="row">
          <Grid item xs>
            <a href={"/"}>
              <Card
                id="Positions"
                onClick={() => {
                  this.onClick("/positions");
                }}
              >
                <CardActionArea>
                  <CardMedia style={{ height: 140 }} image={pImage} />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h3">
                      Positions
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </a>
          </Grid>

          <Grid item xs>
            <a href={"/"}>
              <Card
                id="schedule"
                onClick={() => {
                  this.onClick("/positions");
                }}
              >
                <CardActionArea>
                  <CardMedia style={{ height: 140 }} image={sImage} />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h3">
                      Schedule
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </a>
          </Grid>

          <Grid item xs>
            <a href={"/"}>
              <Card
                id="employees"
                onClick={() => {
                  this.onClick("/positions");
                }}
              >
                <CardActionArea>
                  <CardMedia style={{ height: 140 }} image={eImage} />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h3">
                      Employees
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </a>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default AdminHome;
