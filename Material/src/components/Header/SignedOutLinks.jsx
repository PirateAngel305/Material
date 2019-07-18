import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { PersonAdd, OpenInBrowser } from "@material-ui/icons";

// core components

import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";
const SignedOutLinks = ({ ...props }) => {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button href="/signin" color="transparent" className={classes.navLink}>
          <OpenInBrowser className={classes.icons} /> SignIn
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="/signup" color="transparent" className={classes.navLink}>
          <PersonAdd className={classes.icons} /> SignUp
        </Button>
      </ListItem>
    </List>
  );
};

export default withStyles(headerLinksStyle)(SignedOutLinks);
