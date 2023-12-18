import { useEffect, useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";
import { getInfoCustomer, infoToken } from "../service/Account";
import { addCart, cartDetail, deleteCart } from "../service/CartService";
import { Paypal } from "./Paypal";
import Swal from "sweetalert2";
import {FaPlus} from "react-icons/fa6";
import {FaMinus} from "react-icons/fa6";

export function Cart() {
    const [cart, setCart] = useState([])
    const [checkout, setCheckout] = useState(false);
    const navigate = useNavigate();
    const [customer, setCustomer] = useState({})
    const vnd = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })

    const getCart = async () => {
        const res = infoToken();
        if (res != null) {
            const result = await cartDetail(res.sub);
            setCart(result.data);
        }
    }
    const getCustomer = async () => {
        const result = infoToken();
        if (result != null) {
            const res = await getInfoCustomer(result.sub);
            console.log("get", res);
            setCustomer(res);
        }
    }
    const totalPrice = cart.reduce((acc, item) => {
        return acc + (item.price * item.quantity)
    }, 0)
    console.log("reduce", cart);
    const handleDelete = async (c) => {
        try {
            Swal.fire({
                title: "Bạn có muốn xóa sản phẩm này khỏi giỏ hàng không?",
                text: c.name,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Đồng ý",
                cancelButtonText: "Huỷ",
            })
                .then(async (confirm) => {
                    if (confirm.isConfirmed) {
                        const res = infoToken();
                        await deleteCart(res.sub, c.id)
                        Swal.fire("Xóa sản phẩm thành công!", "", "success");
                        getCart();
                    }
                })
        } catch (e) {
            console.log(e);
        }
    }
    const increase = async (productId) => {
        const res = infoToken();
        await addCart(1, res.sub, productId)
        getCart();
    }
    useEffect(() => {
        getCart();
        getCustomer();
        document.title = "Minh Pháp Jewelry"
    }, [])

    return (
        <>
            <Header />
            <div className="cart-section mt-5">
                {/* Start Cart Table */}
                <div className="cart-table-wrapper" data-aos="fade-up" data-aos-delay={0}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="table_desc">
                                    <div className="table_page table-responsive">
                                        <table>
                                            {/* Start Cart Table Head */}
                                            <thead>
                                                <tr>
                                                    <th className="product_remove">Xóa</th>
                                                    <th className="product_thumb">Hình ảnh</th>
                                                    <th className="product_name">Sản phẩm</th>
                                                    <th className="product-price">Giá</th>
                                                    <th className="product_quantity">Số lượng</th>
                                                    <th className="product_total">Tổng tiền</th>
                                                </tr>
                                            </thead> {/* End Cart Table Head */}
                                            {cart.map((c) => (
                                                <>
                                                    <tbody>

                                                        {/* Start Cart Single Item*/}
                                                        <tr>
                                                            <td className="product_remove"><a onClick={() => handleDelete(c, c.name)}><i className="fa fa-trash-o" /></a>
                                                            </td>
                                                            <td className="product_thumb"><a href="product-details-default.html"><img src={c.image} alt /></a></td>
                                                            <td className="product_name"><p>{c.name}</p></td>
                                                            <td className="product-price">{vnd.format(c.price)}</td>
                                                            <td className="product_quantity"><label> <input min="1" max="100"
                                                            id={`input-quantity${c.id}`}
                                                            name="quantity"
                                                            value={c.quantity}
                                                             defaultValue={c.quantity}
                                                              type="number" />
                                                              </label>
                                                            <span className="btn btn-outline-dark" style={{width:"50px", marginBottom:"4px"}} onClick={() => increase(c.id)}>
                                                            <FaPlus/>
                                                                </span>
                                                            </td>
                                                            <td className="product_total">{vnd.format(c.price * c.quantity)}</td>
                                                        </tr> {/* End Cart Single Item*/}

                                                    </tbody>
                                                </>
                                            ))}
                                        </table>
                                    </div>
                                    <div className="cart_submit">
                                        <button className="btn btn-md btn-golden" type="submit">Thay đổi giỏ hàng</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* End Cart Table */}
                {/* Start Coupon Start */}
                <div className="coupon_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="coupon_code left" data-aos="fade-up" data-aos-delay={200}>
                                    <h3>Thông tin cá nhân</h3>

                                    <div className="coupon_inner">
                                        {customer ? (
                                            <ul>
                                                <li className="h5 fw-normal d-flex justify-content-between">
                                                    Tên khách hàng: <p>{customer.fullName}</p></li>
                                                <li className="h5 fw-normal d-flex justify-content-between">
                                                    Địa chỉ: <p>{customer.address}</p></li>
                                                <li className="h5 fw-normal d-flex justify-content-between">
                                                    Số điện thoại: <p>{customer.phone}</p></li>
                                            </ul>
                                        ) : (<p>Vui lòng nhập thông tin</p>)}
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="coupon_code right" data-aos="fade-up" data-aos-delay={400}>
                                    <h3>Tổng giá tiền</h3>
                                    <div className="coupon_inner">
                                        <div className="cart_subtotal">
                                            <p>Tổng tiền</p>
                                            <p className="cart_amount">{vnd.format(totalPrice)}</p>
                                        </div>
                                        <div className="cart_subtotal ">
                                            {/* <p>Shipping</p>
                                            <p className="cart_amount"><span>Flat Rate:</span> $255.00</p> */}
                                        </div>
                                        <div className="cart_subtotal">
                                            <p>Tổng tiền sau khi cộng thêm chi đó</p>
                                            <p className="cart_amount">{vnd.format(totalPrice)}</p>
                                        </div>
                                        {checkout ? (
                                            <Paypal props1={totalPrice} props2={cart} />
                                        ) : (
                                            <div className="checkout_btn">

                                                <button
                                                    onClick={() => setCheckout(true)} className="btn btn-md btn-golden">Thanh toán</button>

                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* End Coupon Start */}
            </div> {/* ...:::: End Cart Section:::... */}
            <Footer />
        </>
    )
}