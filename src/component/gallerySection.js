import React, { useState } from "react";
// import gallery data
import { galleryData } from "../data";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

//slide
const slides = galleryData.images.map(({ original, width, height }) => ({
  src: original,
  width,

  height,
}));
const GallerySection = () => {
  // index state
  const [index, setIndex] = useState(-1);
  //destructure gallery data
  const { title, btnText, btnIcon, images } = galleryData;

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempTmgSrc] = useState("");
  const getImg = (src) => {
    setTempTmgSrc(src);
    setModel(true);
  };

  return (
    //   <>
    //   {data.img &&

    <section className=" font-poppins mt-[40px] lg:mt-0">
      <div className="container mx-auto">
        <h2>{title}</h2>
        <div className={model ? "model open" : "model"}>
          <img src={tempImgSrc} />
        </div>
        <>
          <div className=" gallery">
            {images.map((item, index) => {
              return (
                <div
                  className="pics"
                  key={index}
                  onClick={() => getImg(item.src)}
                >
                  <img
                    src={item.src}
                    className=" w-[100%] py-1 cursor-pointer transition-all duration-300 hover:opacity-60"
                  />
                </div>
              );
            })}
          </div>
        </>
      </div>
    </section>

    //   <div className=' w-[100px] h-[100px] bg-black fixed flex justify-center items-center overflow-hidden'>
    //     <img src={data.img} className=' w-auto max-w-[90px] max-h-[90px]'/>

    //   </div>

    //   }
    //   <div className=' p-[10px]'>
    // <ResponsiveMasonry columnsCountBreakPoints={{350:1,750:2,900:3}}>
    //   <Masonry gutter='20px'>
    //     {images.map((image, i) =>(
    //       <img
    //       key={i}
    //       src={image}
    //      className=' w-[100%] block cursor-pointer'
    //       onClick={() => viewImage(image, i)}
    //       />
    //     ))}
    //   </Masonry>

    // </ResponsiveMasonry>
    // </div>
    // </>
  );
};

export default GallerySection;
