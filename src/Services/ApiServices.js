import axios from 'axios';

class ApiServices{
    
    registerUser(user){
        return axios.post("http://localhost:8080/api/v1/registerUser",user)
    }
}