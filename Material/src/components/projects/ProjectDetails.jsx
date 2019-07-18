import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { intern } from "../../store/actions/applyActions";

import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";

import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import typographyStyle from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.jsx";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

class ProjectDetails extends Component {
  render() {
    const { classes } = this.props;

    const { project, auth, id, profile } = this.props;

    const links =
      profile.category === "company" ? (
        <div />
      ) : (
        <div>
          <Link to={"/apply/" + id}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={1} className={classes.textCenter}>
                <Button color="primary">Apply</Button>
              </GridItem>
            </GridContainer>
          </Link>
        </div>
      );
    if (!auth.uid) return <Redirect to="/signin" />;
    if (project) {
      return (
        <div>
          <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div>
              <div className={classes.container}>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={12}>
                    <div className={classes.profile}>
                      <div>
                        {/* <img
                          src="assets/img/faces/christian.jpg"
                          alt="..."
                          className={imageClasses}
                        /> */}
                      </div>
                      {/* <div className={classes.name}>
                      <GridItem xs={12} sm={12} md={3}>
                          <SnackbarContent
                            message={
                              <h2 className={classes.title}>
                                {project.companyname}
                              </h2>
                            }
                          />
                        </GridItem> </div>*/}
                      <div>
                        <h2 className={classes.title}>{project.companyname}</h2>
                      </div>
                    </div>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <SnackbarContent message={"Job: " + project.job} />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <SnackbarContent
                      message={"Duration: " + project.duration}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <SnackbarContent
                      message={"Location: " + project.location}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <SnackbarContent message={"Stipend: " + project.stipend} />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <SnackbarContent
                      message={"Start Date: " + project.startdate}
                    />{" "}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <SnackbarContent
                      message={"Posted on: " + project.postedon}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <SnackbarContent
                      message={"Apply By: " + project.postedon}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <SnackbarContent
                      message={
                        "Internship Available: " + project.internshipsavailable
                      }
                    />
                  </GridItem>
                </GridContainer>
                <SnackbarContent
                  message={"About Company: " + project.aboutcompany}
                />
                <SnackbarContent
                  message={"About Internship: " + project.aboutinternship}
                />
                <SnackbarContent
                  message={"Skill Required: " + project.skillrequired}
                />
                <SnackbarContent
                  message={"Who can Apply: " + project.whocanapply}
                />
                <SnackbarContent message={"Perk: " + project.perk} />
              </div>
              <div> {links} </div>
            </div>
          </div>
          <Footer />
        </div>
      );
    } else {
      return (
        <div className="container center">
          <p>Loading project...</p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    id: id
  };
};
const mapDispatchToProps = dispatch => {
  return {
    intern: apply => dispatch(intern(apply))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(profilePageStyle),
  withStyles(workStyle),
  firestoreConnect([
    {
      collection: "projects"
    }
  ]),
  withStyles(typographyStyle)
)(ProjectDetails);
