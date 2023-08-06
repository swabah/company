import React from 'react'
import Pattern from '../assets/Img/pattern.png'
import { DhButton } from '../assets/DhButton'


function MissionVission() {
  return (
    <div className='flex items-center flex-col md:flex-row bg-[#000000] w-full px-5 md:px-10  h-full py-20 gap-10  md:h-5/6 lg:px-20 xl:px-40 '>
       <div style={{ backgroundImage: `url(${Pattern})` }} className="p-4 py-8 rounded-md lg:p-8 shadow-base-100 md:w-1/2">
          <div>
            <div className="mb-2 text-3xl font-black lg:text-4xl">
              Foresight
             </div>
            <div>
            At DataHex, our unwavering vision is to stand at the forefront of the digital solutions industry, empowering businesses to unlock their ultimate capabilities through cutting-edge technologies and revolutionary digital strategies.            </div>
          </div>
          <DhButton className="mt-4" id="know" >
              Know More
            </DhButton>
        </div>
       <div style={{ backgroundImage: `url(${Pattern})` }} className="p-4 py-8 rounded-md lg:p-8 shadow-base-100 md:w-1/2">
          <div>
            <div className="mb-2 text-3xl font-black lg:text-4xl">
            Quest
            </div>
            <div>
            DataHex's mission is to deliver bespoke digital transformation and consultancy services, expertly guiding businesses through the ever-evolving digital landscape with personalized, client-centric solutions.            </div>
          </div>
          <DhButton className="mt-4" id="know" >
              Know More
            </DhButton>
        </div>
    </div>
  )
}

export default MissionVission
