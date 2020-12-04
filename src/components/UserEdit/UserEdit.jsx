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

class UserEdit extends Component {
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Ajouter un utilisateur"
                                content={
                                    <form>
                                        <FormInputs
                                            ncols={["col-md-4", "col-md-4", "col-md-4"]}
                                            properties={[
                                                {
                                                    label: "Département",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Département",
                                                    defaultValue: "UM6P",
                                                },
                                                {
                                                    label: "Nom d'utilisateur",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Nom d'utilisateur",
                                                },
                                                {
                                                    label: "Adresse Email",
                                                    type: "email",
                                                    bsClass: "form-control",
                                                    placeholder: "Adresse Email"
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols={["col-md-4", "col-md-4", "col-md-4"]}
                                            properties={[
                                                {
                                                    label: "Prénom",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Prénom",
                                                },
                                                {
                                                    label: "Nom",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Nom",
                                                },
                                                {
                                                    label: "Numéro de téléphone",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Numéro de téléphone",
                                                }
                                            ]}
                                        />

                                        <Row>

                                        </Row>
                                        <Button bsStyle="info" pullRight fill type="submit" href={"/admin/tableDesUsers"}>
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

export default UserEdit;
