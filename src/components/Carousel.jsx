// import React from 'react'

import { useEffect, useState } from "react";
import Card from "./Card";

const Carousel = ({ data }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, []);
  return (
    <div className="md:flex justify-center items-center hidden">
      <div className="flex items-center">
        <div>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 font-[700]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
        </div>
        <div className="md:overflow-x-scroll">
          <div className="">
            <div className="flex gap-5">
              <Card data={items} />
            </div>
          </div>
        </div>
        <div>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 font-[700]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
