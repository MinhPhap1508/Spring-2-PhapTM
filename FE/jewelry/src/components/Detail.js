import { useState } from "react";
import { getProductById } from "../service/ProductService";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function Detail() {
    const [product, setProduct] = useState(null);
    const param = useParams();
    const [images, setImages] = useState([]);
    const vnd = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })
    const getProduct = async (id) => {
        const res = await getProductById(id);
        const temp = res.data.image.split(",");
        console.log("data", res);
        setProduct(res.data);
        setImages(temp);
    }
    useEffect(() => {
        getProduct(param.id);
    }, [param.id])
    return (
        <>
            <Header />
            <div>
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
                                                <li className="active" aria-current="page">Chi tiết sản phẩm</li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* ...:::: End Breadcrumb Section:::... */}
                {/* Start Product Details Section */}
                {product && (
                    <>
                        <div className="product-details-section">
                            <div className="container">
                                <div className="row" id="carouselExampleIndicators">
                                    <div className="col-xl-5 col-lg-6">
                                        <div className="product-details-gallery-area" data-aos="fade-up" data-aos-delay={0}>
                                            {/* Start Large Image */}
                                            <div className="product-large-image product-large-image-horaizontal">
                                                <div className="swiper-wrapper" style={{ width: "400px", height: "400px" }}>
                                                    {images.length > 0 &&
                                                        images.map((i, index) => (
                                                            <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                                                <img style={{ objectFit: "cover", width: "100%", height: "100%" }} src={i}
                                                                    alt="..." />
                                                            </div>


                                                        ))}
                                                </div>
                                            </div>
                                            {/* End Large Image */}
                                            {/* Start Thumbnail Image */}
                                            <div className="product-image-thumb product-image-thumb-horizontal mt-5">
                                                <div className="swiper-wrapper">
                                                    {images.length > 0 &&
                                                        images.map((i, index) => (
                                                            <button
                                                                type="button"
                                                                data-bs-target="#carouselExampleIndicators"
                                                                data-bs-slide-to={index}
                                                                className={index === 0 ? "active" : ""}
                                                                aria-current="true"
                                                                aria-label={`Slide ${index + 1}`}
                                                                style={{ width: 60, height: 70 }}
                                                            >
                                                                <img
                                                                    src={i}
                                                                    alt="..."
                                                                    className="d-block w-100"
                                                                    style={{ border: "1px lightskyblue solid" }}
                                                                />
                                                            </button>

                                                        ))}

                                                </div>
                                                {/* Add Arrows */}
                                                <button
                                                    className="carousel-control-prev"
                                                    type="button"
                                                    data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide="prev"
                                                >
                                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                                    <span className="visually-hidden">Previous</span>
                                                </button>
                                                <button className="carousel-control-next"
                                                    type="button"
                                                    data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide="next">
                                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                                    <span className="visually-hidden">Next</span>
                                                </button>
                                                {/* <div className="gallery-thumb-arrow swiper-button-next" />
                                                <div className="gallery-thumb-arrow swiper-button-prev" /> */}
                                            </div>
                                            {/* End Thumbnail Image */}
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-6">
                                        <div className="product-details-content-area product-details--golden" data-aos="fade-up" data-aos-delay={200}>
                                            {/* Start  Product Details Text Area*/}
                                            <div className="product-details-text">
                                                <h4 className="title">{product.nameProduct}</h4>
                                                <h6 className="product-ref ">Thương hiệu: <span>{product.trademark}</span></h6>
                                                <div className="price">Giá: {vnd.format(product.price)}</div>
                                                <p>{product.description}</p>
                                            </div> {/* End  Product Details Text Area*/}
                                            {/* Start Product Variable Area */}
                                            <div className="product-details-variable">
                                                {/* Product Variable Single Item */}
                                                <div className="variable-single-item">
                                                    <span>Kích cỡ</span>
                                                    <select className="product-variable-size">
                                                        <option selected value={1}> Chọn kích cỡ</option>
                                                        <option value={2}>9</option>
                                                        <option value={3}>10</option>
                                                        <option value={4}>11</option>
                                                        <option value={5}>12</option>
                                                        <option value={6}>13</option>
                                                    </select>
                                                </div>
                                                {/* Product Variable Single Item */}
                                                <div className="d-flex align-items-center ">
                                                    <div className="variable-single-item ">
                                                        <span>Số lượng</span>
                                                        <div className="product-variable-quantity">
                                                            <input min={1} max={100} defaultValue={1} type="number" />
                                                        </div>
                                                    </div>
                                                    <div className="product-add-to-cart-btn">
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#modalAddcart"> Thêm vào giỏ hàng</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> {/* End Product Details Section */}
                        {/* Start Product Content Tab Section */}
                        <div className="product-details-content-tab-section section-top-gap-100">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="product-details-content-tab-wrapper" data-aos="fade-up" data-aos-delay={0}>
                                            {/* Start Product Details Tab Button */}
                                            <ul className="nav tablist product-details-content-tab-btn d-flex justify-content-center">
                                                <li><a className="nav-link active" data-bs-toggle="tab" href="#description">
                                                    Mô tả
                                                </a></li>
                                                {/* <li><a class="nav-link" data-bs-toggle="tab" href="#specification">
                              Specification
                          </a></li>
                      <li><a class="nav-link" data-bs-toggle="tab" href="#review">
                              Reviews (1)
                          </a></li> */}
                                            </ul> {/* End Product Details Tab Button */}
                                            {/* Start Product Details Tab Content */}
                                            <div className="product-details-content-tab">
                                                <div className="tab-content">
                                                    {/* Start Product Details Tab Content Singel */}
                                                    <div className="tab-pane active show" id="description">
                                                        <div className="single-tab-content-item">
                                                            <p>Với kiểu dáng thời thượng cùng những viên đá đính xung quanh bề mặt chiếc nhẫn trên chất liệu bạc 92.5,
                                                                PNJSilver mang đến chiếc nhẫn với vẻ đẹp trẻ trung nhưng không kém phần phá cách, giúp các cô gái trông thật nổi bật.
                                                            </p>
                                                            <p>PNJSilver hiểu rằng, các cô gái luôn có đặc quyền được làm đẹp và tỏa sáng để tạo nên phong cách riêng của chính mình.
                                                                Để thỏa sức sáng tạo với lựa chọn riêng của từng cô gái,
                                                                nàng có thể kết hợp nhiều items khác để dễ dàng mix&amp;match với nhau tùy theo cá tính thời trang và luôn refresh diện mạo mỗi ngày nhé.</p>
                                                        </div>
                                                    </div> {/* End Product Details Tab Content Singel */}
                                                </div>
                                            </div> {/* End Product Details Tab Content */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </>
    )
}