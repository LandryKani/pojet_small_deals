// import React from 'react'
// import { Link } from 'react-router-dom';
// import { advertData } from '../../../utils/advert/advertData';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation } from "swiper";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { advertsData } from '../../../utils/advertsData';
// import Adverts from '../advertsList/Adverts';



// function AdvertFeaturedProduct() {

//   var featured_product = advertData[0].featured_product;

//   return (
//     <>
//       <div className='container'>
//         <div className="Featured_products">
//           <h3>Featured Products</h3>
//           <Swiper
//             slidesPerView={4}
//             direction='horizontal'
//             grabCursor={true}
//             spaceBetween={80}
//             centeredSlides={true}
//             loop={true}
//             dots={true}
//             speed={3000}
//             breakpoints={
//               {
//                 0: {
//                   slidesPerView: 1
//                 },
//                 320: {
//                   slidesPerView: 1
//                 },
//                 768: {
//                   slidesPerView: 2
//                 },
//                 991: {
//                   slidesPerView: 3
//                 },
//                 1700: {
//                   slidesPerView: 4
//                 },
//                 1800: {
//                   slidesPerView: 5
//                 },
//               }
//             }

//             navigation={true}
//             modules={[Autoplay, Navigation]}
//             className="mySwiper"
//           >

//             <div className="merchants_slider">

//               <ul className="swiper-wrapper ">

//                 {advertsData.map(advert =>
//                   <SwiperSlide>
//                     <li className="swiper-slide">
//                       <Adverts image_annonce={advert.image_annonce}
//                         name={advert.name}
//                         title={advert.title}
//                         link={advert.link}
//                         reduction={advert.reduction}
//                         price1={advert.price1}
//                         price2={advert.price2}
//                         price3={advert.price3}
//                         time={advert.time}
//                         location={advert.location}
//                         prices={advert.prices}
//                       />
//                     </li>
//                   </SwiperSlide>
//                 )
//                 }



//               </ul>
//             </div>
//             <div className="swiper-button-prev-2"></div>
//             <div className="swiper-button-next-2"></div>
//           </Swiper>

//         </div>
//       </div>

//     </>
//   )
// }

// export default AdvertFeaturedProduct