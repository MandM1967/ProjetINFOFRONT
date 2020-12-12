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
import SallesServices from "../../Services/SallesServices";
import UserServices from "../../Services/UserServices";

class UserEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            login: '',
            nom: '',
            prenom: '',
            departement: '',
            numtel: '',
            Passwordresponsabledepartement: '',

        }
        this.saveUser=this.saveUser.bind(this);
        this.changeDepartementHandler=this.changeDepartementHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changeLoginHandler=this.changeLoginHandler.bind(this);
        this.changeNomHandler=this.changeNomHandler.bind(this);
        this.changePrenomHandler=this.changePrenomHandler.bind(this);
        this.changeNumtelHandler=this.changeNumtelHandler.bind(this);
        this.changePasswordRDHandler=this.changePasswordRDHandler.bind(this);
    }
    saveUser = (u) => {
        u.preventDefault();
        let user={email: this.state.email, login: this.state.login, nom: this.state.nom, prenom: this.state.prenom, departement: this.state.departement, numtel: this.state.numtel,Passwordresponsabledepartement:this.state.Passwordresponsabledepartement};
        console.log('user =>'+ JSON.stringify(user));
        UserServices.createUser(user).then(res =>{
            window.location.reload();
        });
    }
    changeDepartementHandler = (event) => {
        this.setState({departement:event.target.value});
    }
    changeEmailHandler = (event) => {
        this.setState({email:event.target.value});
    }
    changeLoginHandler = (event) => {
        this.setState({login:event.target.value});
    }
    changeNomHandler = (event) => {
        this.setState({nom:event.target.value});
    }
    changePrenomHandler = (event) => {
        this.setState({prenom:event.target.value});
    }
    changeNumtelHandler = (event) => {
        this.setState({numtel:event.target.value});
    }
    changePasswordRDHandler = (event) => {
        this.setState({Passwordresponsabledepartement:event.target.value});
    }

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
                                                    value: this.state.departement,
                                                    defaultvalue:'UM6P',
                                                    onChange: this.changeDepartementHandler,
                                                },
                                                {
                                                    label: "Nom d'utilisateur",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Nom d'utilisateur",
                                                    value: this.state.login,
                                                    onChange: this.changeLoginHandler,
                                                },
                                                {
                                                    label: "Adresse Email",
                                                    type: "email",
                                                    bsClass: "form-control",
                                                    placeholder: "Adresse Email",
                                                    value: this.state.email,
                                                    onChange: this.changeEmailHandler,
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols={["col-md-4", "col-md-4", "col-md-4", "col-md-4"]}
                                            properties={[
                                                {
                                                    label: "Prénom",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Prénom",
                                                    value: this.state.prenom,
                                                    onChange: this.changePrenomHandler,
                                                },
                                                {
                                                    label: "Nom",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Nom",
                                                    value: this.state.nom,
                                                    onChange: this.changeNomHandler,
                                                },{
                                                    label: "Numéro de téléphone",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Numéro de téléphone",
                                                    value: this.state.numtel,
                                                    onChange: this.changeNumtelHandler,
                                                },
                                                {
                                                    label: "Mot de passe",
                                                    type: "password",
                                                    bsClass: "form-control",
                                                    placeholder: "Mote de passe",
                                                    value: this.state.Passwordresponsabledepartement,
                                                    onChange: this.changePasswordRDHandler,
                                                }
                                            ]}
                                        />

                                        <Row>

                                        </Row>
                                        <Button bsStyle="info" pullRight fill type="submit" onClick={this.saveUser}>
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
