import { log } from "async";
import axios from "axios"

export const getProductById = async (id) => {
    try {
        const res = await axios.get(`http://localhost:8080/product/${id}`)
        return res;
    } catch (e) {
        console.log(e);
    }
}
export const getListSearch = async (page, nameProduct, choose, search) => {
    try {
        const res = await axios.get(`http://localhost:8080/product/page-list?page=${page}&size=4&nameProduct=${nameProduct}&choose=${choose}&search=${search}`)
        console.log("service", res);
        return res;
    } catch (e) {
        console.log(e);
    }
}
export const getListHeader = async (page, nameProduct, nameType, nameCategory, nameTrademark) => {
    try {
        const res = await axios.get(`http://localhost:8080/product/page-header?page=${page}&size=4&nameProduct=${nameProduct}&nameType=${nameType}&nameCategory=${nameCategory}&nameTrademark=${nameTrademark}`)
        return res;
    } catch (e) {
        console.log(e);
    }
}
export const getSearchType = async(page,nameType) => {
    try{
        const res = await axios.get(`http://localhost:8080/product/type-header?page=${page}&nameType=${nameType}`)
        return res;
    }catch(e){
        console.log(e);
    }
}
export const getSearchCategory = async(page, nameCategory) => {
    try{
        const res = await axios.get(`http://localhost:8080/product/category-header?page=${page}&nameCategory=${nameCategory}`)
        return res;
    }catch(e){
        console.log(e);
    }
}
export const getSearchTrademark = async(page,nameTrademark) => {
    try{
        const res = await axios.get(`http://localhost:8080/product/trademark-header?page=${page}&nameTrademark=${nameTrademark}`)
        return res;
    }catch(e){
        console.log(e);
    }
}