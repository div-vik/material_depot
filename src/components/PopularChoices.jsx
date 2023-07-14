// import React from 'react'

import { Link } from "react-router-dom";

const data = [
  {
    id: "1",
    Title: "Tiles",
    url: "https://materialdepot.in/_next/image?url=https%3A%2F%2Fd3faqy0icgqzj8.cloudfront.net%2FCollectionImages%2FTiles_mob.jpg%3Fwidth%3D200&w=128&q=75",
  },
  {
    id: "2",
    Title: "Laminates",
    url: "https://materialdepot.in/_next/image?url=https%3A%2F%2Fd3faqy0icgqzj8.cloudfront.net%2FCategoryImages%2FLaminates%2FChips%2F0.jpg%3Fwidth%3D200&w=128&q=75",
  },
  {
    id: "3",
    Title: "Louvers",
    url: "https://materialdepot.in/_next/image?url=https%3A%2F%2Fd3faqy0icgqzj8.cloudfront.net%2FCategoryImages%2FPanels%2520v02.jpg%3Fwidth%3D200&w=128&q=75",
  },
  {
    id: "4",
    Title: "Plywood & Blockboards",
    url: "https://materialdepot.in/_next/image?url=https%3A%2F%2Fd3faqy0icgqzj8.cloudfront.net%2FCategoryImages%2FPlywood%2FChips%2F0.jpg%3Fwidth%3D200&w=128&q=75",
  },
  {
    id: "5",
    Title: "Wooden Flooring",
    url: "https://materialdepot.in/_next/image?url=https%3A%2F%2Fd3faqy0icgqzj8.cloudfront.net%2FCategoryImages%2FWooden_flooring.webp%3Fwidth%3D200&w=128&q=75",
  },
  {
    id: "6",
    Title: "MDF & Boards",
    url: "https://materialdepot.in/_next/image?url=https%3A%2F%2Fd3faqy0icgqzj8.cloudfront.net%2FCategoryImages%2FMdf%2520board.jpeg%3Fwidth%3D200&w=128&q=75",
  },
  {
    id: "7",
    Title: "Quartz",
    url: "https://materialdepot.in/_next/image?url=https%3A%2F%2Fd3faqy0icgqzj8.cloudfront.net%2FCategoryImages%2FQuartz.jpg%3Fwidth%3D200&w=128&q=75",
  },
  {
    id: "8",
    Title: "Sanitaryware",
    url: "https://materialdepot.in/_next/image?url=https%3A%2F%2Fd3faqy0icgqzj8.cloudfront.net%2FCategoryImages%2FSanitaryware.png%3Fwidth%3D200&w=128&q=75",
  },
  {
    id: "9",
    Title: "Hinges & Channels",
    url: "https://materialdepot.in/_next/image?url=https%3A%2F%2Fd3faqy0icgqzj8.cloudfront.net%2FCategoryImages%2FHinges%2520and%2520channels.jpg%3Fwidth%3D200&w=128&q=75",
  },
  {
    id: "10",
    Title: "Quartz Skins",
    url: "https://materialdepot.in/_next/image?url=https%3A%2F%2Fd3faqy0icgqzj8.cloudfront.net%2FCategoryImages%2FDesigner%2520Sinks.jpg%3Fwidth%3D200&w=128&q=75",
  },
  {
    id: "11",
    Title: "Wallpaper",
    url: "https://materialdepot.in/_next/image?url=https%3A%2F%2Fd3faqy0icgqzj8.cloudfront.net%2FCategoryImages%2FWallpapers.webp%3Fwidth%3D200&w=128&q=75",
  },
  {
    id: "12",
    Title: "Edgebands",
    url: "https://materialdepot.in/_next/image?url=https%3A%2F%2Fd3faqy0icgqzj8.cloudfront.net%2FCategoryImages%2FEdgebands.jpg%3Fwidth%3D200&w=128&q=75",
  },
];

const PopularChoices = () => {
  return (
    <div className="mt-4 mx-52 md:px-36">
      {/* <div> */}
      <div className="flex justify-center items-center mb-3">
        <div className="text-center">
          <h1 className="text-3xl font-medium mb-2">Popular Choices</h1>
          <p className="text-xs mb-2">Stunning Range For Dream Space</p>
        </div>
      </div>
      <section className="">
        <div className="grid grid-cols-6 gap-4 md:max-xl:grid-cols-4">
          {data?.map((item) => (
            <Link className="" key={item.id} to="#">
              <div className="flex justify-center items-center text-center">
                <div className="">
                  <img
                    className="w-20 h-20 rounded-full mb-2"
                    src={item.url}
                    alt={item.Title.toLocaleLowerCase()}
                  />
                  <p className="text-[0.7rem]">{item.Title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      {/* </div> */}
    </div>
  );
};

export default PopularChoices;
