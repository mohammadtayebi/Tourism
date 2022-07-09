import React from "react";
import styled from "styled-components";
import pic_1 from "../utils/residency/1.jpg";
import pic_2 from "../utils/residency/2.jpg";
import pic_3 from "../utils/residency/3.jpg";
import pic_4 from "../utils/residency/4.jpg";
import pic_5 from "../utils/residency/5.jpg";
import pic_6 from "../utils/residency/6.jpg";

const Residency = () => {
  return (
    <Wrapper>
      <h2 className="mb-5 text-center py-4">اقامتگاه های شهر دماوند</h2>
      <div className="mb-5">
        {/* item  */}
        <div className=" d-flex cards">
          <div>
            <img src={pic_2} alt="resicency" />
          </div>
          <div className=" text-header">
            <h5>اقامتگاه بومگردی روژان </h5>
            <p>
              اقامتگاه بوم گردی روژان در استان تهران شهر دماوند روستای سید آباد
              دارای 6 سوئیت واقع شده است.
            </p>
            <h4>قیمت برای هر شب : 308 هزار تومان</h4>
          </div>
        </div>
        {/* line  */}
        <div className="line"></div>
        {/* item  */}
        <div className=" d-flex cards">
          <div>
            <img src={pic_3} alt="resicency" />
          </div>
          <div className=" text-header">
            <h5>هتل هشت بهشت دماوند</h5>
            <p>هتل هشت بهشت در جاده دماوند فیروزکوه واقع شده است.</p>
            <h4>قیمت برای هر شب : 726 هزار تومان</h4>
          </div>
        </div>
        {/* line  */}
        <div className="line"></div>
        {/* item  */}
        <div className=" d-flex cards">
          <div>
            <img src={pic_4} alt="resicency" />
          </div>
          <div className=" text-header">
            <h5>ویلا باغ دوخوابه</h5>
            <p>
              غ ویلای دو خوبه در دماوند که برای اقامت شش تا ده نفر مناسب است.
            </p>
            <h4>قیمت برای هر شب : 1,000,000 تومان</h4>
          </div>
        </div>
        {/* line  */}
        <div className="line"></div>
        {/* item  */}
        <div className=" d-flex cards">
          <div>
            <img src={pic_5} alt="resicency" />
          </div>
          <div className=" text-header">
            <h5>اقامتگاه بومگردی کدخدا</h5>
            <p>
              یه بومگردی ساکت و آروم نزدیک پایتخت، می تونه گزینه مناسبی برای یه
              اقامت آخر هفته ای دور از تهران باشه. <br />
              می تونین با اقامت توی این مجموعه در روستا قدم بزنین و از طبیعت بی
              نظیر این منطقه استفاده کنین.
            </p>
            <h4>قیمت برای هر شب :275هزار تومان</h4>
          </div>
        </div>
        {/* line  */}
        <div className="line"></div>
        {/* item  */}
        <div className=" d-flex cards">
          <div>
            <img src={pic_6} alt="resicency" />
          </div>
          <div className=" text-header">
            <h5>ویلا باغ دوخوابه شقایق</h5>
            <p>
              ویلا باغ دوخوابه شقایق در دماوند که برای اقامت هشت تا بیست و پنج
              نفر مناسب است.
            </p>
            <h4>قیمت برای هر شب : 1,500,000 تومان</h4>
          </div>
        </div>
        {/* line  */}
        <div className="line"></div>
        {/* item  */}
        <div className=" d-flex cards">
          <div>
            <img src={pic_1} alt="resicency" />
          </div>
          <div className=" text-header">
            <h5>اقامتگاه بومگردی خانه گردو</h5>
            <p>
              اقامتگاه بومگردی خانه گردو با بافت خانه های قدیمی در مرکز شهر
              دماوند واقع شده است.
            </p>
            <h4>قیمت برای هر شب : 629هزار تومان</h4>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  img {
    width: 20rem;
    margin-right: 13px;
    border-radius: 10px;
    object-fit: cover;
    box-shadow: 3px 5px 35px rgba(86, 68, 169, 0.1);
  }
  h4 {
    color: #ff7f47;
  }
  .text-header h5 {
    font-weight: bolder;
  }
  .text-header {
    margin-right: 16px;
    text-align: right;
  }
  .line {
    background: #e0e0e0;
    height: 1px;
    margin: 1rem 0;
    width: 95%;
  }
  @media only screen and (max-width: 900px) {
    .cards {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .text-header {
      text-align: center;
      margin-top: 1rem;
    }
  }
`;
export default Residency;
