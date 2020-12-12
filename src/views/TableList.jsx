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
import ReservationService from "../Services/ReservationService";
import SallesServices from "../Services/SallesServices";


class TableList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      reservations: []

    }
  }
  componentDidMount() {
    ReservationService.getReservation().then((res) => {
      this.setState({reservations: res.data});

    });
  }
  deleteReservation(numres){
    ReservationService.deleteReservation(numres).then(res =>{
      window.location.reload();
    });
  }
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
                    <tbody>{this.state.reservations.map(
                        reservation =>
                            <tr key={reservation.id}>
                              <td>{reservation.id}</td>
                              <td>{reservation.datereservation}</td>
                              <td>{reservation.numsallereservee}</td>
                              <td> Mr {reservation.nomRD}</td>
                              <td><IconButton aria-label="Mise a jour" color={"primary"} size={"medium"} onClick={()=> this.deleteReservation(reservation.numreservation)}>
                                <Delete/>
                              </IconButton></td>
                            </tr>
                            )
                            }
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
