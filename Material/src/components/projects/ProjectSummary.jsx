import React from "react";
import moment from "moment";

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import CardBody from "components/Card/CardBody.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import CardActionArea from "@material-ui/core/CardActionArea";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
const ProjectSummary = ({ project, classes, props }) => {
  return (
    <Card>
      <CardActionArea
        onClick={() => props.history.push("/project/" + project.id)}
      >
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>{project.companyname}</h4>
        </CardHeader>

        <CardBody>
          <h4 className={classes.cardTitle}>{project.job}</h4>
          <p className={classes.cardCategory}>
            Posted by {project.authorFirstName} {project.authorLastName}
          </p>
        </CardBody>

        <CardFooter chart>
          <div className={classes.stats}>
            <p>{moment(project.createdAt.toDate()).calendar()}</p>
          </div>
        </CardFooter>
      </CardActionArea>
    </Card>
  );
};

export default withStyles(dashboardStyle)(ProjectSummary);
