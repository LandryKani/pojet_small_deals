import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../../../assets/css/footer.css';
import '../../../assets/css/home.css';
import '../../../assets/css/header.css';
import '../../../assets/css/Merchants.css';
import '../../../assets/css/Merchant.css';
import Button from '../../buttons/Button.styled';
import { MerchantsData } from '../../../utils/merchantsData';
import MerchantHome from '../home components/MerchantHome';

function TrustedMerchants() {

  return (
    <>
      <div className="section__merchants_who_trust">
        <div className="container">
        <h1 className="section__title">
          <span className="title">Marchants who thrust us</span>
        </h1>
          <Swiper
            slidesPerView={4}
            direction='horizontal'
            grabCursor={true}
            spaceBetween={80}
            centeredSlides={true}
            loop={true}
            dots={true}
            speed={3000}
            breakpoints={
              {
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                991: {
                  slidesPerView: 4,
                },
              }
            }
            // autoplay={{
            //   delay: 2000,
            //   disableOnInteraction: false,
            // }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >

            <div className="merchants_slider">
              <ul className="swiper-wrapper">

                {MerchantsData.map(merchant =>
                  <SwiperSlide>
                    <li className="swiper-slide">
                      <MerchantHome image={merchant.image}
                        name={merchant.name}
                        description={merchant.description}
                        link={merchant.link}
                        ads={merchant.ads}
                        stars={merchant.stars}
                      />
                    </li>
                  </SwiperSlide>
                )
                }


              </ul>
              <div className="swiper-pagination"></div>
            </div>
            <div className="swiper-button-prev-2"></div>
            <div className="swiper-button-next-2"></div>
          </Swiper>
          <div className="swiper-pagination"></div>
        </div>
        <div className="merchants_submit">
          <Button title="Browse all" href="/fr/merchants" borderRadius="4px" maxWidth="50" padding="11px 20px"/>
        </div>
      </div>
    </>

  )
}

export default TrustedMerchants