// import React from 'react'

import {
  designersChoice,
  essentialBasics,
  houseOfMaterials,
  theStyleSpectrum,
  tileGallery,
  wallPanelArtistry,
} from "../../data";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Download from "../components/Download";
import ExclusiveRequest from "../components/ExclusiveRequest";
import FeaturedCard from "../components/FeaturedCard";
import Partners from "../components/Partners";
import PopularChoices from "../components/PopularChoices";
import Services from "../components/Services";

const Home = () => {
  return (
    <div className="flex justify-center items-center mb-14 overflow-x-hidden md:mx-1">
      <div>
        <Banner />
        <PopularChoices />
        <FeaturedCard title="House of Materials" data={houseOfMaterials} />
        <FeaturedCard title="Tile Gallery" data={tileGallery} />
        <FeaturedCard title="Designer's Choice" data={designersChoice} />
        <ExclusiveRequest />
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
