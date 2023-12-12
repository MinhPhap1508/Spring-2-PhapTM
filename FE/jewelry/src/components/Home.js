import { useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ListHome } from "../service/HomeService";
import { useEffect } from "react";
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from "react-router-dom";

export function Home() {

    const [product, setProduct] = useState([]);
    const vnd = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })
    const getHome = async () => {
        const res = await ListHome();
        console.log("home", res);
        setProduct(res);
    }
    useEffect(() => {
        getHome();
        document.title = "Minh Pháp Jewerly"
    }, [])

    return (
        <>
            <Header />
            {/* start banner */}



            {/* end banner */}
            <div className="product-default-slider-section section-fluid section-inner-bg">
                {/* Start Section Content Text Area */}
                <div className="section-title-wrapper" data-aos="fade-up" data-aos-delay={0}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-content-gap">
                                    <div className="secton-content">
                                        <h3 className="section-title">Danh sách yêu thích</h3>
                                        <p>Những sản phẩm bán chạy nhất của cửa hàng.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Start Section Content Text Area */}
                <div className="product-wrapper" data-aos="fade-up" data-aos-delay={0}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="product-slider-default-1row default-slider-nav-arrow">
                                    {/* Slider main container */}
                                    <div className="product-default-slider-4grid-1row">
                                        {/* Additional required wrapper */}
                                        <div className="swiper-wrapper">
                                            <Swiper
                                                slidesPerView={2}
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
                                            />
                                            {/* Start Product Default Single Item */}
                                            {product.map((p) => (
                                                <SwiperSlide>
                                                <div className="product-default-single-item product-color--pink swiper-slide">

                                                    <div className="image-box">
                                                        <Link to={`/product/${p.id}`} className="image-link">
                                                            <img src={p.image} alt />
                                                        </Link>
                                                        <div className="action-link">
                                                            <div className="action-link-left">
                                                                <a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart">Thêm vào giỏ hàng</a>
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
                                                            <h6 className="title">{p.nameProduct}</h6>
                                                        </div>
                                                        <div className="content-right">
                                                            <span className="price">{vnd.format(p.price)}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                </SwiperSlide>
                                            ))}
                                            {/* End Product Default Single Item */}

                                        </div>
                                    </div>
                                    <div className="swiper-button-prev" />
                                    <div className="swiper-button-next" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}