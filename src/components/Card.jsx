// import React from 'react'

import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <div
          key={item.id}
          className="w-36 md:w-52 md:mb-5 lg:mb-0 lg:w-32 h-52 md:h-[19.2rem] lg:h-52"
        >
          <Link to="#">
            <img className="md:h-[19.2rem] lg:h-fit" src={item.url} alt="" />
          </Link>
        </div>
      ))}
      {/* <div className="w-36 md:w-52 md:mb-24 lg:mb-0 lg:w-32 h-52">
        <Link to="#">
          <img
            className=""
            src="https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/Classic_Wood_Cladding_Spaces.jpg?width=100"
            alt=""
          />
        </Link>
      </div> */}
    </>
  );
};

export default Card;
