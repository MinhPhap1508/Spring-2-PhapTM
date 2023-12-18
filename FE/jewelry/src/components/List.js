import { useEffect, useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { getListHeader, getListSearch, getSearchCategory, getSearchTrademark, getSearchType } from "../service/ProductService";
import { Link, useNavigate, useParams } from "react-router-dom";
import { infoToken } from "../service/Account";
import { addCart } from "../service/CartService";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export function List() {
    const [page, setPage] = useState(0);
    const [product, setProduct] = useState([]);
    const [totalPage, setTotalPage] = useState(1);
    const param = useParams();
    const [choose, setChoose] = useState("")
    const [nameType, setNameType] = useState("")
    const [nameCategory, setNameCategory] = useState("")
    const [nameTrademark, setNameTrademark] = useState("")
    const [nameProduct, setNameproduct] = useState("")
    const navigate = useNavigate();

    // const loadProductList = async () => {
    //     console.log("paraffm", nameType, nameCategory, nameTrademark);
    //     const res = await getListHeader(page, nameProduct, nameType, nameCategory, nameTrademark)
    //     console.log("kind", res.data);
    //     if (res.status === 204) {
    //         setNameproduct("")
    //     } else {
    //         setProduct(res.data.content);
    //         setTotalPage(res.data.totalPages);
    //     }
    // }
    const loadProductType = async () => {
        // console.log("paraffm", nameType);
        const res = await getSearchType(page, nameType)
        console.log("type", res.data);

        setProduct(res.data.content);
        setTotalPage(res.data.totalPages);

    }
    const loadProductCategory = async () => {
        const res = await getSearchCategory(page, nameCategory)
        console.log("category", res.data);

        setProduct(res.data.content);
        setTotalPage(res.data.totalPages);

    }
    const loadProductTrademark = async () => {
        const res = await getSearchTrademark(page, nameTrademark)
        console.log("trademark", res.data);
        // if (res.status === 204) {
        //     setNameproduct("")
        // } else {
        setProduct(res.data.content);
        setTotalPage(res.data.totalPages);
        // }
    }

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

    const getParam = () => {
        if (param.nameType) {
            setNameType(param.nameType)
            setNameCategory("");
            setNameTrademark("");
        }
        if (param.nameCategory) {
            setNameCategory(param.nameCategory);
            setNameType("");
            setNameTrademark("");
        }
        if (param.nameTrademark) {
            setNameTrademark(param.nameTrademark);
            setNameType("");
            setNameCategory("");
        }
    }
    const getTitle = () => {
        if (nameType) {
            return nameType;
        } else if (nameCategory) {
            return nameCategory;
        } else {
            return nameTrademark;
        }
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
    useEffect(() => {
        getParam();
    }, [param.nameType, param.nameCategory, param.nameTrademark])
    useEffect(() => {
        if (nameType) {
            loadProductType();
        } else if (nameCategory) {
            loadProductCategory();
        } else if (nameTrademark) {
            loadProductTrademark();
        }
        window.scrollTo(0,340);
    }, [page, nameType, nameCategory, nameTrademark])
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
                                            <li className="active" aria-current="page">{getTitle()}</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="tab-pane active show sort-layout-single" id="layout-4-grid">
                    <div className="row">
                        {product.map((p) => (
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
                                            <div className="action-link-right">
                                                <a href="#" data-bs-toggle="modal" data-bs-target="#modalQuickview"><i className="icon-magnifier" /></a>
                                                <a href="wishlist.html"><i className="icon-heart" /></a>
                                                <a href="compare.html"><i className="icon-shuffle" /></a>
                                            </div>
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
                        ))}
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