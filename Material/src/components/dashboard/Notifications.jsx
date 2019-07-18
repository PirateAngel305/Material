import React from "react";
import moment from "moment";

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import withStyles from "@material-ui/core/styles/withStyles";

import CardBody from "components/Card/CardBody.jsx";

const Notifications = props => {
  const { notifications, classes } = props;
  return (
    <div className="section">
      <Card>
        <CardHeader color="success">Notifications</CardHeader>
        <CardBody>
          <ul className="online-users">
            {notifications &&
              notifications.map(item => {
                return (
                  <li key={item.id}>
                    <p className={classes.cardTitle}>
                      {item.user} {item.content}
                    </p>
                    <p className={classes.cardTitle}>
                      {moment(item.time.toDate()).fromNow()}
                    </p>
                  </li>
                );
              })}
          </ul>
        </CardBody>
      </Card>
    </div>
  );
};

export default withStyles(dashboardStyle)(Notifications);
