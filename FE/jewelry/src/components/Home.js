import { useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { BestSeller, ListHome } from "../service/HomeService";
import { useEffect } from "react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Link, useNavigate } from "react-router-dom";
import { MyCarousel } from "./MyCarousel";
import './home.css'
import { infoToken } from "../service/Account";
import { addCart } from "../service/CartService";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export function Home() {

    const [product, setProduct] = useState([]);
    const [bestSeller, setBestSeller] = useState([]);
    const navigate = useNavigate();
    const vnd = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })
    const getHome = async () => {
        const res = await ListHome();
        console.log("home", res);
        setProduct(res);
    }
    const getBestSellet = async() => {
        const res = await BestSeller();
        setBestSeller(res);
    }
    const addToCart = async(value) => {
        const res = infoToken();
        if(res !=null) {
            const result = await addCart(1, res.sub, value.id)
            if(result.status==200){
                toast("Thêm 1 sản phẩm nữa vào giỏ hàng")
            }
            if(result.status==201){
                toast("Thêm sản phẩm thành công")
            }
        } else{
            Swal.fire("Vui lòng đăng nhập")
            navigate("/login")
        }
    }
    useEffect(() => {
        getHome();
        getBestSellet();
        document.title = "Minh Pháp Jewerly"
    }, [])

    return (
        <>
            <Header />
            {/* start banner */}
            <div>
                <MyCarousel></MyCarousel>
            </div>


            {/* end banner */}
            <div className="product-default-slider-section section-fluid section-inner-bg">
                <div className="section-title-wrapper" data-aos="fade-up" data-aos-delay={0}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-content-gap">
                                    <div className="secton-content">
                                        <h3 className="section-title">Danh sách sản phẩm</h3>
                                        <p>Những sản phẩm mới nhất của cửa hàng.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 d-flex">

                            <Swiper
                                slidesPerView={4}
                                spaceBetween={10}
                                freeMode={true}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[FreeMode, Pagination, Autoplay]}
                                className="mySwiper"
                            >
                            {product.map((p) => (
                                <SwiperSlide>

                                    <div className="card">
                                        <img className="mx-auto img-thumbnail" src={p.image} />
                                        <div className="card-body text-center mx-auto">
                                            <div className="cvp">
                                                <h5 className="card-title font-weight-bold">{p.nameProduct}</h5>
                                                <p className="card-text price">{vnd.format(p.price)}</p>
                                                <Link to={`/product/${p.id}`} className="btn details px-auto">Xem chi tiết</Link><br />
                                                <button className="btn cart px-auto" onClick={() => addToCart(p)}>Thêm vào giỏ hàng</button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            </Swiper>
                        </div>
                    </div>
                </div>

                {/* ok */}
                <div className="container mt-5">
                <div className="secton-content">
                                        <h3 className="section-title">Danh sách sản phẩm Yêu thích</h3>
                                        <p>Những sản phẩm yêu thích nhất của cửa hàng.</p>
                                    </div>
                <div className="tab-pane active show sort-layout-single" id="layout-4-grid">
                    <div className="row">
                    <Swiper
                                slidesPerView={4}
                                spaceBetween={20}
                                freeMode={true}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[FreeMode, Pagination, Autoplay]}
                                className="mySwiper"
                            >
                        {bestSeller.map((p) => (
                            <SwiperSlide>
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                {/* Start Product Default Single Item */}
                                <div className="product-default-single-item product-color--golden mt-5" style={{width:"300px"}}>
                                    <div className="image-box" style={{ boxShadow: "0 4px 10px 2px rgba(0, 0, 0, 0.1)", borderRadius: "20px"}}>
                                        <Link to={`/product/${p.id}`} className="image-link" style={{paddingTop:"50px"}}>
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
                                        <div className="content-left">
                                            <h6 className="title">{p.nameProduct}
                                            </h6>
                                        </div>

                                    </div>
                                    <div className="content mb-5">
                                        <div className="content-right">
                                            <span className="price">{vnd.format(p.price)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                        ))}
                        </Swiper>
                    </div>
                </div>
            

            </div>

                {/* end */}

            </div>

            <Footer />
        </>
    )
}