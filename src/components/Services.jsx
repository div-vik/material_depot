// import React from "react";

const Services = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="">
        <div className="text-center mb-7 pb-5">
          <p className="text-2xl font-bold">Shop With Confidence</p>
        </div>
        <div className="grid grid-cols-2 md:justify-center md:items-center md:flex text-[#0b1841]">
          <div className="w-56 mb-5 text-center ">
            <div className=" flex justify-center items-center mx-5">
              <img
                className="w-16 h-16 mb-4"
                src="https://materialdepot.in/_next/image?url=%2Fimages%2Fhome%2Fextensive-selection.svg&w=96&q=75"
                alt=""
              />
            </div>
            <p className="text-xl px-5 font-bold mb-2 text-center">
              Extensive Selection
            </p>
            <p className="text-sm px-7">
              Handpicked building materials from more than 600+ brands
            </p>
          </div>
          <div className="w-56 mb-5 text-center ">
            <div className=" flex justify-center items-center mx-5">
              <img
                className="w-16 h-16 mb-4"
                src="https://materialdepot.in/_next/image?url=%2Fimages%2Fhome%2Funbeatable-prices.svg&w=256&q=75"
                alt=""
              />
            </div>
            <p className="text-xl px-5 font-bold mb-2 text-center">
              Unbeatable Prices
            </p>
            <p className="text-sm px-7">
              Extensive network of suppliers and distributors,source at the most
              competitive prices
            </p>
          </div>
          <div className="w-56 mb-5 text-center ">
            <div className=" flex justify-center items-center mx-5">
              <img
                className="w-28 h-2w-28 mb-4"
                src="https://materialdepot.in/_next/image?url=%2Fimages%2Fhome%2Freliable-shipping.svg&w=256&q=75"
                alt=""
              />
            </div>
            <p className="text-xl px-5 font-bold mb-2 text-center">
              Reliable Shipping
            </p>
            <p className="text-sm px-7">
              Get your products delivered within a 2-3 days of placing the order
              upon confirmation
            </p>
          </div>
          <div className="w-56 mb-5 text-center ">
            <div className=" flex justify-center items-center mx-5">
              <img
                className="w-16 h-16 mb-4"
                src="https://materialdepot.in/_next/image?url=%2Fimages%2Fhome%2Fhassle-free-returns.svg&w=96&q=75"
                alt=""
              />
            </div>
            <p className="text-xl px-5 font-bold mb-2 text-center">
              Hassle Free Returns
            </p>
            <p className="text-sm px-7">
              Simple to request replacements for any damaged or defective
              products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
