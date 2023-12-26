import { useEffect, useState } from "react"
import { getListOrder } from "../service/CartService";
import { infoToken } from "../service/Account";
import { Header } from "./Header";
import { Footer } from "./Footer";
import {
    AiOutlineDoubleLeft,
    AiOutlineDoubleRight,
} from "react-icons/ai";
import { FaCircleInfo } from "react-icons/fa6";
import { Link } from "react-router-dom";

export function History() {
    const [history, setHistory] = useState([])
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const vnd = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })

    const historyOrder = async () => {
        const res = infoToken();
        const result = await getListOrder(res.sub, page)
        setHistory(result.data.content)
        setTotalPage(result.data.totalPages)
    }
    const nextPage = () => {
        if (page < totalPage - 1) {
            setPage((Prev) => Prev + 1);
        }
    };
    const previousPage = () => {
        if (page > 0) {
            setPage((Prev) => Prev - 1);
        }
    }
    useEffect(() => {
        document.title = "Lịch sử đơn hàng"
        historyOrder();
    }, [page])

    return (
        <>
            <Header />
            <div className="container mt-5">
                <h1 className="text-center">Lịch sử đặt hàng</h1>
                <table className="table table-hover" style={{ minHeight: "250px" }}>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Ngày đặt hàng</th>
                            <th>Tổng tiền</th>
                            <th>Chi tiết</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((h, index) => (
                            <tr>
                                <td style={{ width: "20%" }}>{(index + 1) + page * 5}</td>
                                <td style={{ width: "30%" }}>{h.orderDate}</td>
                                <td style={{ width: "30%" }}>{vnd.format(h.total)}</td>
                                <td style={{ width: "20%"}}><Link style={{color:"black"}} to={`/order-detail/${h.id}`}><FaCircleInfo />
                                </Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="page-pagination text-center">
                    <ul>
                        <li><a onClick={() => previousPage()}><i className="ion-ios-skipbackward" /></a></li>
                        {/* <li ><a style={{textDecoration: "none"}} className="active" href="#">1</a></li> */}
                        {/* <li><a href="#">2</a></li> */}
                        <li><a>{page + 1}/{totalPage}</a></li>
                        {/* <li><a href="#">3</a></li> */}
                        <li><a onClick={() => nextPage()}><i className="ion-ios-skipforward" /></a></li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}