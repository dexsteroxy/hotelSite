import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { nothing } from "../data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

function Testimonial() {
  const {image} = nothing
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className=" font-poppins">
      <div className=" flex justify-center mb-12 text-center mt-8">
        <h3 className=" font-bold text-4xl md:text-5xl">Testimonails</h3>
      </div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          
          <div className="text-justify w-fit justify-center mx-auto  px-[16px]">
          Amadi Sixtus Tochukwu is a very good boy and i will love  <br />
            see him do more infact i love the work he did for me <br />
            love the work he did for me
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-justify w-fit justify-center mx-auto px-[16px]">
            Amadi Sixtus Tochukwu is a very good boy and i will love  <br />
            see him do more infact i love the work he did for me <br />
           
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-justify w-fit justify-center mx-auto px-[16px]">
          Amadi Sixtus Tochukwu is a very good boy and i will love  <br />
            see him do more infact i love the work he did for me <br />
            love the work he did for me
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-justify w-fit justify-center mx-auto px-[16px]">
          Amadi Sixtus Tochukwu is a very good boy and i will love  <br />
            see him do more infact i love the work he did for me <br />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-justify w-fit justify-center mx-auto px-[16px]">
            Amadi Sixtus Tochukwu is a very good boy and i will love  <br />
            see him do more infact i love the work he did for me <br />
            love the work he did for me
           
          </div>
        </SwiperSlide>
      </Swiper>
      <div className=" flex-row md:flex">
{image.map((data )=>{
  return(
    <div className=" mt-24 text-4xl  mb-16 flex flex-row justify-center items-center text-center mx-auto">
 <img src={data} />
    </div>
   
    
  )
})
}
      </div>
    </div>

    
  );
}

export default Testimonial;
