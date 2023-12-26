import { useState } from "react";
import { getProductById } from "../service/ProductService";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { infoToken } from "../service/Account";
import { addCart } from "../service/CartService";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

export function Detail() {
    const [product, setProduct] = useState(null);
    const param = useParams();
    const navigate = useNavigate();
    const [images, setImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [maxQuantity, setMaxQuantity] = useState(0);



    const vnd = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })
    const changeImage = (index) => {
        setCurrentImageIndex(index);
    };

    const getProduct = async (id) => {
        const res = await getProductById(id);
        const temp = res.data.image.split(",");
        console.log("data", res);
        setProduct(res.data);
        setImages(temp);
        setMaxQuantity(res.data.quantity);
    }
    const addToCart = async (value) => {
        const res = infoToken();
        if (res != null) {
            if(quantity <= maxQuantity) {
            const result = await addCart(quantity, res.sub, value.id)
            toast("Thêm sản phẩm thành công")
            } else {
                Swal.fire("Số lượng sản phẩm trong kho không đủ")
            }
        } else {
            Swal.fire("Vui lòng đăng nhập")
            navigate("/login")
        }
    }
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    useEffect(() => {
        getProduct(param.id);
        window.scrollTo(0, 320);
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
                                                <li><a href="/">Trang chủ</a></li>
                                                <li><a href="/">Cửa hàng</a></li>
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
                                                            <div key={index} className={`carousel-item ${index === currentImageIndex ? "active" : ""}`}>
                                                                <img style={{ objectFit: "cover", width: "100%", height: "100%", marginLeft: "5rem", backgroundColor: "whiteSmoke" }} src={i}
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
                                                                key={index}
                                                                type="button"
                                                                onClick={() => changeImage(index)}
                                                                className={index === currentImageIndex ? "active" : ""}
                                                                aria-label={`Slide ${index + 1}`}
                                                            >
                                                                <img
                                                                    src={i}
                                                                    alt="..."
                                                                    className="d-block"
                                                                    style={{ border: "1px pink solid", margin: "0 27px 0", width: "80%" }}
                                                                />
                                                            </button>

                                                        ))}

                                                </div>
                                                {/* Add Arrows */}
                                                {/* <button
                                                    className="carousel-control-prev"
                                                    type="button"
                                                    data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide="prev"
                                                >
                                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                                    <span className="visually-hidden">Previous</span>
                                                </button> */}
                                                {/* <button className="carousel-control-next"
                                                    type="button"
                                                    data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide="next">
                                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                                    <span className="visually-hidden">Next</span>
                                                </button> */}
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
                                                <h4 style={{fontFamily:"display"}} className="title">{product.nameProduct}</h4>
                                                <h5 style={{fontFamily:"monaco"}} className="product-ref ">Thương hiệu: <span>{product.nameTrademark}</span></h5>
                                                <h5 style={{fontFamily:"monaco"}} className="product-ref ">Dòng sản phẩm: <span>{product.nameCategory} {product.nameType}</span></h5>
                                                {/* <p>{product.description}</p> */}
                                            </div> {/* End  Product Details Text Area*/}
                                            <div>
                                                <h5 style={{fontFamily:"monaco"}}>Số lượng còn lại trong kho: {product.quantity}</h5>
                                            </div>
                                            <h5 style={{fontFamily:"monaco"}}>{product.code}  {product.nameProduct}</h5>
                                            <h2 style={{fontFamily:"monaco", fontWeight:"bold"}} className="price h-5">Giá: {vnd.format(product.price)}</h2>

                                            {/* Start Product Variable Area */}
                                            <div className="product-details-variable">
                                                {/* Product Variable Single Item */}
                                                {/* <div className="variable-single-item">
                                                    <span>Kích cỡ</span>
                                                    <select className="product-variable-size">
                                                        <option selected value={1}> Chọn kích cỡ</option>
                                                        <option value={2}>9</option>
                                                        <option value={3}>10</option>
                                                        <option value={4}>11</option>
                                                        <option value={5}>12</option>
                                                        <option value={6}>13</option>
                                                    </select>
                                                </div> */}
                                                {/* Product Variable Single Item */}
                                                <div className="align-items-center ">
                                                    {/* <h5>Số lượng</h5> */}

                                                    <div className="variable-single-item d-flex mt-2">
                                                        <span className="btn btn-outline-dark" style={{ width: "50px", marginBottom: "4px" }} onClick={decreaseQuantity}>
                                                            <FaMinus />
                                                        </span>
                                                        <div className="product-variable-quantity">
                                                            <input style={{ padding: "8px", textAlign: "center", marginLeft: "1rem" }}
                                                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                                                                min={1} max={100} value={quantity} type="number" />
                                                        </div>
                                                        <span className="btn btn-outline-dark" style={{ width: "50px", marginBottom: "4px" }} onClick={increaseQuantity}>
                                                            <FaPlus />
                                                        </span>
                                                    </div>

                                                </div>
                                                <div className="product-add-to-cart-btn text-light">
                                                    <a onClick={() => addToCart(product)}> Thêm vào giỏ hàng</a>
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