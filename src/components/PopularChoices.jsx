// import React from 'react'

import { Link } from "react-router-dom";
import { data } from "../../data";

const PopularChoices = () => {
  return (
    <div className="px-3 py-2">
      {/* mt-4 mx-52 md:px-36
      <div>
        <div className="hidden">
          justify-center items-center mb-3
          <div className="text-center">
            <h1 className="text-3xl font-medium mb-2">Popular Choices</h1>
            <p className="text-xs mb-2">Stunning Range For Dream Space</p>
          </div>
        </div>
        <section className="overflow-x-auto">
          <div className="flex w-full gap-2 bg-green-900">
            grid grid-cols-6 gap-4 md:max-xl:grid-cols-4
            {data?.map((item) => (
              <div key={item.id} className="">
                <Link to="#">
                  <img
                    className="rounded-full"
                    src="https://materialdepot.in/_next/image?url=https%3A%2F%2Fd3faqy0icgqzj8.cloudfront.net%2FCategoryImages%2FLaminates%2FChips%2F0.jpg%3Fwidth%3D200&w=128&q=75"
                    alt=""
                  />
                  <p className="hidden text-[0.7rem]">{item.Title}</p>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div> */}
      <div>
        <div className="hidden">
          <h1 className="text-3xl font-medium mb-2">Popular Choices</h1>
          <p className="text-xs mb-2">Stunning Range For Dream Space</p>
        </div>
        <section className="">
          <div className="flex gap-4 overflow-x-scroll">
            {data?.map((item) => (
              <div key={item.id}>
                <Link to="#">
                  <img
                    className="rounded-full"
                    src={item.url}
                    alt={item.Title}
                  />
                  <p className="hidden text-[0.7rem]">{item.Title}</p>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

{
  /* flex justify-center items-center text-center */
}
// className="w-20 h-20 rounded-full mb-2"

export default PopularChoices;
