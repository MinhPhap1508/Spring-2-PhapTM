import axios from "axios"
import { jwtDecode } from "jwt-decode"


export const login = async(request) => {
    const res = await axios.post("http://localhost:8080/api/v1/auth/authenticate", request)
    return res
}

export const register = async(registerRequest) => {
    const res = await axios.post("http://localhost:8080/api/v1/auth/register", registerRequest)
    return res
}

export const infoToken = () => {
    const jwtToken = localStorage.getItem("JWT")
    if(jwtToken != null) {
        const decodedToken = jwtDecode(jwtToken);
        return decodedToken;
    }else{
        return null;
    }
}
export const getInfoCustomer = async(username) => {
    try{
        const res = await axios.get(`http://localhost:8080/customer?username=${username}`)
        console.log("sservice", res);
        return res.data;
    }catch(e){
        console.log(e);
    }
}
export const getListOrder = async(username) => {
    try{
        const res = await axios.get(`http://localhost:8080/orders/history?username=username`)
        return res;
    }catch(e){
        console.log(e);
    }
}
export const createCustomer = async(username, customer) => {
    try{
        await axios.post(`http://localhost:8080/customer/update?username=${username}`,customer)
    }catch(e){
        console.log(e);
    }
}
