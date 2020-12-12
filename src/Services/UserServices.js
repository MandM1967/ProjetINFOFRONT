import axios from 'axios';

const USER_API_BASE_URL= "http://localhost:8090/GRDS/ResponsableDepartement/"

class UserServices {

    getUser() {
        return axios.get(USER_API_BASE_URL);
    }
    deleteUser(login){
        return axios.delete(USER_API_BASE_URL+'deleteByLogin/'+login);
    }
    createUser(u){
        return axios.post("http://localhost:8090/GRDS/ResponsableDepartement/save/", u);
    }
}
export default new UserServices()
