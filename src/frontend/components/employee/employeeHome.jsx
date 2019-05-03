import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import hImage from "./images/hours.png";
import sImage from "./images/schedule.png";
import CardActionArea from "@material-ui/core/CardActionArea";

class EmployeeHome extends Component {
  state = {};

  onClick = link => {
    // console.log(link)
    // return(<Redirect to={link}/>)
  };

  render() {
    return (
      <Paper>
        <Grid spacing={24} container direction="row">
          <Grid item xs>
            <a href="/myhours">
              <Card
                id="myHours"
                onClick={() => {
                  this.onClick("/myHours");
                }}
              >
                <CardActionArea>
                  <CardMedia style={{ height: 140 }} image={hImage} />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h3">
                      My Hours
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              </a>
          </Grid>

          <Grid item xs>
            <a href={"/schedule"}>
              <Card
                id="schedule"
                onClick={() => {
                  this.onClick("/schedule");
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

          {/* <Grid item xs>
            <a href={"/coverage"}>
              <Card
                id="employees"
                onClick={() => {
                  this.onClick("/coverage");
                }}
              >
                <CardActionArea>
                  <CardMedia style={{ height: 140 }} image={eImage} />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h3">
                      Request Coverage
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </a>
          </Grid> */}
        </Grid>
      </Paper>
    );
  }
}

export default EmployeeHome;
