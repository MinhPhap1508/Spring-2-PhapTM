import axios from "axios"

export const cartDetail = async(username) => {
    const res = await axios.get(`http://localhost:8080/cart/cart-detail?username=${username}`)
    return res;
}
export const addCart = async(quantity, username, productId) => {
    const res = await axios.post(`http://localhost:8080/cart/add-cart?quantity=${quantity}&username=${username}&productId=${productId}`)
    return res;
}
export const deleteCart = async(username, id) => {
    await axios.delete(`http://localhost:8080/cart/delete-cart?username=${username}&id=${id}`)
}
export const increase = async(username, id) => {
   const res= await axios.post(`http://localhost:8080/cart/increase-quantity?username=${username}&id=${id}`)
   console.log("in", res);
}
export const decrease = async(username, id) => {
    await axios.post(`http://localhost:8080/cart/decrease-quantity?username=${username}&id=${id}`)
}
export const createOrder = async (cart, username) => {
    const res = await axios.post(`http://localhost:8080/orders/create-order?username=${username}`, cart)
    return res;
}
export const getListOrder = async(username, page) => {
    const res = await axios.get(`http://localhost:8080/orders/history?username=${username}&page=${page}`)
    return res
}
export const getDetailOrder = async(username, id) => {
    const res = await axios.get(`http://localhost:8080/orders/detail?username=${username}&id=${id}`)
    return res;
}