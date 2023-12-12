import axios from "axios"

export const getProductById = async(id) => {
    try{
        const res = await axios.get(`http://localhost:8080/product/${id}`)
        return res;
    }catch(e){
        console.log(e);
    }
}