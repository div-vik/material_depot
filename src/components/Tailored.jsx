// import React from "react";

const Tailored = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="py-5">
        <div className="text-center mb-16">
          <p className="text-2xl font-bold">Tailored To You</p>
        </div>
        <div className="">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-3 xl:flex py-5">
            <div className="">
              <img
                className="mb-9 mx-auto"
                src="https://materialdepot.in/_next/image?url=%2Fimages%2Fhome%2Fquality-products.svg&w=96&q=75"
                alt=""
              />
              <p className="font-bold text-center text-[#0b1841]">
                Quality Products
              </p>
            </div>
            <div className="">
              <img
                className="mb-9 mx-auto"
                src="https://materialdepot.in/_next/image?url=%2Fimages%2Fhome%2Frare-collection.svg&w=64&q=75"
                alt=""
              />
              <p className="font-bold text-center text-[#0b1841]">
                Rare and exquisite designs
              </p>
            </div>
            <div className="">
              <img
                className="mb-9 mx-auto"
                src="https://materialdepot.in/_next/image?url=%2Fimages%2Fhome%2Fsimplified-discovery.svg&w=48&q=75"
                alt=""
              />
              <p className="font-bold text-center text-[#0b1841]">
                Simplified Material Discovery
              </p>
            </div>
            <div className="">
              <img
                className="mb-9 mx-auto"
                src="https://materialdepot.in/_next/image?url=%2Fimages%2Fhome%2Fexpert-advice.svg&w=48&q=75"
                alt=""
              />
              <p className="font-bold text-center text-[#0b1841]">
                Expert Advice
              </p>
            </div>
            <div className="col-span-2 lg:col-span-1 mx-auto">
              <img
                className="mb-9 mx-auto"
                src="https://materialdepot.in/_next/image?url=%2Fimages%2Fhome%2Fcustomer-service.svg&w=48&q=75"
                alt=""
              />
              <p className="font-bold text-center text-[#0b1841]">
                Excellent Customer Service
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tailored;
