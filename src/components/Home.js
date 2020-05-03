import React from "react";
import UserCard from "../components/Dashboard";
import NavigationBar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";

const Home = (props) => {
  return (
    <>
      <NavigationBar />
      <Sidebar />
      <Grid container>
        <Grid item xs={12} sm={2} md={1} style={{ paddingRight: 50 }}></Grid>
        <Grid item xs={12} sm={10} md={11}>
          <Grid container spacing={2}>
            {props.users.map((ele) => {
              return (
                <Grid item xs={12} md={3} sm={6} key={ele.name}>
                  <UserCard
                    id={ele.id}
                    name={ele.name}
                    email={ele.email}
                    phone={ele.phone}
                    role={ele.role}
                    color={ele.color}
                    images={ele.images}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};
export default connect(mapStateToProps)(Home);
