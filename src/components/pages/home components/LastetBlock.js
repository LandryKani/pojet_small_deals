import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../../../assets/css/footer.css';
import '../../../assets/css/home.css';
import '../../../assets/css/header.css';
import { postsData } from '../../../utils/postsData';
import PostHome from '../../../components/pages/home components/PostHome';

function LastetBlock() {
  return (
    <>
      <div className="section_last__blog">
        <div className="container">
        <h1 className="section__title">
          <span className="title">Last blog posts</span>
        </h1>
          <Swiper
            slidesPerView={5}
            direction='horizontal'
            grabCursor={true}
            spaceBetween={80}
            centeredSlides={true}
            loop={true}
            dots={true}
            speed={2000}
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

            <div className="merchants_slider">
              <ul className="swiper-wrapper">

                {postsData.map(post =>
                  <SwiperSlide>
                    <li className="swiper-slide">
                      <PostHome image={post.image}
                        link={post.link}
                        text={post.text}
                        time={post.time}
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
      </div>
    </>
  )
}

export default LastetBlock
