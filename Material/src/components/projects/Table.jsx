import React from "react";
import moment from "moment";

// @material-ui/core components

// core components

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const Tables = ({ classes, interns }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Company Name</TableCell>
          <TableCell>Job</TableCell>
          <TableCell>Applied At</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {interns &&
          interns.map(intern => {
            return (
              <TableRow key={intern.id}>
                <TableCell>{intern.studentName}</TableCell>
                <TableCell>{intern.companyName}</TableCell>
                <TableCell>{intern.job}</TableCell>
                <TableCell>
                  {moment(intern.appliedAt.toDate()).format("lll")}
                </TableCell>
                <TableCell> {intern.status}</TableCell>
              </TableRow>
            );
          })}
      </TableBody>
    </Table>
  );
};

export default Tables;
