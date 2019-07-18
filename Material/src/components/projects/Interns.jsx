import React, { Component } from "react";
import Tables from "../projects/Table.jsx";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import classNames from "classnames";
import Parallax from "components/Parallax/Parallax.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Footer from "components/Footer/Footer.jsx";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};
class Interns extends Component {
  render() {
    const { interns, auth, classes } = this.props;
    console.log(this.props);
    if (!auth.uid) return <Redirect to="/home" />;

    return (
      <div>
        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <div>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <Card>
                      <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>INTERNS </h4>
                        <p className={classes.cardCategoryWhite}>
                          List Of Candidate
                        </p>
                      </CardHeader>
                      <CardBody>
                        <Tables interns={interns} />
                      </CardBody>
                    </Card>
                  </GridItem>
                </GridContainer>
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
    interns: state.firestore.ordered.interns,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "interns", orderBy: ["appliedAt", "desc"] }]),
  withStyles(profilePageStyle),
  withStyles(styles)
)(Interns);
