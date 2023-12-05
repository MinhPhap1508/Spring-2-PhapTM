import { useState } from "react"
import { infoToken } from "../service/Account";
import { useEffect } from "react";
import { Dropdown } from "bootstrap";

export function Header() {
    const [username, setUsername] = useState("");

    const getUsername = async() => {
        const res = await infoToken();
        if(res != null){
            setUsername(res.sub)
        }
    }
    useEffect(() => {
        getUsername();
    }, [])

    return(
        <>
         <div className="header-section d-none d-xl-block">
  <div className="header-wrapper">
    <div className="header-bottom header-bottom-color--golden section-fluid sticky-header sticky-color--golden">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex align-items-center justify-content-between">
            {/* Start Header Logo */}
            <div className="header-logo">
              <div className="logo">
                <a href="home.html"><img src="assets/images/logo/logo_black.png" alt /></a>
              </div>
            </div>
            {/* End Header Logo */}
            {/* Start Header Main Menu */}
            <div className="main-menu menu-color--black menu-hover-color--golden">
              <nav>
                <ul>
                  <li className="has-dropdown">
                    <a className="active main-menu-link" href="index.html">Trang chủ <i className="fa fa-angle-down" /></a>
                    {/* Sub Menu */}
                    <ul className="sub-menu">
                      <li><a href="index.html">Home 1</a></li>
                      <li><a href="index-2.html">Home 2</a></li>
                      <li><a href="index-3.html">Home 3</a></li>
                      <li><a href="index-4.html">Home 4</a></li>
                    </ul>
                  </li>
                  <li className="has-dropdown has-megaitem">
                    <a href="product-details-default.html">Cửa hàng <i className="fa fa-angle-down" /></a>
                    {/* Mega Menu */}
                    <div className="mega-menu">
                      <ul className="mega-menu-inner">
                        {/* Mega Menu Sub Link */}
                        <li className="mega-menu-item">
                          <a style={{paddingLeft:"2rem"}} href="#" className="mega-menu-item-title">Trang sức vàng</a>
                          <ul className="mega-menu-sub">
                            <li><a href="shop-grid-sidebar-left.html">Grid Left
                                Sidebar</a></li>
                            <li><a href="shop-grid-sidebar-right.html">Grid Right
                                Sidebar</a></li>
                            <li><a href="shop-full-width.html">Full Width</a></li>
                            <li><a href="shop-list-sidebar-left.html">List Left
                                Sidebar</a></li>
                            <li><a href="shop-list-sidebar-right.html">List Right
                                Sidebar</a></li>
                          </ul>
                        </li>
                        {/* Mega Menu Sub Link */}
                        <li className="mega-menu-item">
                          <a style={{paddingLeft:"2rem"}} href="#" className="mega-menu-item-title">Trang sức bạc</a>
                          <ul className="mega-menu-sub">
                            <li><a href="gio_hang.html">Cart</a></li>
                            <li><a href="khong_co_gio_hang.html">Empty Cart</a></li>
                            <li><a href="wishlist.html">Wishlist</a></li>
                            <li><a href="compare.html">Compare</a></li>
                            <li><a href="checkout.html">Checkout</a></li>
                            <li><a href="login.html">Login</a></li>
                            <li><a href="my-account.html">My Account</a></li>
                          </ul>
                        </li>
                        {/* Mega Menu Sub Link */}
                        <li className="mega-menu-item">
                          <a style={{paddingLeft:"2rem"}} href="#" className="mega-menu-item-title">Trang sức kim cương</a>
                          <ul className="mega-menu-sub">
                            <li><a href="product-details-default.html">Product
                                Default</a></li>
                            <li><a href="product-details-variable.html">Product
                                Variable</a></li>
                            <li><a href="product-details-affiliate.html">Product
                                Referral</a></li>
                            <li><a href="product-details-group.html">Product Group</a>
                            </li>
                            <li><a href="product-details-single-slide.html">Product
                                Slider</a></li>
                          </ul>
                        </li>
                        {/* Mega Menu Sub Link */}
                        <li className="mega-menu-item">
                          <a style={{paddingLeft:"2rem"}} href="#" className="mega-menu-item-title">Đá quý</a>
                          <ul className="mega-menu-sub">
                            <li><a href="product-details-tab-left.html">Product Tab
                                Left</a></li>
                            <li><a href="product-details-tab-right.html">Product Tab
                                Right</a></li>
                            <li><a href="product-details-gallery-left.html">Product
                                Gallery Left</a></li>
                            <li><a href="product-details-gallery-right.html">Product
                                Gallery Right</a></li>
                            <li><a href="product-details-sticky-left.html">Product
                                Sticky Left</a></li>
                            <li><a href="product-details-sticky-right.html">Product
                                Sticky right</a></li>
                          </ul>
                        </li>
                      </ul>
                      <div className="menu-banner">
                        <a href="#" className="menu-banner-link">
                          <img className="menu-banner-img" src="https://www.tierra.vn/files/bannercach-oNYNJcb86Y.jpg" alt />
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="has-dropdown">
                    <a href="blog-single-sidebar-left.html">Blog <i className="fa fa-angle-down" /></a>
                    {/* Sub Menu */}
                    <ul className="sub-menu">
                      <li><a href="blog-grid-sidebar-left.html">Blog Grid Sidebar left</a>
                      </li>
                      <li><a href="blog-grid-sidebar-right.html">Blog Grid Sidebar Right</a>
                      </li>
                      <li><a href="blog-full-width.html">Blog Full Width</a></li>
                      <li><a href="blog-list-sidebar-left.html">Blog List Sidebar Left</a>
                      </li>
                      <li><a href="blog-list-sidebar-right.html">Blog List Sidebar Right</a>
                      </li>
                      <li><a href="blog-single-sidebar-left.html">Blog Single Sidebar left</a>
                      </li>
                      <li><a href="blog-single-sidebar-right.html">Blog Single Sidebar
                          Right</a></li>
                    </ul>
                  </li>
                  <li className="has-dropdown">
                    <a href="#">Pages <i className="fa fa-angle-down" /></a>
                    {/* Sub Menu */}
                    <ul className="sub-menu">
                      <li><a href="faq.html">Frequently Questions</a></li>
                      <li><a href="privacy-policy.html">Privacy Policy</a></li>
                      <li><a href="404.html">404 Page</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="about-us.html">About Us</a>
                  </li>
                  <li>
                    <a href="contact-us.html">Liên hệ</a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* End Header Main Menu Start */}
            {/* Start Header Action Link */}
            <ul className="header-action-link action-color--black action-hover-color--golden">
              <li>
                <a href="#offcanvas-add-cart" className="offcanvas-toggle">
                  <i className="icon-bag" />
                  <span className="item-count">3</span>
                </a>
              </li>
              <li>
                <a href="#search">
                  <i className="icon-magnifier" />
                </a>
              </li>
              <li>
                  <p style={{marginTop:"26px"}} href="#offcanvas-about">
                  <i className="icon-user" />
                  <span style={{color:"black"}}> {username}</span>
                </p>
               
              </li>
            </ul>
            {/* End Header Action Link */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


        </>
    )
}