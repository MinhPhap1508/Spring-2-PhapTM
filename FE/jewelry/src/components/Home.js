import { Footer } from "./Footer";
import { Header } from "./Header";

export function Home() {

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
                                    <div className="swiper-container product-default-slider-4grid-1row">
                                        {/* Additional required wrapper */}
                                        <div className="swiper-wrapper">
                                            {/* Start Product Default Single Item */}
                                            <div className="product-default-single-item product-color--pink swiper-slide">
                                                <div className="image-box">
                                                    <a href="product-details-default.html" className="image-link">
                                                        <img src="https://cdn.pnj.io/images/thumbnails/300/300/detailed/114/gn0000y000143-nhan-kim-tien-vang-18k-pnj-0001.png" alt />
                                                    </a>
                                                    <div className="action-link">
                                                        <div className="action-link-left">
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart">Add to Cart</a>
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
                                                        <h6 className="title"><a href="product-details-default.html">Epicuri per
                                                            lobortis</a></h6>
                                                    </div>
                                                    <div className="content-right">
                                                        <span className="price">$68</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Product Default Single Item */}
                                            {/* Start Product Default Single Item */}
                                            <div className="product-default-single-item product-color--pink swiper-slide">
                                                <div className="image-box">
                                                    <a href="product-details-default.html" className="image-link">
                                                        <img src="https://cdn.pnj.io/images/thumbnails/300/300/detailed/103/gmddddw000355-mat-day-chuyen-kim-cuong-vang-trang-14k-pnj-001.png" alt />
                                                        {/* <img src="https://cdn.pnj.io/images/thumbnails/300/300/detailed/82/gnxmxmw001740-nhan-nam-vang-trang-10k-dinh-da-ecz-swarovski-pnj.png" alt=""> */}
                                                    </a>
                                                    <div className="action-link">
                                                        <div className="action-link-left">
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart">Add to Cart</a>
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
                                                        <h6 className="title"><a href="product-details-default.html">Kaoreet
                                                            lobortis sagit</a></h6>
                                                    </div>
                                                    <div className="content-right">
                                                        <span className="price">$95.00</span>
                                                    </div>
                                                </div>
                                            </div>
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

<Footer/>
        </>
    )
}