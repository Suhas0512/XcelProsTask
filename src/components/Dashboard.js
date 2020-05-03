import React from 'react'
import { Card } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import Dot from "../Assets/SVG/dot.svg";
import Star from "../Assets/SVG/star.svg";
import Phone from "../Assets/SVG/phone.svg";
import Mail from "../Assets/SVG/mail.svg";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Dropdown, ButtonGroup } from "react-bootstrap";

const UserName = styled.h4`
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 24px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const OtherText = styled.p`
  font-family: "Nunito", sans-serif;
  font-style: normal;
  font-size: 11px;
  color: "#DCDCDC";
  opacity: 0.5;
`;

const SmallText = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-size: 11px;
  color: "#DCDCDC";
  opacity: 0.5;
`;
export default function UserCard(props) {
  const [width, setWidth] = React.useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  return (
    <div
      style={{
        marginTop: 70,
        marginLeft: width > 700 ? 50 : 150,
      }}
    >
      <Card
        style={{
          width: "15rem",
          borderRadius: "10px",
          boxShadow:
            "0px 9px 18px rgba(0, 0, 0, 0.18), 0px 6px 5px rgba(0, 0, 0, 0.24)",
        }}
      >
        <Grid container>
          <Grid item xs={12} md={6}>
            <Grid container justify="flex-start">
              <Dropdown
                as={ButtonGroup}
                style={{ paddingLeft: 8, paddingTop: 8 }}
              >
                <Dropdown.Toggle
                  split
                  id="dropdown-split-basic"
                  style={{ background: "white", border: "white" }}
                >
                  <img src={Dot} alt="dot" />
                </Dropdown.Toggle>
              </Dropdown>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container justify="flex-end">
              <img
                src={Star}
                alt="dot"
                style={{ paddingRight: 10, paddingTop: 10 }}
              />
            </Grid>
          </Grid>
          <Card.Body>
            <Grid item xs={12} md={12}>
              <Grid container justify="center">
                <div style={{ width: 110, height: 110 }}>
                  <CircularProgressbarWithChildren
                    value={25}
                    background={true}
                    styles={buildStyles({
                      pathColor: props.color,
                      textColor: "#f88",
                      trailColor: "#ffffff",
                      backgroundColor: "#7DBAE6",
                    })}
                  >
                    <img
                      src={props.images}
                      alt="dot"
                      style={{ width: 100, height: 100 }}
                    />
                  </CircularProgressbarWithChildren>
                </div>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container justify="center">
                <UserName>{props.name}</UserName>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container justify="center">
                <OtherText>{props.role}</OtherText>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Grid container>
                  <img src={Mail} alt="phone"></img>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container justify="flex-end">
                  <SmallText>{props.email}</SmallText>
                </Grid>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Grid container>
                  <img src={Phone} alt="mail"></img>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container justify="flex-end">
                  <SmallText>{props.phone}</SmallText>
                </Grid>
              </Grid>
            </Grid>
          </Card.Body>
        </Grid>
      </Card>
    </div>
  );
}
