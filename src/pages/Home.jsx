// import React from 'react'

import {
  designersChoice,
  essentialBasics,
  houseOfMaterials,
  theStyleSpectrum,
  tileGallery,
  tileGallery2,
  trendingNow,
  wallPanelArtistry,
  wallPanelArtistry2,
} from "../../data";
import Banner from "../components/Banner";
import Card2 from "../components/Card2";
import Contact from "../components/Contact";
import Download from "../components/Download";
import ExclusiveRequest from "../components/ExclusiveRequest";
import FeaturedCard from "../components/FeaturedCard";
import FeaturedCard2 from "../components/FeaturedCard2";
import Partners from "../components/Partners";
import PopularChoices from "../components/PopularChoices";
import Services from "../components/Services";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/*flex justify-center items-center mb-14 overflow-x-hidden md:mx-1*/}
      <div>
        <Banner />
        <PopularChoices />
        <FeaturedCard2 title="Wall Panel Artistry" data={wallPanelArtistry2} />
        <FeaturedCard2 title="Tile Gallery" data={tileGallery2} />
        <FeaturedCard title="House of Materials" data={houseOfMaterials} />
        <FeaturedCard title="Tile Gallery" data={tileGallery} />
        <FeaturedCard title="Designer's Choice" data={designersChoice} />
        <ExclusiveRequest />
        <FeaturedCard title="Trending Now" data={trendingNow} />
        <FeaturedCard title="Wall Panel Artistry" data={wallPanelArtistry} />
        <FeaturedCard title="Essential Basics" data={essentialBasics} />
        <FeaturedCard title="The Style Spectrum" data={theStyleSpectrum} />
        <FeaturedCard
          title="Material Depot Exclusives"
          data={houseOfMaterials}
        />
        <Download />
        <Services />
        <Partners />
        <Card2 />
      </div>
      {/* <div className="">
        <Contact />
      </div> */}
    </div>

    // <div className="">
    // <div>
    //   <Partners />
    // </div>
    // </div>
  );
};

export default Home;
