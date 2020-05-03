import React from "react";
import { Navbar } from "react-bootstrap";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import ProfilePic from "../Assets/PNG/profile.png";
import { Link } from "react-router-dom";
const Styles = styled.div`
  .navbar {
    background-color: #fff;
    padding-left: 120px;
    width: 100%;
  }
  a,
  .navbar-nav,
  .navbar-light .nav-link {
    color: blue;
    text-decoration: none;
    &:hover {
      color: black;
    }
  }
  .navbar-brand {
    font-size: 1.4em;
    background-color: #fff;
    color: "black";
    &:hover {
      color: white;
    }
  }
`;

const Title = styled.h1`
  font-family: "Nunito", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  letter-spacing: 1px;
`;
const NavigationBar = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });
  return (
    <Styles>
      <Navbar expand="lg" style={{ boxShadow: "none" }}>
        <Grid container>
          <Grid item xs={12} sm={3} md={3}>
            <Grid container justify="flex-start">
              <Link to="/" style={{ color: "black" }}>
                <Title>DASHBOARD</Title>
              </Link>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={3} md={2}>
            <Grid container justify="flex-start">
              <Link to="/login">
                <p >Login</p>
              </Link>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={3} md={2}>
            <Grid container justify="flex-start">
              <Link to="/register">
                <p>Register</p>
              </Link>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={3} md={5}>
            <Grid
              container
              direction="row"
              justify={width < 700 ? "flex-start" : "flex-end"}
              alignItems="center"
            >
              <img
                src={ProfilePic}
                alt="profile pic"
                className="rounded-circle"
                style={{ width: 50, height: 50 }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Navbar>
    </Styles>
  );
};

export default NavigationBar;
