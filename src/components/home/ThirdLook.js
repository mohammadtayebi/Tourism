import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import pic_1 from "../../utils/tourist sites/1.webp";
import pic_2 from "../../utils/tourist sites/2.webp";
import pic_3 from "../../utils/tourist sites/3.jpg";
import pic_4 from "../../utils/tourist sites/4.webp";
import pic_5 from "../../utils/tourist sites/5.webp";
import pic_6 from "../../utils/tourist sites/6.jpg";
import pic_7 from "../../utils/tourist sites/7.jpg";
import pic_8 from "../../utils/tourist sites/8.jpg";

const ThirdLook = () => {
  return (
    <Wrapper style={{ background: "#fcfcfc", paddingTop: "1rem" }}>
      <div className="text-center mt-5">
        <h4 className="title_2 mt-5">مکان های توریستی محبوب</h4>
        <h1 className="title_">تعدادی از مکان های دیدنی دماوند</h1>
      </div>
      <div className="row mx-0">
        <div className="col-lg-4 col-md-6 col-sm-12  text-center containers">
          <div className="cards">
            <img src={pic_1} alt="picture1" />
            <p className="titles ">غار رودافشان</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12  text-center containers">
          <div className="cards">
            <img src={pic_2} alt="picture1" />
            <p className="titles ">غار رودافشان</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12  text-center containers">
          <div className="cards">
            <img src={pic_3} alt="picture1" />
            <p className="titles ">غار رودافشان</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12  text-center containers">
          <div className="cards">
            <img src={pic_4} alt="picture1" />
            <p className="titles ">غار رودافشان</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12  text-center containers">
          {" "}
          <div className="cards">
            <img src={pic_5} alt="picture1" />
            <p className="titles ">غار رودافشان</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12  text-center containers">
          {" "}
          <div className="cards">
            <img src={pic_6} alt="picture1" />
            <p className="titles ">غار رودافشان</p>
          </div>
        </div>
      </div>
      <div className="text-center mb-3">
        <Link to="/tourism_sites" className="btn btn-success text-center ">
          مناطق دیدنی بیشتر
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  img {
    width: 100%;
    height: 20rem;
  }
  .containers {
    padding: 4rem;
  }
  .cards {
    border-radius: 10px;
    box-shadow: 3px 5px 35px rgba(86, 68, 169, 0.1);
    overflow: hidden;
  }
  .titles {
    margin: 15px 0;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #ff7f47;
  }
`;
export default ThirdLook;
