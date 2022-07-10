import React from "react";
import styled from "styled-components";
import pic_1 from "../../utils/gallary/17.jpg";
import pic_2 from "../../utils/gallary/4.jpg";
import pic_3 from "../../utils/gallary/5.jpg";
import pic_4 from "../../utils/gallary/6.jpg";
import pic_5 from "../../utils/gallary/7.jpg";
import pic_6 from "../../utils/gallary/8.jpg";
import pic_7 from "../../utils/gallary/9.jpg";
import pic_8 from "../../utils/gallary/18.jpg";

const FourthLook = () => {
  return (
    <Wrapper className="pb-5">
      {" "}
      <div className="text-center mt-5">
        <h4 className="title_2 mt-5">گالری تصاویر</h4>
        {/* <h1 className="title_">تعدادی از مکان های دیدنی دماوند</h1> */}
      </div>
      <div className="gallary p-3">
        <img
          src={pic_1}
          alt="damavand picture "
          className="image-grid-row-2
image-grid-col-2 "
        />
        <img src={pic_2} alt="damavand picture" />
        <img
          src={pic_8}
          alt="damavand picture"
          className="image-grid-row-2
image-grid-col-2 "
        />
        <img src={pic_3} alt="damavand picture" />
        <img src={pic_5} alt="damavand picture" />
        <img src={pic_6} alt="damavand picture" />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .gallary {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 300px;
    gap: 16px;
  }
  .gallary > img {
    width: 100%;
    height: 100%;
    objective-fit: cover;
  }
  .image-grid-row-2 {
    grid-row: span 2;
  }
  .image-grid-col-2 {
    grid-column: span 1;
  }
  @media only screen and (max-width: 1024px) {
    .gallary {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 200px;
    }
  }
  @media only screen and (max-width: 769px) {
    .gallary {
      grid-template-columns: repeat(1, 1fr);
      grid-auto-rows: 200px;
    }
  }
`;
export default FourthLook;
