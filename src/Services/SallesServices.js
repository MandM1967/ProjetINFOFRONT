import axios from 'axios';

const SALES_API_BASE_URL= "http://localhost:8090/GRDS/Salle/"

class SallesServices {

    getSalles() {
        return axios.get(SALES_API_BASE_URL);
    }
    getSallesById(id){
        return axios.get(SALES_API_BASE_URL + 'id/' + id)
    }
    updateSalle(salle, id){
        return axios.post( 'http://localhost:8090/GRDS/Salle/updateSalle/'+ id, salle)
    }
    createSalle(s){
        return axios.post("http://localhost:8090/GRDS/Salle/save/", s);
    }
    deleteSalle(id){
        return axios.delete("http://localhost:8090/GRDS/Salle/deleteSalleById/"+id);
    }
}
export default new SallesServices()
