// import React from 'react'

import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="flex justify-center items-center pt-2 pb-5 mx-10 mt-11">
      <div className="w-[34rem] mr-4">
        <Link to="#">
          <video muted autoPlay loop className="w-fit h-fit">
            <source src="https://material-depot-content-files.s3.ap-south-1.amazonaws.com/CollectionImages/hero_Animation.mp4" />
          </video>
        </Link>
      </div>
      <div className="w-64">
        <div className="mb-3">
          <Link className="" to="#">
            <img
              className="w-fit h-fit"
              src="https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/H02.1.jpg?width=300"
              alt="banner1"
            />
          </Link>
        </div>
        <div>
          <Link to="#">
            <img
              src="https://d3faqy0icgqzj8.cloudfront.net/CollectionImages/H03.1.jpg?width=300"
              alt="banner2"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
