import React, { Component } from "react";
import ProjectList from "../projects/ProjectList.jsx";
import Notifications from "./Notifications.jsx";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";
import Footer from "components/Footer/Footer.jsx";

class Dashboard extends Component {
  render() {
    const { projects, auth, notifications, profile, classes } = this.props;
    const links =
      profile.category === "company" ? (
        <div className="col s12 m5 offset-m1">
          <Notifications notifications={notifications} />
        </div>
      ) : (
        <div />
      );
    if (!auth.uid) return <Redirect to="/home" />;

    return (
      <div>
        <Parallax tiny />

        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <div className="row">
                <div className="col s12 m6">
                  <ProjectList projects={projects} props={this.props} />
                </div>
                {links}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    notifications: state.firestore.ordered.notifications
  };
};

export default compose(
  connect(mapStateToProps),
  withStyles(profilePageStyle),
  firestoreConnect([
    { collection: "projects", orderBy: ["createdAt", "desc"] },
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] }
  ])
)(Dashboard);
