import axios from "axios"

export const ListHome = async() => {
    try{
        const res = await axios.get("http://localhost:8080/product/home")
        console.log("res", res);
        return res.data;
    }catch(e){
        console.log(e);
    }
}
export const BestSeller = async () => {
    try{
        const res = await axios.get("http://localhost:8080/product/best-seller")
        return res.data;
    }catch(e) {
        console.log(e);
    }
}
export const typeList = async() => {
    try{
        const res = await axios.get("http://localhost:8080/product/type")
        return res.data;
    }catch(e){
        console.log(e);
    }
}
export const cateList = async() => {
    try{
        const res = await axios.get("http://localhost:8080/product/cate")
        return res.data;
    }catch(e){
        console.log(e);
    }
}
export const tradeList = async() => {
    try{
        const res = await axios.get("http://localhost:8080/product/trade")
        return res.data;
    }catch(e){
        console.log(e);
    }
}