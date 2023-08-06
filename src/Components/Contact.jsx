import React from 'react'


function Contact() {
  return (
    <div 
    id='Contact'
    className='relative bg-white w-full flex flex-col md:items-center md:text-center h-full px-5 md:px-10 py-16 md:py-20 lg:py-32 md:h-5/6 lg:px-20 xl:px-40  '>
       <div className='w-full h-full bg-[#f6d860]  opacity-5 absolute top-0 left-0 '></div>
        <h2 className='text-4xl z-10 font-bold lg:text-5xl'>Build your next dream project with Datahex</h2>
        <div className="mockup-browser  z-10 w-full mt-16 ">
          <div className="mockup-browser-toolbar">
            {/* <div className="input border border-base-300">https://datahex.in/Contact</div> */}
          </div>
          <form className="grid grid-cols-2 w-full gap-3 md:gap-5  md:px-5 py-5">
              <input type="text" placeholder="Enter Full Name"  className="input input-ghost border border-base-300 col-span-2 w-full "  />
              <input type="email" placeholder="Enter Email" className="input input-ghost border border-base-300  w-full " />
              <input type="number" placeholder="Enter Mobile Number" className="input input-ghost  border border-base-300 w-full " />
              <input type="text" placeholder="Subject" className="input col-span-2 input-ghost border border-base-300  w-full " />
              <textarea className="textarea  textarea-ghost w-full border border-base-300 col-span-2" placeholder="Bio"></textarea>
              <button  className="bg-white hover:scale-95 transition-all border-base-300 border inline-block px-4 py-3 text-center text-black bg-transparent rounded-lg cursor-pointer col-span-2 w-full " >
                Submit
              </button>
          </form>        
        </div>
        
    </div>
  )
}

export default Contact
