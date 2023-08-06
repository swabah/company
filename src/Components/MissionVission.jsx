import React from 'react'
import Pattern from '../assets/Img/pattern.png'
import { DhButton } from '../assets/DhButton'


function MissionVission() {
  return (
    <div className='flex items-center flex-col md:flex-row bg-[#000000] w-full px-5 md:px-10  h-full py-20 lg:py-32 gap-10 lg:gap-16 md:h-5/6 lg:px-20 xl:px-40 '>
       <div style={{ backgroundImage: `url(${Pattern})` }} className="p-4 py-8 rounded-md lg:p-8 shadow-base-100 md:w-1/2">
          <div>
            <div className="mb-2 text-3xl font-black lg:text-4xl">
              Our Vision
             </div>
            <div>
            DataHex aims to be a pioneering force in the digital solutions industry. We empower businesses to unleash their full potential with cutting-edge technologies and revolutionary digital strategies, positioning them at the forefront of the digital landscape.
            </div>
          </div>
          <DhButton className="mt-4" id="know" >
              Know More
            </DhButton>
        </div>
       <div style={{ backgroundImage: `url(${Pattern})` }} className="p-4 py-8 rounded-md lg:p-8 shadow-base-100 md:w-1/2">
          <div>
            <div className="mb-2 text-3xl font-black lg:text-4xl">
            Our Mission
            </div>
            <div>
            DataHex's mission is to lead the digital solutions industry by delivering tailored digital transformation and consultancy services. We expertly guide businesses through the evolving digital landscape, offering client-centric solutions to unlock their ultimate capabilities.          
            </div>
          </div>
          <DhButton className="mt-4" id="know" >
              Know More
            </DhButton>
        </div>
    </div>
  )
}

export default MissionVission
