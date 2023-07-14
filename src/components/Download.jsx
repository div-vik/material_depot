// import React from 'react'

const Download = () => {
  return (
    <div className="flex justify-center items-center xl:mx-52 my-8 md:mx-72">
      <div className="flex">
        <div className="xl:px-16 md:px-1">
          <img
            src="https://materialdepot.in/images/home/get_app_banner.png"
            alt=""
          />
        </div>
        <div className="py-20">
          <p className="text-lg font-bold mb-2">
            Get your materials needs on your phone.
          </p>
          <p className="text-sm">
            Download the Material Depot app curates materials from top lining
            brands for ready to be deployed for your 3D renderings.
          </p>
          <div className="my-4">
            <a href="https://play.google.com/store/apps/details?id=in.materialdepot.materialdepot_flutter_app">
              <img
                className="w-24"
                src="https://materialdepot.in/images/footer/googleplay.svg"
                alt="button"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
