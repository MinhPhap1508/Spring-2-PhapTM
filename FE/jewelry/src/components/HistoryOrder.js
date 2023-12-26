import { useEffect, useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { infoToken } from "../service/Account";
import { getDetailOrder } from "../service/CartService";
import { useParams } from "react-router-dom";

export function HistoryOrder() {
    const [detail, setDetail] = useState([])
    const param = useParams();
    const vnd = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })
    const getOrderDetail = async () => {
        const res = infoToken();
        const result = await getDetailOrder(res.sub, param.id)
        setDetail(result.data);
    }
    useEffect(() => {
        getOrderDetail();
    }, [param.id])
    if (!detail) {
        return null;
    }

    return (
        <>
            <Header />

            <div className="container mt-5">
                <h1>Chi tiết đơn hàng</h1>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên sản phẩm</th>
                            <th>Giá</th>
                            <th>Số lượng</th>
                            <th>Tổng tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {detail.map((d, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{d.nameProduct}</td>
                                <td>{vnd.format(d.price)}</td>
                                <td>{d.quantityOrder}</td>
                                <td>{vnd.format(d.quantityOrder * d.price)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    )
}