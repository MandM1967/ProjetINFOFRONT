/*!

=========================================================
* Light Bootstrap Accueil React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-Accueil-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-Accueil-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Accueil from "views/Accueil.jsx";
import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
import Réserver from "views/Réserver.jsx";
import ListeSalles from "./views/Liste des salles";
import ListeUsers from "./views/Liste des utilisateurs";

const AccueilRoutes = [
  {
    path: "/Accueil",
    name: "Accueil",
    icon: "pe-7s-home",
    component: Accueil,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Mon profil",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/tableDesReservations",
    name: "Liste des réservations",
    icon: "pe-7s-note2",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/réserver",
    name: "Réserver",
    icon: "pe-7s-diskette",
    component: Réserver,
    layout: "/admin"
  },
  {
    path: "/tableDesUsers",
    name: "Liste des utilisateurs",
    icon: "pe-7s-users",
    component: ListeUsers,
    layout: "/admin"
  },
  {
    path: "/tableDesSalles",
    name: "Liste des salles",
    icon: "pe-7s-server",
    component: ListeSalles,
    layout: "/admin"
  },
];

export default AccueilRoutes;
