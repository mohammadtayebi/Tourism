import React from "react";
import styled from "styled-components";
import pic from "../../utils/d-4.jpg";
const ContactCom = () => {
  return (
    <Wrapper className="row m-0 p-0">
      {/* right  */}
      {/* <img src={pic} alt="picture of the city" /> */}
      {/* left  */}
      {/* <div className="col-lg-6 col-sm-12">
        <h2 className=" text-right">تماس با ما</h2>
        
      </div> */}
      <div className="containers d-flex justify-content-center flex-column align-items-center w-100">
        <h2 className="my-5 text-center">تماس با ما</h2>
        <div className="row mb-5">
          <div className="col-lg-6 pl-5">
            <img src={pic} alt="picture of the city" />
          </div>
          <div className="col-lg-6 text-right">
            <form action="#" method="post">
              <div className="p-3 p-lg-5 border">
                <div className="form-group row text-right">
                  <div className="col-md-6 ">
                    <label htmlFor="lname" className="text-black">
                      نام خانوادگی <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="lname"
                      className="form-control"
                      name="lname"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="name" className="text-black">
                      نام<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      name="name"
                    />
                  </div>
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="email" className="text-dark">
                    ایمیل <span className="text-danger">*</span>
                  </label>
                  <input type="email" className="form-control" />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="text" className="text-dark">
                    موضوع <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>

                <div className="form-group col-md-12">
                  <label htmlFor="email" className="text-dark">
                    ایمیل <span className="text-danger">*</span>
                  </label>
                  <textarea className="form-control" cols="30" rows="7" />
                </div>

                <button className="buttons w-100 btn btn-success" type="submit">
                  ارسال پیام
                </button>
              </div>
            </form>
          </div>
          {/* the right side of the page  */}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background: #fcfcfc;
  img {
    border-radius: 10px;
    margin: 1rem;
  }
`;
export default ContactCom;
