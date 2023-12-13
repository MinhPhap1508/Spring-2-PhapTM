import { Footer } from "./Footer";
import { Header } from "./Header";

export function Cart() {

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
                                            <tbody>
                                                {/* Start Cart Single Item*/}
                                                <tr>
                                                    <td className="product_remove"><a href="#"><i className="fa fa-trash-o" /></a>
                                                    </td>
                                                    <td className="product_thumb"><a href="product-details-default.html"><img src="https://cdn.pnj.io/images/thumbnails/300/300/detailed/124/sn0000w060001-nhan-bac-pnjsilver.png" alt /></a></td>
                                                    <td className="product_name"><a href="product-details-default.html">Nhẫn vàng
                                                        đính đá</a></td>
                                                    <td className="product-price">$65.00</td>
                                                    <td className="product_quantity"><label>Số lượng</label> <input min={1} max={100} defaultValue={1} type="number" /></td>
                                                    <td className="product_total">$130.00</td>
                                                </tr> {/* End Cart Single Item*/}
                                                {/* Start Cart Single Item*/}
                                                <tr>
                                                    <td className="product_remove"><a href="#"><i className="fa fa-trash-o" /></a>
                                                    </td>
                                                    <td className="product_thumb"><a href="product-details-default.html"><img src="https://cdn.pnj.io/images/thumbnails/300/300/detailed/124/sn0000w060001-nhan-bac-pnjsilver.png" alt /></a></td>
                                                    <td className="product_name"><a href="product-details-default.html">Nhẫn vàng
                                                    đính đá</a></td>
                                                    <td className="product-price">$90.00</td>
                                                    <td className="product_quantity"><label>Số lượng</label> <input min={1} max={100} defaultValue={1} type="number" /></td>
                                                    <td className="product_total">$180.00</td>
                                                </tr> {/* End Cart Single Item*/}
                                                {/* Start Cart Single Item*/}
                                                <tr>
                                                    <td className="product_remove"><a href="#"><i className="fa fa-trash-o" /></a>
                                                    </td>
                                                    <td className="product_thumb"><a href="product-details-default.html"><img src="https://cdn.pnj.io/images/thumbnails/300/300/detailed/124/sn0000w060001-nhan-bac-pnjsilver.png" alt /></a></td>
                                                    <td className="product_name"><a href="product-details-default.html">Nhẫn vàng
                                                    đính đá</a></td>
                                                    <td className="product-price">$80.00</td>
                                                    <td className="product_quantity"><label>Số lượng</label> <input min={1} max={100} defaultValue={1} type="number" /></td>
                                                    <td className="product_total">$160.00</td>
                                                </tr> {/* End Cart Single Item*/}
                                            </tbody>
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
                                        <p>Enter your coupon code if you have one.</p>
                                        <input className="mb-2" placeholder="Coupon code" type="text" />
                                        <button type="submit" className="btn btn-md btn-golden">Apply coupon</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="coupon_code right" data-aos="fade-up" data-aos-delay={400}>
                                    <h3>Tổng giá tiền</h3>
                                    <div className="coupon_inner">
                                        <div className="cart_subtotal">
                                            <p>Subtotal</p>
                                            <p className="cart_amount">$215.00</p>
                                        </div>
                                        <div className="cart_subtotal ">
                                            {/* <p>Shipping</p>
                                            <p className="cart_amount"><span>Flat Rate:</span> $255.00</p> */}
                                        </div>
                                        <div className="cart_subtotal">
                                            <p>Tổng tiền</p>
                                            <p className="cart_amount">$215.00</p>
                                        </div>
                                        <div className="checkout_btn">
                                            <a href="#" className="btn btn-md btn-golden">Thanh toán</a>
                                        </div>
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