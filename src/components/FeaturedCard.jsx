// import React from 'react'

import { useEffect, useState } from "react";
import Card from "./Card";

const FeaturedCard = ({ title, data }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, []);

  return (
    <div className="flex lg:justify-center items-center pb-2 my-7 md:ml-64 md:px-10 lg:px-0 lg:ml-0">
      <div>
        <div className="my-7 font-bold">{title}</div>
        <div className="flex gap-2">
          <Card data={items} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
