// import React from 'react'

import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="w-36 lg:w-32 h-52">
          <Link to="#">
            <img className="" src={item.url} alt="" />
          </Link>
        </div>
      ))}
    </>
  );
};

export default Card;
