import React from "react";
import styled from "styled-components";
import pic_1 from "../../utils/tourist sites/1.webp";
import pic_2 from "../../utils/tourist sites/2.webp";
import pic_3 from "../../utils/tourist sites/3.jpg";
import pic_4 from "../../utils/tourist sites/4.webp";
import pic_5 from "../../utils/tourist sites/5.webp";
import pic_6 from "../../utils/tourist sites/6.jpg";
import pic_7 from "../../utils/tourist sites/7.jpg";
import pic_8 from "../../utils/tourist sites/8.jpg";
import pic_9 from "../../utils/tourist sites/9.jpg";
import pic_10 from "../../utils/tourist sites/10.webp";
import pic_11 from "../../utils/tourist sites/11.jpg";
import pic_12 from "../../utils/tourist sites/12.jpg";
import pic_13 from "../../utils/tourist sites/13.jpg";
import pic_14 from "../../utils/tourist sites/14.jpg";
import pic_15 from "../../utils/tourist sites/15.webp";

const SitesCom = () => {
  return (
    <Wrapper>
      {/* header  */}
      <div className="text-center">
        <h1 className="title_2  pt-5">منطق دیدنی شهر دماوند</h1>
      </div>
      {/* items  */}
      <div className="row mx-0">
        <div className="col-lg-4 col-md-6 col-sm-12  text-center containers ">
          <div className="cards">
            <img src={pic_1} alt="picture1" />
            <p className="titles ">غار رودافشان</p>
            <p className="info">
              غار رودافشان فیروزکوه از بزرگ‌ترین غارهای طبیعی و بکر ایران در
              نزدیکی پایتخت است که مدت زیادی از کشف آن نمی‌گذرد. این غار از
              برجسته‌ترین جاهای دیدنی تهران در شهرستان دماوند به شمار می‌رود
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12  text-center containers">
          <div className="cards">
            <img src={pic_2} alt="picture1" />
            <p className="titles ">برج شیخ شبلی</p>
            <p className="info">
              برج شیخ شبلی دماوند، نمادی از تاریخچه این شهر است که یکی از
              نمونه‌های بارز معماری و اوج هنر در ایران بعد از اسلام به حساب
              می‌آید.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12  text-center containers">
          <div className="cards">
            <img src={pic_3} alt="picture1" />
            <p className="titles ">دژ گل خندان</p>
            <p className="info">
              دژ گل خندان یکی از آثار تاریخی و مکان های دیدنی دماوند در استان
              تهران است که در روستای گل خندان در بالای تپه‌ای عظیم و مشرف به محل
              تلاقی دو رودخانه بومهن و رودهن واقع است.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12  text-center containers">
          <div className="cards">
            <img src={pic_4} alt="picture1" />
            <p className="titles ">امامزاده عبدالله و عبيدالله</p>
            <p className="info">
              بقعه امامزاده عبدالله و عبیدالله که از جاهای دیدنی دماوند به حساب
              می‌آید، در ضلع شمالی شهر دماوند و در محله درویش قرار دارد
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12  text-center containers">
          {" "}
          <div className="cards">
            <img src={pic_5} alt="picture1" />
            <p className="titles ">دریاچه های تار و هویر</p>
            <p className="info">
              دریاچه‌های تار و هویر از مقاصد طبیعت‌گردی استان تهران هستند و از
              جاهای دیدنی دماوند به حساب می‌آیند که در روستایی به نام هویر در ۳۰
              کیلومتری این شهر واقع‌ شده‌اند. این دو دریاچه‌ در فاصله ۵۰۰
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12  text-center containers">
          {" "}
          <div className="cards">
            <img src={pic_6} alt="picture1" />
            <p className="titles ">آبشار تیزاب</p>
            <p className="info">
              آبشار تیزآب در فاصله پنج کیلومتری شمال شهر دماوند در نزدیکی محله‌
              دشتمزار قرار گرفته است و یکی از جاذبه‌ های گردشگری دماوند در استان
              تهران است
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12  text-center containers">
          {" "}
          <div className="cards">
            <img src={pic_7} alt="picture1" />
            <p className="titles ">چشمه اعلا</p>
            <p className="info">
              چشمه اعلا از جمله جاهای دیدنی دماوند محسوب می‌شود و در فاصله حدود
              هفتاد کیلومتری شمال شرقی تهران واقع شده است. درباره چشمه‌های آبی
              مناطق مختلف گمانه زنی‌های فراوانی وجود دارد
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12  text-center containers">
          {" "}
          <div className="cards">
            <img src={pic_8} alt="picture1" />
            <p className="titles ">آبشار آینه رود فرح افزا</p>
            <p className="info">
              آبشار آینه رود فرح افزا در ۱ کیلومتری شرق شهرستان دماوند و محله
              روح افزا در دره گروبار قرار دارد. وجود درختان بید و رودخانه‌ای
              پرآب، آب و هوای مطبوع و دلپذیری را به این منطقه زیبا داده
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12  text-center containers">
          {" "}
          <div className="cards">
            <img src={pic_9} alt="picture1" />
            <p className="titles ">پیست اسکی آبعلی</p>
            <p className="info">
              پیست اسکی آبعلی پیست اسکی آبعلی قدیمی‌ترین پیست‌ کشور و از بهترین
              جاهای دیدنی دماوند است که امکانات قابل‌قبولی برای بازدیدکنندگان
              دارد.
            </p>
          </div>
        </div>{" "}
        <div className="col-lg-4 col-md-6 col-sm-12  text-center containers">
          {" "}
          <div className="cards">
            <img src={pic_10} alt="picture1" />
            <p className="titles ">حمام تاریخی محله درویش</p>
            <p className="info">
              ش حمام محله درویش با قدمتی که به دوره صفوی بازمی‌گردد، از دیدنی
              های دماوند در محله درویش است. این اثر در تاریخ ۹ اردیبهشت ۱۳۸۲ به‌
              عنوان یکی از آثار ملی ایران به ثبت رسید.
            </p>
          </div>
        </div>{" "}
        <div className="col-lg-4 col-md-6 col-sm-12  text-center containers">
          {" "}
          <div className="cards">
            <img src={pic_11} alt="picture1" />
            <p className="titles ">رودخانه دماوند</p>
            <p className="info">
              رودخانه دماوند از دو شاخه اصلی، یکی به نام رودخانه تار که از پایین
              دست دریاچه‌ تار سرچشمه می‌گیرد و دیگری به نام رودخانه رودبار (چشمه
              اعلا) تشکیل شده است.
            </p>
          </div>
        </div>{" "}
        <div className="col-lg-4 col-md-6 col-sm-12  text-center containers">
          {" "}
          <div className="cards">
            <img src={pic_12} alt="picture1" />
            <p className="titles ">آبشار جنگلک</p>{" "}
            <p className="info">
              آبشار جنگلک در ۷ کیلومتری شرق شهرستان دماوند و در محله روح‌افزا،
              در دره گروبار قرار گرفته است و از جمله آبشارها و دیدنی های دماوند
              به شمار می‌آید.
            </p>
          </div>
        </div>{" "}
        <div className="col-lg-4 col-md-6 col-sm-12  text-center containers">
          {" "}
          <div className="cards">
            <img src={pic_13} alt="picture1" />
            <p className="titles ">آبشار گروبار</p>
            <p className="info">
              آبشار گروبار در ۵ کیلومتری شرق شهرستان دماوند قرار دارد و از جمله
              جاهای دیدنی دماوند در محله روح‌افزا، در دره گروبار به شمار می‌آید.
              ارتفاع آبشار در حدود ۲۰ متر و در ارتفاع ۲۲۳۰ متری از سطح دریا است
            </p>
          </div>
        </div>{" "}
        <div className="col-lg-4 col-md-6 col-sm-12  text-center containers">
          {" "}
          <div className="cards">
            <img src={pic_14} alt="picture1" />
            <p className="titles ">آبشار برف تنگه لار</p>
            <p className="info">
              آبشار برف تنگه لار در شرق منطقه لار دماوند قرار دارد و از جمله
              مقاصد طبیعی و جاهای دیدنی دماوند به شمار می‌آید. این آبشار در ۲
              کیلومتری شرق ملک چشمه لار، در دره زیبای کوه‌های لار صادق به نام
              برف تنگه
            </p>
          </div>
        </div>{" "}
        <div className="col-lg-4 col-md-6 col-sm-12  text-center containers">
          {" "}
          <div className="cards">
            <img src={pic_15} alt="picture1" />
            <p className="titles ">چشمه دیو آسیاب</p>
            <p className="info">
              چشمه دیو آسیاب در ارتفاعات شمالی دشت لار واقع شده که حدود ۲۰ متر
              قطر و ۲ متر عمق دارد و آب از ۲ دهانه در زیر آبگیر به بیرون
              می‌جوشد. آبگیر بر روی تپه‌ای آهکی به ارتفاع ۱۰ متر از کف رودخانه
              مجاور آن قرار گرفته است
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  background: #fcfcfc;
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
    height: 100%;
  }
  .titles {
    margin: 15px 0;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #ff7f47;
  }
  .info {
    text-align: justify;
    padding: 10px;
    line-height: 28px;
  }
`;
export default SitesCom;
