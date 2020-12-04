/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
import Button from "../components/CustomButton/CustomButton";
import Delete from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

class TableList extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>

            <Col md={12}>
              <Card
                plain
                title="Liste de mes réservations"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>RES-001</td>
                        <td>31-08-1998</td>
                        <td>1-A-05</td>
                        <td>TERRY HENNRY</td>
                        <td><IconButton aria-label="Mise a jour" color={"primary"} size={"medium"}>
                          <Delete />
                        </IconButton></td>
                      </tr>
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default TableList;
