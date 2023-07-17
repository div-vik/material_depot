import RoundCard from "./RoundCard";
import { useEffect, useState } from "react";

const PopularChoices = ({ data, className }) => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    setItem(data);
  }, []);
  return (
    <div className={`px-3 pt-2 mt-14 ${className}`}>
      <div>
        <div className="hidden md:block text-center mb-5">
          <h1 className="text-3xl font-medium mb-2 md:text-[2.1rem] md:font-semibold">
            Popular Choices
          </h1>
          <p className="text-xs mb-2 md:text-sm">
            Stunning Range For Dream Space
          </p>
        </div>
        <section className="flex justify-center items-center">
          <div className="flex overflow-x-scroll overflow-y-hidden gap-5 md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 md:overflow-hidden">
            <RoundCard data={item} />
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
