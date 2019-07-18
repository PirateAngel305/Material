import React from "react";

import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

import { compose } from "redux";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { CloudDownload } from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function StudentLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          className={classes.navLink}
          onClick={props.signOut}
        >
          <CloudDownload className={classes.icons} /> Log Out
        </Button>
      </ListItem>
    </List>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withStyles(headerLinksStyle)
)(StudentLinks);
