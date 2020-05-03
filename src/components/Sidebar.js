import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { ReactComponent as PlayStore } from "../Assets/SVG/playstore.svg";
import { ReactComponent as HomePage } from "../Assets/SVG/home-page.svg";
import { ReactComponent as TimeTable } from "../Assets/SVG/timetable.svg";
import { ReactComponent as Fever } from "../Assets/SVG/fever.svg";
import { ReactComponent as Info } from "../Assets/SVG/information.svg";
import { ReactComponent as University } from "../Assets/SVG/university.svg";
import { ReactComponent as Resturant } from "../Assets/SVG/restaurant.svg";
import Grid from "@material-ui/core/Grid";

const StyledSideNav = styled.div`
  position: fixed;
  height: 100%;
  top: 0px;
  width: 100px;
  background-color: #fff;
  overflow-x: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  bottom: 0px;
`;

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePath: props.location.pathname,
    };
  }

  render() {
    return (
      <StyledSideNav>
        <Grid
          container
          direction="column"
          justify="space-evenly"
          alignItems="center"
          spacing={8}
        >
          <Grid item>
            <PlayStore
              style={{
                width: "90px",
                height: "90px",
                paddingTop: "30px",
              }}
            />
          </Grid>
          {[
            <HomePage />,
            <TimeTable />,
            <Fever />,
            <Info />,
            <University />,
            <Resturant />,
          ].map((ele, i) => (
            <Grid item xs={12} key={i}>
              {ele}
            </Grid>
          ))}
        </Grid>
      </StyledSideNav>
    );
  }
}

const RouterSideNav = withRouter(SideNav);

export default class Sidebar extends React.Component {
  render() {
    return <RouterSideNav></RouterSideNav>;
  }
}
