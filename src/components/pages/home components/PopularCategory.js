import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../assets/css/footer.css";
import "../../../assets/css/home.css";
import "../../../assets/css/header.css";
import { Link } from "react-router-dom"; /*
import femme from "../../../assets/img/femme.png";
import herbe from "../../../assets/img/herbe.png";
import usine from "../../../assets/img/usine.png";
import volan from "../../../assets/img/volan.png"; */

function Category(category) {
  return (
    <SwiperSlide key={category.id_category}>
      <Link to="">
        <div className="swiper-slide">
          <img
            src={category.image.large.url}
            alt="usine_image"
            width={`${category.image.large.width}px`}
            height={`${category.image.large.height}px`}
          />
          <div className="descPopularCategories">
            <div className="name">{category.name}</div>
            <div className="number_of_ads">({category.number_of_ads})Ads</div>
          </div>
        </div>
      </Link>
    </SwiperSlide>
  );
}

function PopularCategory({ categories }) {
  return (
    <>
      <div className="section__popular_category">
        <div className="container">
          <h1 className="section__title">
            <span className="title">Popular categories</span>
          </h1>
          <Swiper
            slidesPerView={8}
            direction="horizontal"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            dots={true}
            speed={1500}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              991: {
                slidesPerView: 4,
              },
            }}
            // autoplay={{
            //   delay: 2000,
            //   disableOnInteraction: false,
            // }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {/* <SwiperSlide>
              <div className="swiper-slide">
                <img
                  src={usine}
                  alt="usine_image"
                  width="270px"
                  height="270px"
                />
              </div>
            </SwiperSlide> */}
            {categories.map(Category)}

            <div className="swiper-button-prev-2"></div>
            <div className="swiper-button-next-2"></div>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default PopularCategory;
