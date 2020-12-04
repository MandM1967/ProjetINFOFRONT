/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-Dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-Dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-Dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import SignInSide from "./SignInSide";
import SignInSideSuper from "./SignInSideSuper";
import UserEdit from "./components/UserEdit/UserEdit";
import AdminLayout from "layouts/Admin.jsx";
import UserLayout from "layouts/User.jsx";
import Ajoutsalle from "./components/Ajoutsalle/Ajoutsalle";
import Editsalle from "./components/Editsalle/Editsalle";
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
        <Route path="/adminSignin" component={SignInSideSuper} />
        <Route path="/" exact component={SignInSide} />
        <Route path="/user" render={props => <UserLayout {...props} />} />
        <Route path="/EditUser" component={UserEdit} />
        <Route path="/Ajoutsalle" component={Ajoutsalle} />
        <Route path="/Editsalle/:id" component={Editsalle} />


    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
