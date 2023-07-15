// import React from 'react'

import { Link } from "react-router-dom";

const Card2 = ({ data }) => {
  return (
    <>
      {data?.map((item) => (
        <div key={item.id} className="w-32">
          <Link to="#">
            <img className="rounded-2xl mb-2" src={item.url} alt="" />
            <p className="text-center text-base">{item.title}</p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Card2;
