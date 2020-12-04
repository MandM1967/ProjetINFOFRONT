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

class Réserver extends Component {
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
                                        <Col md={4}>
                                            <TextField
                                                id="datetime-local"
                                                label="Date de réservation"
                                                type="datetime-local"
                                                defaultValue="datetime-local"

                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </Col>
                                        <Col md={4}>
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
                                        <Col md={2}>
                                        <div>
                                            <InputLabel id="demo-controlled-open-select-label">Salles disponibles</InputLabel>
                                            <Select
                                                labelId="demo-controlled-open-select-label"
                                                id="demo-controlled-open-select"
                                            >


                                            </Select>
                                        </div>
                                        </Col>


                                        <Button bsStyle="info" pullRight fill type="submit">
                                            Réserver
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
