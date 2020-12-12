import axios from 'axios';

const RES_API_BASE_URL= "http://localhost:8090/GRDS/Reservation/"

class ReservationService {

    getReservation() {
        return axios.get(RES_API_BASE_URL);
    }
    deleteReservation(numres){
        return axios.delete(RES_API_BASE_URL+'deleteByNumreservation/'+numres);
    }
    createReservation(r){
        return axios.post("http://localhost:8090/GRDS/Reservation/save/", r);
    }
}
export default new ReservationService()
