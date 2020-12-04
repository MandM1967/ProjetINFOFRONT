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

import avatar from "assets/img/faces/face-3.jpg";
import {InputLabel, MenuItem, Select} from "@material-ui/core";

class Ajoutsalle extends Component {
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Ajouter une salle"
                                content={
                                    <form>
                                        <FormInputs
                                            ncols={["col-md-6"]}
                                            properties={[
                                                {
                                                    label: "Numéro de la salle",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Numéro de la salle",
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols={["col-md-6"]}
                                            properties={[
                                                {label: "Emplacement de la salle",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Emplacement de la salle",
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols={["col-md-6"]}
                                            properties={[
                                                {
                                                    label: "Capacité de la salle",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Capacité de la salle",
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols={["col-md-6"]}
                                            properties={[
                                                {
                                                    label: "Type de la salle",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Type de la salle",
                                                }
                                            ]}
                                        />


                                        <Row>

                                        </Row>
                                        <Button bsStyle="info" pullRight fill type="submit" href={"/admin/tableDesSalles"}>
                                            Enregistrer
                                        </Button>
                                        <div className="clearfix" />
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

export default Ajoutsalle;
