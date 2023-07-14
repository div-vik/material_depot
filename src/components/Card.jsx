// import React from 'react'

import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="w-36 h-52 md:w-32 lg:w-40 lg:">
          <Link to="#">
            <img className="" src={item.url} alt="" />
          </Link>
        </div>
      ))}
    </>
  );
};

export default Card;
