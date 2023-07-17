// import React from 'react'

import { useEffect, useState } from "react";
import Card from "./Card";
import Carousel from "./Carousel";

const FeaturedCard = ({ title, data, className }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, []);

  return (
    <div className="px-4 lg:flex lg:justify-center lg:items-center">
      <div>
        <div className="my-5 md:my-11 lg:px-0 text-2xl font-bold">{title}</div>
        <div className="flex overflow-x-scroll overflow-y-hidden lg:block">
          <div>
            <div className="flex shadow-sm gap-2 lg:gap-3">
              <Card data={items} />
            </div>
          </div>
        </div>
        <div className={`flex justify-center items-center ${className}`}>
          <Carousel data={data} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
