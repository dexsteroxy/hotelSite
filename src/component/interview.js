import React, { useState } from "react";
//data

import { hi, interviewData } from "../data";

import { motion } from "framer-motion";

const Interview = () => {
  const {rege} = hi
  const { title, btnText, btnIcon } = interviewData;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className=" bg-dark selection: bg-interview bg-no-repeat bg-cover bg-center md:h-[480px] lg:h-[812px]">
      <div className=" container mx-auto h-full">
        <div className=" flex flex-col justify-center h-full">
          <div className="flex flex-col items-start max-w-[880px]">
            {/*title  */}
            <h3 className=" text-white/100 text-[40px] lg:text-[60px] leading-[1.1] font-poppins -tracking-[1.5px uppercase mb-8]">
              {title}
            </h3>
            <div>
            <div onClick={()=> setIsOpen(true)} className=" flex text-white items-center gap-x-5 cursor-pointer hover:opacity-80 transition-all duration-300">
              {/* border */}
              <div className=" w-[70px] h-[70px] lg:w-[91px] lg:h-[91px] border border-white/40 rounded-full text-dark p-[5px] lg:p-[8px]">
                {/* inner */}
                <div className=" bg-white w-full h-full rounded-full flex justify-center items-center">
                  <div className="pl-1">{btnIcon}</div>
                </div>

                {/* btn text */}
              </div>
              <div className=" text-white font-poppins uppercase flex">
                {btnText}
              </div>
            </div>
            </div>
            {/* video */}
       {`${rege} autoplay isOpen=${isOpen} onClose=${()=>setIsOpen(false)}`}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interview;
