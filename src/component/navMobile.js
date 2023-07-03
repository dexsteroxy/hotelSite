import React from "react";
//import nav data
import { navData } from "../data";
import Social from "./social";

const NavMobile = () => {
  const { items } = navData;
  return (
    <nav className=" w-full  h-full flex flex-col justify-evenly overflow-hidden">
      <ul className="flex flex-col justify-center  items-center gap-y-6 mb-8 py-6">
        {items.map((item, index) => {
          return (
            <li key={index}>
              <a className="text-2xl   font-serif uppercase s " href={item.href}>
                
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="text-2xl">
        <Social className=" text-2xl"/>
      </div>
    </nav>
  );
};

export default NavMobile;
