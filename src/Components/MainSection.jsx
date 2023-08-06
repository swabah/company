import React from 'react';
import HomePng from '../assets/Img/HomePng.png'
import Pattern from '../assets/Img/pattern.png'
import '../App.css'
import { DhButton } from '../assets/DhButton';

const MainSection = () => {
  return (
    <section
    id='Home'
     style={{ backgroundImage: `url(${Pattern})` }}
      className="relative flex items-center w-full h-full py-16 md:py-32 lg:py-0 lg:h-screen px-5 md:px-10 lg:px-20 xl:px-40"
    >
      <div className='w-full  h-full bg-cream-300  opacity-20 absolute top-0 left-0 '></div>
      <main className=" z-0 flex flex-col items-center h-full md:flex-row">
        <div className="order-2 md:order-1">
          <h1
            className="mt-4 text-4xl font-bold lg:text-6xl xl:text-7xl"
            style={{
              lineHeight: '1.1',
            }}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* <span className="inline-block px-2 pb-1 mt-3 text-gray-200 bg-[#2f7d77]">Datahex:</span> <br /> */}
            Your Digital Transformation <br className='block lg:hidden'/> One-Stop
          </h1>
          <p
            className="mt-6 text-lg lg:text-xl text-gray-500 lg:w-8/12"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            "Your Trusted Partner for Digital Transformation and Consulting. And Transformative Journey With DataHex."
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <DhButton className="mt-4" id="know">
              Know More
            </DhButton>
          </div>
        </div>

        <div className="flex justify-center order-1 w-full lg:order-2 mt-4">
          <img src={HomePng} className="w-10/12 lg:w-8/12 up-down-anim" alt="" />
        </div>
      </main>
    </section>
  );
};

export default MainSection;
