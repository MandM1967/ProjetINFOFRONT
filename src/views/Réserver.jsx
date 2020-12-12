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
import {
    Grid,
    Row,
    Col,
    FormGroup,
    ControlLabel,
    FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import { TextField, InputLabel, Select, MenuItem } from '@material-ui/core';

import avatar from "assets/img/faces/face-3.jpg";
import SallesServices from "../Services/SallesServices";
import ReservationService from "../Services/ReservationService";

class Réserver extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datereservation: '',
            typesalle: '',
        }
        this.changeDatereservationHandler=this.changeDatereservationHandler.bind(this);
        this.changeTypesalleHandler=this.changeTypesalleHandler.bind(this);
    }
    saveReservation = (r) => {
        r.preventDefault();
        let reservation={datereservation: this.state.datereservation,typesalle:this.state.typesalle};
        console.log('reservation =>'+ JSON.stringify(reservation));
        ReservationService.createReservation(reservation).then(res =>{
            window.location.reload();
        });
    }
    changeDatereservationHandler = (event) => {
        this.setState({datereservation:event.target.value});
    }
    changeTypesalleHandler = (event) => {
        this.setState({typesalle:event.target.value});
    }
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Effectuer une réservation"
                                content={

                                    <form >
                                        <FormInputs
                                            ncols={["col-md-4", "col-md-4","col-md-4"]}
                                            properties={[
                                                {
                                                    label: "Date debut",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "yyyy-mm-ddThh:mm:ss",
                                                },
                                                {
                                                    label: "Date fin",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "yyyy-mm-ddThh:mm:ss",
                                                },
                                                {
                                                    abel: "Date fin",
                                                    type: "demo-controlled-open-select-label",
                                                    bsClass: "demo-controlled-open-select-label",
                                                    placeholder: "yyyy-mm-ddThh:mm:ss",
                                                }


                                            ]}
                                        />
                                        <Col md={6}>
                                        <div>
                                            <InputLabel id="demo-controlled-open-select-label">Type de salle</InputLabel>
                                            <Select
                                                labelId="demo-controlled-open-select-label"
                                                id="demo-controlled-open-select"

                                            >
                                                <MenuItem value={10}>Grand amphi</MenuItem>
                                                <MenuItem value={20}>Amphi</MenuItem>
                                                <MenuItem value={30}>Salle moyenne</MenuItem>
                                                <MenuItem value={40}>Salle petite</MenuItem>
                                                <MenuItem value={50}>Salle info-PC</MenuItem>
                                                <MenuItem value={60}>Salle info-MAC</MenuItem>
                                                <MenuItem value={70}>Labo-PE</MenuItem>
                                                <MenuItem value={80}>FABLAB</MenuItem>
                                                <MenuItem value={90}>Salle de conférence</MenuItem>

                                            </Select>
                                        </div>
                                        </Col>

                                        <Button bsStyle="info" pullRight fill type="submit"  onClick={this.saveReservation}>
                                            Rechercher
                                        </Button>
                                    </form>

                                }
                            />
                        </Col>

                    </Row>

                </Grid>
            </div>
        );
    }
}

export default Réserver;
