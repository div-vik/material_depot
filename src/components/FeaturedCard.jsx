// import React from 'react'

import { useEffect, useState } from "react";
import Card from "./Card";

const FeaturedCard = ({ title, data }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, []);

  return (
    <div className="px-4">
      <div className="my-5 text-2xl font-bold">{title}</div>
      <div className="flex overflow-x-scroll overflow-y-hidden">
        <div>
          <div className="flex gap-2">
            <Card data={items} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
