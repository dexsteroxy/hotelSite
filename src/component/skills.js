
import React, {useState, useEffect} from 'react';

import {CircularProgress} from 'rc-progress'

function Skills() {
  const skills = [
    {
      logo: <i class="fa-solid fa-child fa-beat"></i>,
      level: "Professional",
      count: 93,
    },
    {
      logo: <i class="fa-brands fa-css3"></i>,
      level: "Expect",
      count: 86,
    },
    {
      logo: <i class="fa-brands fa-node-js"></i>,
      level: "Intermedate",
      count: 100,
    },
    {
      logo: <i class="fa-brands fa-react"></i>,
      level: "Intermedate",
      count: 72,
    },
  ];
  return (
    <section id="skills" className="py-10 font-poppins  relative">
      <div className="mt-8  text-center">
        <h3
          className="text-4xl font-semibold"
        >
          My <span className=" ">Skills</span>
        </h3>
        <p className=" mt-3 text-lg">Not all are listed but you can see all in my CV</p>
        <div  className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className=" group   relative min-w-[10rem] max-w-[16rem]  p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,0,0) ${skill.count}%, #ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className=" text-6xl w-28 h-28 bg-white rounded-full flex items-center justify-center group-hover:text-cyan-600 transition-all duration-300">
                  <i className="fa-brands">{skill.logo}</i>
                </div>
              </div>
              <p className=" text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills