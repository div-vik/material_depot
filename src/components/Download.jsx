// import React from 'react'

const Download = () => {
  return (
    <div className="flex justify-center items-center px-7 lg:px-32 xl:px-96 xl:mb-20 my-14">
      <div className="md:flex md:gap-7 xl:gap-0">
        <div className="md:w-[40rem] lg:w-[37rem]">
          <img
            src="https://materialdepot.in/images/home/get_app_banner.png"
            alt=""
          />
        </div>
        <div className="md:flex md:justify-center md:items-center">
          <div className="py-5">
            <p className="text-2xl md:text-lg font-bold mb-2">
              Get your materials needs on your phone.
            </p>
            <p className="text-lg md:text-sm">
              Download the Material Depot app curates materials from top lining
              brands for ready to be deployed for your 3D renderings.
            </p>
            <div className="my-4">
              <a href="https://play.google.com/store/apps/details?id=in.materialdepot.materialdepot_flutter_app">
                <img
                  className="w-32"
                  src="https://materialdepot.in/images/footer/googleplay.svg"
                  alt="button"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
