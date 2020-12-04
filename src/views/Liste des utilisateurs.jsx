import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
import Button from "../components/CustomButton/CustomButton";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";

class ListeUsers extends Component {
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>

                        <Col md={12}>
                            <Card
                                plain
                                title="Liste des utilisateurs"
                                ctTableFullWidth
                                ctTableResponsive
                                content={
                                    <Table hover>
                                        <thead>
                                        <tr>
                                            <th>Département</th>
                                            <th>Nom de l'utilisateur</th>
                                            <th>Adresse E-mail</th>
                                            <th>Nom</th>
                                            <th>Prénom</th>
                                            <th>N° de télephone</th>
                                            <th></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
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
                    <Button bsStyle="info" pullRight fill type="submit" href={"/EditUser"}>
                        Ajouter utilisateur
                    </Button>
                </Grid>
            </div>
        );
    }
}

export default ListeUsers;
