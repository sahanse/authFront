import axios from "axios"
import conf from "../conf/conf.js"

class authClass {
    async register(code){
        const response = await axios.post(`${conf.apiUrl}/user/login`, {code}, {withCredentials:true});
        return response.data
    };

    async login(code){
        const response = await axios.post(`${conf.apiUrl}/user/login`,{code}, {withCredentials:true});
        return response.data
    };

    async logout(code){
        const response = await axios.post(`${conf.apiUrl}/user/logout`,{code}, {withCredentials:true});
        return response.data
    }
}

const authService = new authClass();
export default authService;
