import React, { useState, useEffect } from "react";
//import hearderdata
import { headerData } from "../data";
//import componenet
import Nav from "./nav";
import Social from "./social";
// import icons

import NavMobile from './navMobile';

const Header = () => {
  const { logo } = headerData;
  //heading state
  const [isActive, setIsActive] = useState(false);
  //nav mobile state
   const [navMobile, setNavMobile] = useState(false);
  //scroll event

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
    
      className={`${
        isActive
          ? " h-[100px] lg:h-[110px] shadow-lg  "
          : " h-[120px] lg:h-[150px]"
      } fixed bg-white left-0 right-0 z-10 mx-w-[1920px] w-full mx-auto transition-all duration-300`}
    >
      <div className="flex justify-between items-center h-full pl-[50px] pr-[60px]">
        {/* logo */}
        <a href="/">
          <img className="lg:w-[220px] w-[120px] h-[100px] lg:h-[150px] md:w-[189px] md:h-[100px]" src={logo} alt=""></img>
        </a>
        {/* nav initally hidden show on destop */}
        <div className="hidden lg:flex">
<Nav/>

        </div>
        {/*nav menu btn showing bg default hidden on desktop mode  */}
        <div onClick={() => setNavMobile(!navMobile)} className=" lg:hidden absolute right-[5%] bg-slate-950 text-white p-2 rounded-md cursor-pointer text-2xl">
        <i className="fa-solid fa-bars"></i>
        </div>
        {/* nav mobile showing by default hidden on dektop */}
        <div className={`${navMobile ? 'max-h-full' : 'max-h-0'} ${isActive ? 'top-[100px] lg:top-[110px]' : 'top-[120px] lg:top-[150px]'} fixed bg-white w-full h-full left-0 -z-10 transition-all duration-300`  }>
        <NavMobile/>
      
        </div>
        <div className="hidden md:flex">
          <Social/>
        </div>
      </div>
    </header>
  );
};

export default Header;
