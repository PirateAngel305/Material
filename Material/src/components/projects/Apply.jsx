import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { intern } from "../../store/actions/applyActions";

import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Footer from "components/Footer/Footer.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import typographyStyle from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.jsx";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";
class Apply extends Component {
  state = {
    companyName: "",
    job: ""
  };
  handleLoad = e => {
    this.setState({
      companyName: this.props.project.companyname,
      job: this.props.project.job
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    // this.props.intern(this.state);
    // this.props.history.push("/");
  };
  render() {
    const { classes } = this.props;
    const { project, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    if (project) {
      return (
        <div>
          <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div>
              <div className={classes.container}>
                {/* <form className="white" onSubmit={this.handleSubmit}> */}
                <div className="card-content">
                  <form className="white" onSubmit={this.handleSubmit}>
                    <div className="card-content">
                      <div>
                        <label id="companyName" onLoad={this.handleLoad}>
                          {project.companyname}
                        </label>
                      </div>
                      <div>
                        <label id="job" onLoad={this.handleLoad}>
                          {project.job}
                        </label>
                      </div>

                      <div>
                        <button
                          className="btn pink lighten-1 z-depth-0"
                          onClick={this.handleLoad}
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                {/* </form> */}
                {/* <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={12}>
                    <div className={classes.profile}>
                      <div>
                        <h2 className={classes.title}>{project.companyname}</h2>
                      </div>
                    </div>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <SnackbarContent message={"Job: " + project.job} />
                  </GridItem>
                </GridContainer>
              </div>
              <div>
                <GridContainer justify="center">
                  <GridItem
                    xs={12}
                    sm={12}
                    md={1}
                    className={classes.textCenter}
                  >
                    <Button color="primary" onClick={this.handleLoad}>
                      Apply
                    </Button>
                  </GridItem>
                </GridContainer> */}
              </div>
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
    auth: state.firebase.auth
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
)(Apply);
