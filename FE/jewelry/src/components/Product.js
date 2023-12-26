import { useEffect, useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { addCart } from "../service/CartService";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { infoToken } from "../service/Account";
import { getListHeader } from "../service/ProductService";
import { cateList, tradeList, typeList } from "../service/HomeService";

export function Product() {
    const [page, setPage] = useState(0);
    const [product, setProduct] = useState([]);
    const [totalPage, setTotalPage] = useState(1);
    const [nameType, setNameType] = useState("")
    const [nameCategory, setNameCategory] = useState("")
    const [nameTrademark, setNameTrademark] = useState("")
    const [nameProduct, setNameproduct] = useState("")
    const [type, setType] = useState([]);
    const [cate, setCate] = useState([]);
    const [trade, setTrade] = useState([]);
    const [sortBy, setSortBy] = useState("price");
    const [sort, setSort] = useState("asc");
    const navigate = useNavigate();
    const [hasSearchResults, setHasSearchResults] = useState(true);



    const vnd = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })

    const nextPage = () => {
        if (page < totalPage - 1) {
            setPage((Prev) => Prev + 1);
        }
    };
    const previousPage = () => {
        if (page > 0) {
            setPage((Prev) => Prev - 1);
        }
    };
    const getType = async () => {
        const res = await typeList()
        setType(res);
    }
    const getCate = async () => {
        const res = await cateList();
        setCate(res);
    }
    const getTrade = async () => {
        const res = await tradeList();
        setTrade(res);
    }
    const addToCart = async (value) => {
        const res = infoToken();
        if (res != null) {
            const result = await addCart(1, res.sub, value.id)
            if (result.status == 200) {
                toast("Thêm 1 sản phẩm nữa vào giỏ hàng")
            }
            if (result.status == 201) {
                toast("Thêm sản phẩm thành công")
            }
        } else {
            Swal.fire("Vui lòng đăng nhập")
            navigate("/login")
        }
    }
    const loadProductList = async () => {
        console.log("nameProduct", nameProduct);
        const res = await getListHeader(page, 8, nameProduct, nameType, nameCategory, nameTrademark, sort, sortBy)
        if (res.status === 204) {
            setHasSearchResults(false)
            // setNameproduct("")
        } else {
            setProduct(res.data.content);
            setTotalPage(res.data.totalPages);
            setHasSearchResults(true);
        }
    }
    const handleSortByChange = (event) => {
        setSortBy(event.target.value);
    };

    const handleSortDirectionChange = (event) => {
        setSort(event.target.value);
    };
    useEffect(() => {
        loadProductList();
        getType();
        getCate();
        getTrade();
        document.title = "Danh sách sản phẩm"
    }, [page, nameProduct, nameCategory, nameType, nameTrademark, sortBy, sort])

    return (
        <>
            <Header />
            <div className="breadcrumb-section breadcrumb-bg-color--golden">
                <div className="breadcrumb-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="breadcrumb-title">Chi tiết sản phẩm</h3>
                                <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
                                    <nav aria-label="breadcrumb">
                                        <ul>
                                            <li><a href="home.html">Trang chủ</a></li>
                                            <li><a href="shop-grid-sidebar-left.html">Cửa hàng</a></li>
                                            <li className="active" aria-current="page">Sản phẩm</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">

                <div className="row">
                    <div className="col-8">
                        <h5>Bộ lọc:</h5>
                        <div className="row">
                            <div className="col-3 d-flex">
                                <input name="nameProduct" type="search" placeholder="Nhập gì đó"
                                    onChange={(e) => setNameproduct(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), loadProductList())}
                                />
                                {/* <button onClick={(e) => loadProductList(e)}>Tìm</button> */}
                            </div>
                            <div className="col-3" style={{ borderRadius: "40px" }}>
                                <select className="form-select form-select-ms" onChange={(e) => setNameCategory(e.target.value)}>
                                    <option value="">Loại trang sức</option>
                                    {cate.map((ct) => (
                                        <option key={ct.id} value={ct.nameCategory}>{ct.nameCategory}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-3">
                                <select className="form-select form-select-ms" onChange={(e) => setNameType(e.target.value)}>
                                    <option value="">Chất liệu</option>
                                    {type.map((t) => (
                                        <option key={t.id} value={t.nameType}>{t.nameType}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-3">
                                <select className="form-select form-select-ms" onChange={(e) => setNameTrademark(e.target.value)}>
                                    <option value="">Thương hiệu</option>
                                    {trade.map((t) => (
                                        <option key={t.id} value={t.nameTrademark}>{t.nameTrademark}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                    </div>
                    <div className="col-2">
                        {/* <div className="d-flex ms-5 gap-3 fs-6 align-items-center"> */}
                            <b>Sắp xếp theo: </b>
                            <select value={sortBy} onChange={handleSortByChange}
                                className="form-select form-select-ms" style={{ width: "80%", marginTop:"8px" }}>
                                <option value="price">Giá</option>
                                <option value="nameProduct">Tên sản phẩm</option>
                            </select>

                            
                        {/* </div> */}

                    </div>
                    <div className="col-2">
                    <b>Cách sắp xếp: </b>
                            <select className="form-select form-select-ms"
                                style={{ width: "60%", marginTop:"8px" }}
                                value={sort}
                                onChange={handleSortDirectionChange}
                            >
                                <option value="asc">Tăng dần</option>
                                <option value="desc">Giảm dần</option>
                            </select>
                    </div>

                </div>

                <div className="tab-pane active show sort-layout-single" id="layout-4-grid">
                    <div className="row" style={{ minHeight: "1200px" }}>
                        {hasSearchResults ? (
                            product.map((p) => (
                                <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                    {/* Start Product Default Single Item */}
                                    <div className="product-default-single-item product-color--golden">
                                        <div className="image-box" style={{ boxShadow: "0 4px 10px 2px rgba(0, 0, 0, 0.1)", borderRadius: "20px" }}>
                                            <Link to={`/product/${p.id}`} className="image-link" style={{ paddingTop: "50px" }}>
                                                <img src={p.image} alt />
                                            </Link>
                                            <div className="action-link">
                                                <div className="action-link-left">
                                                    <button onClick={() => addToCart(p)} style={{ color: "white" }}>Thêm vào giỏ hàng</button>
                                                </div>
                                                {/* <div className="action-link-right">
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview"><i className="icon-magnifier" /></a>
                                                <a href="wishlist.html"><i className="icon-heart" /></a>
                                                <a href="compare.html"><i className="icon-shuffle" /></a>
                                            </div> */}
                                            </div>
                                        </div>
                                        <div className="content">
                                            <div className="content-left"

                                                style={{ minHeight: "100px" }}>
                                                <h6 className="title">{p.nameProduct}
                                                </h6>
                                            </div>

                                        </div>
                                        <div className="content-right">
                                            <span className="price">{vnd.format(p.price)}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div>
                                <h4 style={{ textAlign: "center", color: "red", marginTop: "13rem" }}>Không có sản phẩm này</h4>
                            </div>
                        )}
                    </div>
                </div>
                <div className="page-pagination text-center" data-aos="fade-up" data-aos-delay={0}>
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