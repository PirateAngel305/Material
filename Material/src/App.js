import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Dashboard from "./components/dashboard/Dashboard.jsx";
import ProjectDetails from "./components/projects/ProjectDetails.jsx";
import Interns from "./components/projects/Interns.jsx";
import Apply from "./components/projects/Apply.jsx";
import SignIn from "./components/auth/SignIn.jsx";
import SignUp from "./components/auth/SignUp.jsx";
import CreateProject from "./components/projects/CreateProject.jsx";
import Home from "./components/Home/Home.jsx";
import Header from "components/Header/Header.jsx";
import SignedOutLinks from "components/Header/SignedOutLinks.jsx";
import SignedInLinks from "components/Header/SignedInLinks.jsx";
import StudentLinks from "components/Header/StudentLinks.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden"
    };
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
  render() {
    const { classes, ...rest } = this.props;
    const { auth, profile } = this.props;
    const links = auth.uid ? (
      profile.category === "company" ? (
        <SignedInLinks profile={profile} />
      ) : (
        <StudentLinks profile={profile} />
      )
    ) : (
      <SignedOutLinks />
    );

    return (
      <BrowserRouter>
        <div className="App">
          <Header
            absolute
            color="dark"
            brand="Campus Recruitment"
            rightLinks={links}
            fixed
            changeColorOnScroll={{
              height: 180,
              color: "white"
            }}
            {...rest}
          />
          {/* <Navbar /> */}
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/interns" component={Interns} />
            <Route path="/apply/:id" component={Apply} />
            <Route path="/create" component={CreateProject} />
            <Route path="/home" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(App);
