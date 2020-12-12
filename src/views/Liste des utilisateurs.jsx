import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
import Button from "../components/CustomButton/CustomButton";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";
import UserEdit from "../components/UserEdit/UserEdit";
import CloudUpload from "@material-ui/icons/CloudUpload";
import UserServices from "../Services/UserServices";
import SallesServices from "../Services/SallesServices";

class ListeUsers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: []

        }
        this.deleteUser=this.deleteUser.bind(this);
    }
    componentDidMount() {
        UserServices.getUser().then((res) => {
            this.setState({user: res.data});

        });
    }
    deleteUser(login){
        UserServices.deleteUser(login).then(res =>{
            window.location.reload();
        });
    }

    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>

                        <Col md={12}>
                            <Button bsStyle="info" pullRight fill type="submit" href="#edit">
                                Ajouter utilisateur +
                            </Button>
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
                                        { this.state.user.map(
                                            users =>
                                                <tr key ={users.id}>
                                                    <td>{users.departement}</td>
                                                    <td>{users.login}</td>
                                                    <td>{users.email}</td>
                                                    <td>Mr {users.nom}</td>
                                                    <td>{users.prenom}</td>
                                                    <td>{users.numtel}</td>
                                                    <td> <IconButton aria-label="Supprimer" color={"primary"}
                                                                              size={"medium"} onClick={()=> this.deleteUser(users.login)}>
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
                    <div id="edit">
                        <UserEdit></UserEdit>
                    </div>
                </Grid>
            </div>
        );
    }
}

export default ListeUsers;
