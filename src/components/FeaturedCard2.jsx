import { useEffect, useState } from "react";
import Card2 from "./Card2";

const FeaturedCard2 = ({ title, data }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(data);
  }, []);
  return (
    <div className="px-3 md:hidden">
      <div>
        <div className="my-5 text-2xl font-bold">{title}</div>
        <div className="gap-2 grid grid-cols-3">
          <Card2 data={items} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard2;
