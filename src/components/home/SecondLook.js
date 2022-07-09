import React from "react";
import h_1 from "../../utils/h-1.jpg";
import h_2 from "../../utils/h-2.jpg";
import h_3 from "../../utils/h-3.jpg";
import styled from "styled-components";

const SecondLook = () => {
  return (
    <Wrapper className="second_look_container my-3">
      <div className="text-center my-5">
        <h2 className="title_2">چرا دماوند</h2>
        <h3 className="title_">در اینجا چند دلیل عالی وجود دارد</h3>
      </div>

      <div className="row mx-0 text-center mt-5 ">
        <div className="col-lg-4 col-md-6 col-sm-12 info_container">
          <img src={h_1} alt="first" className="second_imges" />
          <h2 className="mt-3">کوهنوردی</h2>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 info_container">
          <img src={h_2} alt="second" className="second_imges mx-5" />
          <h2 className="mt-3">هوای پاکیزه</h2>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 info_container">
          <img src={h_3} alt="third" className="second_imges" />
          <h2 className="mt-3">مکان های دیدنی</h2>

          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  img {
    width: 25rem;
    height: 25rem;
    border-radius: 50%;
    object-fit: cover;
  }
  .info_container h2 {
    color: #ff7f47;
    font-weight: 700;
  }
  .info_container p {
    width: 70%;
    text-align: center;
    margin: 1rem auto;
    letter-spacing: 1px;
    line-height: 27px;
    font-size: 1.2rem;
  }
`;
export default SecondLook;
