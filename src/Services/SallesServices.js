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
}
export default new SallesServices()
