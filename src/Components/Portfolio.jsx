import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'tailwindcss/tailwind.css';
import SwiperCore, { Autoplay, Pagination } from 'swiper/modules';

SwiperCore.use([Autoplay, Pagination]);

import homImg1 from '../assets/Img/portfolio/ace-gold.jpg'
import homImg2 from '../assets/Img/portfolio/aljamia.jpg' 
import homImg3 from '../assets/Img/portfolio/asm.jpg' 
import homImg4 from '../assets/Img/portfolio/bestone .jpg' 
import homImg5 from '../assets/Img/portfolio/dallo-mob.jpg' 
import homImg6 from '../assets/Img/portfolio/bestone copy.jpg' 
import homImg7 from '../assets/Img/portfolio/dfms.jpg' 
import homImg8 from '../assets/Img/portfolio/dallo.jpg' 
import homImg9 from '../assets/Img/portfolio/ethic-b.jpg' 
import homImg10 from '../assets/Img/portfolio/key-node.jpg' 

function Portfolio() {
  const images = [
    homImg1,
    homImg2,
    homImg3,
    homImg4,
    homImg5,
    homImg6,
    homImg7,
    homImg8,
    homImg9,
    homImg10,
  ];

  return (
    <div
      style={{ backgroundImage: `url(${'bgAcademic'})` }}
      className='bg-white w-full h-full px-3 py-10 space-y-10 text-center bg-no-repeat md:px-10 lg:px-10 xl:px-36 md:py-16 lg:py-20 xl:py-24'
    >
      <h2 className=' font-medium text-5xl xl:text-6xl'>Portfolios</h2>
      <p className='text-primary text-lg lg:text-xl'>
        Discover DataHex's impressive project portfolio, which features high-quality work, positive feedback, and
        user-friendly interfaces. Every project we work on demonstrates our dedication to excellence. We consistently
        deliver outstanding digital solutions that exceed expectations by focusing on innovation and client satisfaction.
        Experience the DataHex difference and take your business to new heights.
      </p>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 50,
          disableOnInteraction: false,
          pauseOnMouseEnter:true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className='w-full h-auto px-2 pt-5 pb-16 overflow-y-visible'
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className='transition-all bg-white hover:shadow-xl drop-shadow-lg rounded-3xl'>
            <img src={image} className='transition-all rounded-2xl duration-200 object-cover w-full h-[400px] hover:scale-105 cursor-pointer' alt='' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Portfolio;
