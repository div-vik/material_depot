// import React from "react";

const ExclusiveRequest = () => {
  return (
    <div className="flex justify-center items-center mt-6 px-3 md:px-7 2xl:px-2">
      <div className="mt-3">
        <div className="text-center mb-1 font-bold text-2xl md:text-3xl">
          <p>Exclusive Material Requests</p>
        </div>
        <div className="bg-[#F5EDDF] rounded-md px-5 py-4 md:flex">
          <div className="md:hidden">
            <img
              className="w-96"
              src="https://materialdepot.in/_next/image?url=%2Fimages%2Fhome%2Fmaterial-request.png&w=1920&q=75"
              alt=""
            />
          </div>
          <div className="mt-5 lg">
            <p className="text-lg font-bold pb-3">
              No more wasting time and energy visiting multiple stores.
            </p>
            <p className="text-[1rem]">
              Just send us a WhatsApp message with your material list, and
              we&apos;ll give you the best quote possible. It&apos;s that easy!
            </p>
            <div className="w-full bg-[#20b038] rounded-md text-white px-2 py-3 mt-7 mb-1 md:w-96 md:mt-14">
              <a
                className="flex justify-center items-center"
                href="https://wa.me/+918121523945?text=Hi%20I%20need%20some%20help%20in%20buying%20these%20materials%20-"
              >
                <span className="px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                    />
                  </svg>
                </span>
                <p className="text-base font-bold pr-2">
                  Get Quote on WhatsApp
                </p>
              </a>
            </div>
          </div>
          <div className="hidden md:flex">
            <img
              src="https://materialdepot.in/_next/image?url=%2Fimages%2Fhome%2Fmaterial-request.png&w=1920&q=75"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveRequest;
