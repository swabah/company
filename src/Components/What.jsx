import {DhButton} from "../assets/DhButton";
import WhatPNG from '../assets/Img/WhatPNG.png'
import '../App.css';


function What ()  {
    return (
        <section className="flex flex-col items-center w-full px-5 md:px-10  md:flex-row h-full py-20 md:py-0 md:h-5/6 lg:px-20 xl:px-40 "
        id="About"
        style={{
            minHeight:"70vh",
            minWidth:"100vw"
        }}
        >
                <div className="w-full md:w-6/12 lg:-scale-x-100">
            <img src={WhatPNG} className="w-full " alt=""
            data-aos="fade-up"
            data-aos-delay="300"
            />
            </div>
            <div className="md:w-6/12">
            <h1 className="text-3xl font-black lg:text-5xl"
            data-aos="fade-up"
            data-aos-delay="500"
            >And what's DataHex?</h1>
            <div className="mt-4 text-gray-500 lg:w-8/12"
            data-aos="fade-up"
            data-aos-delay="700"
            >
            Empowering businesses with digital transformation and consulting. Seamlessly enhancing operational efficiency, customer experiences, and revenue growth. Trust us for unparalleled success. Contact us now!
             <div data-aos="fade-up"
  data-aos-delay="700">
            <DhButton className="mt-4" id="know" >
              Know More
            </DhButton>
          </div>
            </div>
        </div>
            </section>
        
    );
}

export default What;