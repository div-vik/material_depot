// import React from "react";

const RoundCard = ({ data }) => {
  return (
    <>
      {data?.map((item) => (
        <div key={item.id} className="mb-14 md:px-8">
          <div className="w-28 h-28">
            <div className="mb-2 w-28 h-28">
              <img
                className="w-fit h-28 rounded-full"
                src={item.url}
                alt={item.title}
              />
            </div>
            <p className="text-sm text-center">{item.Title}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default RoundCard;
