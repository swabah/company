import { useState } from 'react';
import '../App.css'
import logohead from './Img/logohead.png'
import { Link } from 'react-scroll';
import { CgClose, CgMenuRightAlt } from 'react-icons/cg';

const NavBar = () => {
    
    const [navOpen, setNavOpen] = useState(false);
    const [fix, setFix] = useState(false);
    
    const navigations = [
      { option: 'Home', path: 'Home' },
      { option: 'About', path: 'About' },
      { option: 'Client', path: 'Client' },
      { option: 'Service', path: 'Service' },
      { option: 'Contact', path: 'Contact' }
    ];
  
    const Navfix = () => {
      if (window.scrollY >= 400) {
        setFix(true);
      } else {
        setFix(false);
      }
    };
  
    window.addEventListener('scroll', Navfix);

    return (
        <div className={`w-full h-auto  px-5 md:px-10 lg:px-20 xl:px-40 z-50 ${fix ? ' bg-primary fixed left-0 top-0 shadow-lg drop-shadow-md  ' : ' text-[#0d1d39] bg-primary '}`}>
        <div className="flex items-center justify-between w-full h-full">
          <div  className='w-20 h-20 '>
            <img src={logohead} alt="" className='w-full object-cover h-full' />
          </div>
          <ul className="xl:flex hidden space-x-7">
            {navigations.map((navigation, index) => (
              <li
                key={index}
                className={`text-white hover:text-[#41b6ad] duration-300 inline-block py-2 cursor-pointer`}
              >
                <Link
                  activeClass="active"
                  to={navigation.path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={300}
                >
                  {navigation.option}
                </Link>
              </li>
            ))}
          </ul>
          <div className="w-fit xl:hidden">
            <CgMenuRightAlt
              className={`text-[30px] lg:text-[40px] text-[#fff] hover:text-[#41b6ad]  font-bold cursor-pointer`}
              onClick={() => setNavOpen(true)}
            />
          </div>
        </div>
        <div className={`xl:hidden w-full md:w-1/2 lg:w-1/2 md:shadow-lg h-screen ${navOpen ? 'flex opacity-100' : 'hidden opacity-0 -z-50  '} bg-white  flex-col border-b border-[#0d1d39] justify-start items-start z-50 right-0 top-0 md:right-0 absolute`}>
          <div className="flex items-center px-5 md:px-10 lg:px-20  justify-between md:justify-end w-full h-auto">
          <div  className='w-20 h-20 '>
            <img src={logohead} alt="" className='w-full object-cover h-full' />
          </div>            
          <CgClose
              className={`text-[30px] lg:text-[35px]  text-[#0d1d39] hover:text-[#41b6ad] font-bold  cursor-pointer`}
              onClick={() => setNavOpen(false)}
            />
          </div>
  
          <ul className={`flex flex-col items-start  justify-start  w-full h-full transition-all text-start duration-1000`}>
            {navigations.map((navigation, index) => (
              <li
                key={index}
                className={`text-black hover:text-[#41b6ad] px-5 md:px-10 lg:px-20  duration-300 inline-block py-3 hover:bg-gray-50 w-full cursor-pointer`}
              >
                <Link
                  activeClass="active"
                  to={navigation.path}
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                  onClick={() => setNavOpen(false)}
                >
                  {navigation.option}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
}

export default NavBar;