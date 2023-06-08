import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
// import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../assets/css/footer.css";
import "../../../assets/css/home.css";
import "../../../assets/css/header.css";
// import banner1_1084x642 from "../../../assets/img/banner1_1084x642.jpg";
// import image_1 from "../../../assets/img/image_1.png";
// import last_image_1084x642 from "../../../assets/img/last_image_1084x642.jpg";
import Button from "../../buttons/Button.styled";

function HomeSlider(homesliders) {
  return (
    <SwiperSlide key={homesliders.id_slide}>
      <div className="swiper-slide">
        <a href={homesliders.url} target="blank">
          <img src={homesliders.image_url} alt="" width="100%" />
        </a>
      </div>
      <div className="slider__content">
        <h3 className="slider__content_title">{homesliders.title}</h3>
        <small className="slider__content_ads_count">2 annonces</small>
        <div className="slider__content_localization">
          <span className="address">Douala, Cameroun</span>
          <span className="icon__arrow_right">
            <i className="fa-solid fa-arrow-right"></i>
          </span>
        </div>
      </div>
    </SwiperSlide>
  );
}

function Banner({ homesliders }) {
  return (
    <div className="Banner">
      <div className="banner head__padding">
        <div class="background-banner-left"></div>
        <div className="banner__slider">
          <Swiper
            direction="horizontal"
            grabCursor={true}
            spaceBetween={80}
            centeredSlides={true}
            loop={true}
            dots={true}
            speed={2000}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              991: {
                slidesPerView: 2,
              },
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {/* <SwiperSlide>
              <div className="swiper-image">
                <img src={banner1_1084x642} alt="banner_image" width="1000px" />
              </div>
            </SwiperSlide> */}
            {/* <SwiperSlide>
              <div className="swiper-image">
                <img src={image_1} alt="banner_image"  />
              </div>

            </SwiperSlide> */}
            {/* <SwiperSlide>
              <div className="swiper-image">
                <img src={last_image_1084x642} alt="" width="1000px" />
              </div>
            </SwiperSlide> */}
            {homesliders.map(HomeSlider)}
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev-2"></div>
            <div class="swiper-button-next-2"></div>
            <div className="banner__text">
              <h1 className="banner__text_title pd_bbt">
                Acheter, vendre, louer et échanger en un seul clic.
              </h1>
              <p className="banner__text_desc pd_bbt">
                Recherchez gratuitement parmi plus de 3+ annonces actives dans
                plus de 75 catégories.
              </p>
              <Button title="Découvrir maintenant" href="/fr/merchants" />
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Banner;
