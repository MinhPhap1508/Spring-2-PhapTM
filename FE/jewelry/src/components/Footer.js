export function Footer () {

    return(

        <>
        <footer className="footer-section footer-bg section-top-gap-100">
  <div className="footer-wrapper">
    {/* Start Footer Top */}
    <div className="footer-top">
      <div className="container">
        <div className="row mb-n6">
          <div className="col-lg-3 col-sm-6 mb-6">
            {/* Start Footer Single Item */}
            <div className="footer-widget-single-item footer-widget-color--pink" data-aos="fade-up" data-aos-delay={0}>
              <h5 className="title">THÔNG TIN</h5>
              <ul className="footer-nav" style={{color:"white"}}>
                <li><p>Thông tin vận chuyển</p></li>
                <li><p>Điều khoản &amp; Hợp đồng</p></li>
                <li><p>Liên hệ</p></li>
                <li><p>Chính sách thanh toán</p></li>
              </ul>
            </div>
            {/* End Footer Single Item */}
          </div>
          <div className="col-lg-3 col-sm-6 mb-6">
            {/* Start Footer Single Item */}
            <div className="footer-widget-single-item footer-widget-color--pink" data-aos="fade-up" data-aos-delay={200}>
              <h5 className="title">Chính sách </h5>
              <ul className="footer-nav" style={{color:"white"}}>
                <li><p>Chính sách thanh toán và giao hàng</p></li>
                <li><p>Chính sách bảo hành</p></li>
                <li><p>Chính sách đổi trả</p></li>
                <li><p>Chính sách bảo mật</p></li>
              </ul>
            </div>
            {/* End Footer Single Item */}
          </div>
          <div className="col-lg-3 col-sm-6 mb-6">
            {/* Start Footer Single Item */}
            <div className="footer-widget-single-item footer-widget-color--pink" data-aos="fade-up" data-aos-delay={400}>
              <h5 className="title">Dịch vụ khách hàng</h5>
              <ul className="footer-nav" style={{color:"white"}}>
                <li><p>Hướng dẫn đo sai trang sức</p></li>
                <li><p>Mua hàng trả góp</p></li>
                <li><p>Hướng dẫn mua hàng và thanh toán</p></li>
                <li><p>Cẩm nang sử dụng tảng sức</p></li>
                <li><p>Câu hỏi thường gặp</p></li>
              </ul>
            </div>
            {/* End Footer Single Item */}
          </div>
          <div className="col-lg-3 col-sm-6 mb-6">
            {/* Start Footer Single Item */}
            <div className="footer-widget-single-item footer-widget-color--pink" data-aos="fade-up" data-aos-delay={600}>
              <h5 className="title">Tìm hiểu thêm về chúng tôi</h5>
              <div className="footer-about">
                <p style={{color:"white"}}>MP Jewerly là một công ty lớn về phân phối và kinh doanh trang sức lớn nhất khu vực Châu á</p>
                <address>
                  <p style={{color:"white"}}>Address: 78 Phạm Tuấn Tài, Ngũ Hành Sơn, Đà Nẵng</p>
                  <p style={{color:"white"}}>Email: MPJewerly@diamond.com</p>
                </address>
              </div>
            </div>
            {/* End Footer Single Item */}
          </div>
        </div>
      </div>
    </div>
    {/* End Footer Top */}
    {/* Start Footer Center */}
    <div className="footer-center">
      <div className="container">
        <div className="row mb-n6">
          <div className="col-xl-3 col-lg-4 col-md-6 mb-6">
            <div className="footer-social" data-aos="fade-up" data-aos-delay={0}>
              <h4 className="title">Theo dõi chúng tôi</h4>
              <ul className="footer-social-link">
                <li><a href="#"><i className="fa fa-facebook" /></a></li>
                <li><a href="#"><i className="fa fa-twitter" /></a></li>
                <li><a href="#"><i className="fa fa-instagram" /></a></li>
                <li><a href="#"><i className="fa fa-linkedin" /></a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6 col-md-6 mb-6">
            <div className="footer-newsletter" data-aos="fade-up" data-aos-delay={200}>
              <h4 className="title">Đừng bỏ lỡ những chương trình khuyến mãi mới nhất</h4>
              <div className="form-newsletter">
                <form action="#" method="post">
                  <div className="form-fild-newsletter-single-item input-color--pink">
                    <input type="email" placeholder="Your email address..." required />
                    <button type="submit">SUBSCRIBE!</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Start Footer Center */}
    {/* Start Footer Bottom */}
    <div className="footer-bottom">
      <div className="container">
        <div className="row justify-content-between align-items-center align-items-center flex-column flex-md-row mb-n6">
          <div className="col-auto mb-6">
            <div className="footer-copyright">
              <p className="copyright-text">© 2021 <a href="index.html">Minh Pháp</a>. Made with <i className="fa fa-heart text-danger" /> by <a href="https://therankme.com/" target="_blank">Jewerly</a> </p>
            </div>
          </div>
          <div className="col-auto mb-6">
            <div className="footer-payment">
              <div className="image">
                <img src="assets/images/company-logo/payment.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Start Footer Bottom */}
  </div>
</footer>

        </>
    )
}