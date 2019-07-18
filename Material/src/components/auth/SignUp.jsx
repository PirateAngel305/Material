import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";
import { compose } from "redux";

import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import Lock from "@material-ui/icons/Lock";
// core components
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Danger from "components/Typography/Danger.jsx";
import image from "assets/img/bg7.jpg";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import basicsStyle from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx";
import typographyStyle from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.jsx";

class SignUp extends Component {
  constructor(props) {
    super(props);

    // we use this to make the card to appear after the page has been rendered
    this.state = {
      email: "",
      password: "",
      firstName: "",
      category: "",
      cardAnimaton: "cardHidden"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleCheck = e => {
    this.setState({
      selectedEnabled: e.target.value,
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.signUp(this.state);
  };

  render() {
    const { classes } = this.props;
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[this.state.cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>SignUp</h4>
                  </CardHeader>
                  <CardBody>
                    <CustomInput
                      labelText="First Name..."
                      id="firstName"
                      onChange={this.handleChange}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Email..."
                      id="email"
                      onChange={this.handleChange}
                      required
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="password"
                      onChange={this.handleChange}
                      required
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Lock className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />

                    <div className={classes.title}>
                      <h3>Radio Buttons</h3>
                    </div>
                    <div
                      className={
                        classes.checkboxAndRadio +
                        " " +
                        classes.checkboxAndRadioHorizontal
                      }
                    >
                      <FormControlLabel
                        control={
                          <Radio
                            checked={this.state.selectedEnabled === "student"}
                            onChange={this.handleCheck}
                            value="student"
                            id="category"
                            name="radio button enabled"
                            aria-label="A"
                            icon={
                              <FiberManualRecord
                                className={classes.radioUnchecked}
                              />
                            }
                            checkedIcon={
                              <FiberManualRecord
                                className={classes.radioChecked}
                              />
                            }
                            classes={{
                              checked: classes.radio
                            }}
                          />
                        }
                        classes={{
                          label: classes.label
                        }}
                        label="Student"
                      />
                    </div>
                    <div
                      className={
                        classes.checkboxAndRadio +
                        " " +
                        classes.checkboxAndRadioHorizontal
                      }
                    >
                      <FormControlLabel
                        control={
                          <Radio
                            checked={this.state.selectedEnabled === "company"}
                            onChange={this.handleCheck}
                            value="company"
                            id="category"
                            name="radio button enabled"
                            aria-label="B"
                            icon={
                              <FiberManualRecord
                                className={classes.radioUnchecked}
                              />
                            }
                            checkedIcon={
                              <FiberManualRecord
                                className={classes.radioChecked}
                              />
                            }
                            classes={{
                              checked: classes.radio
                            }}
                          />
                        }
                        classes={{
                          label: classes.label
                        }}
                        label="Company"
                      />
                    </div>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button
                      simple
                      color="primary"
                      size="lg"
                      onClick={this.handleSubmit}
                    >
                      Get started
                    </Button>
                  </CardFooter>
                  <div
                    style={{
                      paddingLeft: "15%",
                      paddingRight: "15%",
                      marginBottom: "10px",
                      position: "relative"
                    }}
                  >
                    <Danger>{authError ? <p>{authError}</p> : null}</Danger>
                  </div>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: creds => dispatch(signUp(creds))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(loginPageStyle),
  withStyles(basicsStyle),
  withStyles(typographyStyle)
)(SignUp);
