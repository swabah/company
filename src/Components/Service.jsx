import React, { useEffect, useState } from 'react'
import '../App.css'
import homImg1 from '../assets/Img/portfolio/one.png'
import homImg2 from '../assets/Img/portfolio/two.png' 
import homImg3 from '../assets/Img/portfolio/three.png' 
import homImg4 from '../assets/Img/portfolio/four.png' 
import {CgPlayTrackNext , CgPlayTrackPrev} from 'react-icons/cg'

function Service() {
    const images = [
        homImg1,
        homImg2,
        homImg3,
        homImg4,
     ];
     const contents = [
       'Deal Aggregation',
       'Exclusive Discounts',
       'User-Friendly Interface',
       'Community Engagement and Reviews',
     ];
     const [current, setCurrent] = useState(0);
    
     useEffect(() => {
       const interval = setInterval(() => {
         setCurrent((prevCurrent) => (prevCurrent === images.length - 1 ? 0 : prevCurrent + 1));
       }, 5000);
    
       return () => clearInterval(interval);
     }, [images.length]);
    
     const playNext = () => {
       setCurrent((prevCurrent) => (prevCurrent === images.length - 1 ? 0 : prevCurrent + 1));
     };
    
     const playPrev = () => {
       setCurrent((prevCurrent) => (prevCurrent === 0 ? images.length - 1 : prevCurrent - 1));
     };


  return (
    <div id='Service' className='w-full h-full px-5 md:px-10  py-20 lg:py-32 md:h-5/6 lg:px-20 xl:px-40 '>
    
    <div className="w-full h-full">
      {images.map((slide, index) => (
        <div key={index}>
          {index === current && (
            <div className="rounded-md w-full relative cursor-pointer bg-white">
              <img
                src={slide}
                className="w-full inner-shadow shadow-indigo-100 rounded-md h-72 lg:h-96 object-cover brightness-50 bg-center"
                id="slidingImage"
                alt={`Slide ${index + 1}`}
              />
              {/* <div className="rounded-md w-full h-full bg-black opacity-20 z-10 absolute top-0"></div> */}
              {contents.map((content, i) => (
                current === i && (
                  <div
                    className="absolute flex space-y-1 md:space-y-2 flex-col inset-0 z-10 items-center text-center md:text-start justify-center w-full h-full"
                    key={i}
                  >
                    <div className="relative flex items-center justify-center space-x-1">
                      <span onClick={playPrev} className="text-white text-lg md:text-2xl">
                        <CgPlayTrackPrev />
                      </span>
                      <h1 className="text-[#eee] text-sm md:text-base opacity-80 z-10">Our services</h1>
                      <span onClick={playNext} className="text-white text-lg md:text-2xl">
                        <CgPlayTrackNext />
                      </span>
                    </div>
                    <h2 className="text-xl lg:text-4xl opacity-90 tracking-wider font-extrabold text-[#ffff] uppercase">
                      {content}
                    </h2>
                  </div>
                )
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
   </div>
  )
}

export default Service