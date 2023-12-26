import { useState } from "react"
import { infoToken } from "../service/Account";
import { useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { BsInfoSquare } from "react-icons/bs";
import { BiLogOut, BiHistory } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import './header.css'
import { cateList, tradeList, typeList } from "../service/HomeService";

export function Header() {
  const [username, setUsername] = useState("");
  const [JwtToken, setJwtToken] = useState(localStorage.getItem("JWT"));
  const [type, setType] = useState([]);
  const [cate, setCate] = useState([]);
  const [trade, setTrade] = useState([]);
  const navigate = useNavigate();
  

  const getUsername = async () => {
    const res = await infoToken();
    if (res != null) {
      setUsername(res.sub)
    }
  }
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
  const handleLogout = () => {
    localStorage.removeItem("JWT");
    setJwtToken(undefined);
    setUsername(undefined);
    navigate("/");
    Swal.fire({
      title: "Đăng xuất thành công!",
      icon: "success",
      showConfirmButton: false,
      timer: 1500
    });
    // navigate("/");
    // window.location.reload();
  }
  // const login = async() => {
  //   const res = infoToken();
  //   if(res !== null) {
  //     navigate("/")
  //   }
  // }
  useEffect(() => {
    getUsername();
    getType();
    getCate();
    getTrade();
  }, [])

  return (
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
                      <Link to="/"><img src="img/MPLOGO.png" alt="" style={{scale:"3.5"}} /></Link>
                    </div>
                  </div>
                  {/* End Header Logo */}
                  {/* Start Header Main Menu */}
                  <div className="main-menu menu-color--black menu-hover-color--golden">
                    <nav>
                      <ul>
                        <li>
                          <Link to="/">Trang chủ</Link>

                        </li>
                        <li className="has-dropdown has-megaitem">
                          <Link to="#">Danh Mục <i className="fa fa-angle-down" /></Link>
                          {/* Mega Menu */}
                          <div className="mega-menu">
                            <ul className="mega-menu-inner">
                              {/* Mega Menu Sub Link */}
                              <li className="mega-menu-item">
                                <a style={{ paddingLeft: "2rem" }} href="#" className="mega-menu-item-title">Chủng loại</a>
                                <ul className="mega-menu-sub">
                                  {cate.map((t) => (
                                    <li><Link to={`/category/${t.nameCategory}`}>{t.nameCategory}</Link></li>
                                  ))}
                                </ul>
                              </li>
                              {/* Mega Menu Sub Link */}
                              <li className="mega-menu-item">
                                <a style={{ paddingLeft: "2rem" }} href="#" className="mega-menu-item-title">Chất liệu</a>
                                <ul className="mega-menu-sub">
                                  {type.map((t) => (
                                    <li><Link to={`/type/${t.nameType}`}>{t.nameType}</Link></li>
                                  ))}
                                </ul>
                              </li>
                              {/* Mega Menu Sub Link */}
                              <li className="mega-menu-item">
                                <a style={{ paddingLeft: "2rem" }} href="#" className="mega-menu-item-title">Thương hiệu</a>
                                <ul className="mega-menu-sub">

                                  {trade.map((t) => (
                                    <li><Link to={`/trademark/${t.nameTrademark}`}>{t.nameTrademark}</Link></li>
                                  ))}
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

                    
                        <li>
                          <Link to="/product">Cửa Hàng</Link>
                        </li>
                        <li>
                          <Link to="/cart">Giỏ hàng</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  {/* End Header Main Menu Start */}
                  {/* Start Header Action Link */}
                  <ul className="header-action-link action-color--black action-hover-color--golden">
                    {/* <li>
                      <a href="/cart" className="offcanvas-toggle">
                        <i className="icon-bag" />
                        <span className="item-count">3</span>
                      </a>
                    </li>
                    <li className="d-flex"><input type="text" placeholder="Tìm kiếm nhanh"/>
                      <div href="#search">
                        <i className="icon-magnifier" />
                      </div>
                    </li> */}
                    {!JwtToken ? (
                      <li>
                        <Link to="/login"><i className="icon-user" /></Link>
                      </li>
                    ) : (
                      <li>
                        <Dropdown>
                          <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ border: "none", backgroundColor: "transparent", color: "#fef5ef" }}>
                            <p style={{ marginTop: "26px", color:"black", marginTop:"48px" }} href="#">
                              <i className="icon-user" />
                              <span style={{ color: "black" }}> {username}</span>
                            </p>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item>
                              <Link to="/history" className="Phap-span"><BiHistory /> Lịch sử đặt hàng</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link to="/customer" className="Phap-span"><BsInfoSquare /> Thông tin</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <div className="Phap-span" onClick={() => handleLogout()}><BiLogOut /> Đăng xuất</div>
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </li>
                    )}
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