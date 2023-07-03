import React from "react";
// import nav data
import { navData } from "../data";

const Nav = () => {
  const { items } = navData;
  return (
    <nav>
      <ul className="flex gap-x-[30px]">
        {items.map((item, index) => {
          return (
            <li key={index}>
              <a
                className=" font-poppins hover:border-b-2 hover:border-dark transition-all duration-300 "
                href={item.href}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
