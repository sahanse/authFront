import axios from "axios"
import conf from "../conf/conf.js"

class authClass {
    async auth(code){
        const response = await axios.post(`${conf.apiUrl}/user/auth`, {code}, {withCredentials:true});
        return response.data
    };

    async logout(code){
        const response = await axios.post(`${conf.apiUrl}/user/logout`,{code}, {withCredentials:true});
        return response.data
    }
}

const authService = new authClass();
export default authService;
