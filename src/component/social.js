import React from "react";
import { socialData } from "../data";

const Social = () => {
  return (
    <ul className=" -mt-16 md:-mt-0 lg:-mt-0 xl:-mt-0 flex  justify-center items-center gap-x-[30px]">
      {socialData.map((item, index) => {
        return (
          <li key={index}>
            <a href={item.href}>{item.icon}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Social;
