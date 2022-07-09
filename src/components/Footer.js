import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="row p-0 text-center mx-0 py-5">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <h5 className="header_texts">لینک های دسترسی سریع</h5>
          {/* <div className="line"></div> */}
          <div className="d-flex justify-content-center align-items-center flex-column">
            <Link to="/">خانه</Link>
            <Link to="/">درباره ما</Link>
            <Link to="/contact_us"> تماس با ما</Link>
            <Link to="/tourism_sites">مناطق دیدنی</Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <h5 className="header_texts">ارتباط با ما</h5>
          <div className="d-flex justify-content-center align-items-center flex-column">
            <div className="d-flex justify-content-center align-items-center">
              <div>
                <p className="p-0 m-0">021-7600000-11</p>
                <p className="p-0 m-0">021-7600000-12</p>
              </div>
              <i class="fas fa-phone mr-2 icons"></i>
            </div>
            <div className="d-flex justify-content-center align-items-center my-4">
              <div>
                <p className="p-0 m-0">tayebi.js@gmail.com</p>
                <p className="p-0 m-0">hajitayebi.mo@gmail.com</p>
              </div>
              <i class="fas fa-envelope icons mr-3"></i>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <div>
                <p className="p-0 m-0">شرق تهران</p>
                <p className="p-0 m-0">مابین رودهن و فیروزکوه</p>
              </div>
              <i class="fas fa-map-marker-alt icons mr-2"></i>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <h5 className="header_texts">شبکه های اجتمایی</h5>
          <div>
            <i class="fab fa-instagram icons"></i>
            <i class="fab fa-linkedin icons mx-3"></i>
            <i class="fab fa-whatsapp icons"></i>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="py-3 text-center">
        <p className="m-0 p-0">
          کلیه حقوق وبسایت متعلق به سایت سودیتال میباشد . ©
        </p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.footer`
  background: #262339;
  color: #fff;
  padding-top: 20px;
  a {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #fff;
    margin-bottom: 15px;
    transition: all 0.3s ease-in-out !important;
  }
  p {
    font-size: 20px;
  }
  a:hover {
    text-decoration: none;
    color: #ff7f47 !important;
  }
  .line {
    background: #423f54;
    height: 1px;
  }
  .header_texts {
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 43px;
    color: #fff;
    margin-bottom: 25px;
  }
  .icons {
    color: #ff7f47;
    font-size: 30px;
  }
`;
export default Footer;
