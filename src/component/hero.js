import React from "react";

//import hero data
import { heroData } from "../data";

// import motion
import { motion } from "framer-motion";
//import variant
import { fadeIn } from "../variants";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
};

const Hero = () => {
  const { title, subtitle, btnText, btnIcon } = heroData;
  return (
    <section className=" font-poppins bg-hero bg-cover bg-center min-h-[40px] lg:h-[648px] bg-no-repeat relative mt-[120px] lg:mt-[150px]">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView={"show"}
        className="container mx-auto min-h-[40vh] lg:h-full flex items-center justify-center "
      >
        {/* text and btn */}
        {/* text */}
        <div className="text-white text-center lg:text-left lg:max-w-[640px]">
          <motion.h1 variants={fadeIn('down')} className="h1 font-serif">{title}</motion.h1>
          <motion.p variants={fadeIn('down')} className="mb-8 font-serif lg:mb-16 max-w-lg leading-relaxed">{subtitle}</motion.p >

          {/* btn */}
          <motion.div variants={fadeIn('left')} className=" mb-6 font-serif">
            <button className="btn btn-sm font-serif lg:btn-lg btn-outline mx-auto lg:mx-0 px-6 ">
              {btnText} {btnIcon}
            </button>
          </motion.div>
        </div>

        {/* outline text  */}
        <div className="hidden md:flex absolute -bottom-2 left-0 before:content-outlineText"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
