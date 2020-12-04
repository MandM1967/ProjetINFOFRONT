import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
import Button from "../components/CustomButton/CustomButton";
import Delete from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import CloudUpload from "@material-ui/icons/CloudUpload";
import SallesServices from "../Services/SallesServices";
import Ajoutsalle from "../components/Ajoutsalle/Ajoutsalle";

class ListeSalles extends Component {
    constructor(props) {
        super(props)

        this.state = {
            salles: []

        }
        this.editSalle=this.editSalle.bind(this);
    }
    componentDidMount() {
        SallesServices.getSalles().then((res) => {
            this.setState({salles: res.data});

        });
    }
    editSalle(id){
        this.props.history.push(`/Editsalle/${id}`);


    }
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>

                        <Col md={12}>
                            <Button bsStyle="info" pullRight fill type="submit" href="#add">
                                Ajouter salle
                            </Button>
                            <Card
                                plain
                                title="Liste des salles"
                                ctTableFullWidth
                                ctTableResponsive
                                content={
                                    <Table hover>
                                        <thead>
                                        <tr>
                                            <th>Numéro de la salle</th>
                                            <th>Emplacement de la salle</th>
                                            <th>Capacité de la salle</th>
                                            <th>Type de la salle</th>
                                            <th>Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>{ this.state.salles.map(
                                            salle =>
                                            <tr key ={salle.id}>
                                                <td>{salle.numsalle}</td>
                                                <td>{salle.emplacementsalle}</td>
                                                <td>{salle.capacite}</td>
                                                <td>{salle.typesalle}</td>
                                                <td><IconButton aria-label="Mise a jour" color={"primary"}
                                                                onClick={()=> this.editSalle(salle.id)}>
                                                    <CloudUpload/>
                                                </IconButton> <IconButton aria-label="Supprimer" color={"primary"}
                                                                          size={"medium"}>
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
                    <div id="add">
                    <Ajoutsalle></Ajoutsalle>
                    </div>
                </Grid>
            </div>
        );
    }
}

export default ListeSalles;
