// import React from 'react'

import {
  data,
  designersChoice,
  essentialBasics,
  houseOfMaterials,
  materialDepotExclusive,
  theStyleSpectrum,
  tileGallery,
  tileGallery2,
  trendingNow,
  wallPanelArtistry,
  wallPanelArtistry2,
} from "../../data";
import Banner from "../components/Banner";
import Card2 from "../components/Card2";
import Carousel from "../components/Carousel";
import Contact from "../components/Contact";
import Download from "../components/Download";
import ExclusiveRequest from "../components/ExclusiveRequest";
import FeaturedCard from "../components/FeaturedCard";
import FeaturedCard2 from "../components/FeaturedCard2";
import Partners from "../components/Partners";
import PopularChoices from "../components/PopularChoices";
import RoundCard from "../components/RoundCard";
import Services from "../components/Services";
import Tailored from "../components/Tailored";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/*flex justify-center items-center mb-14 overflow-x-hidden md:mx-1*/}
      <div>
        <PopularChoices className="md:hidden" data={data} />
        <Banner />
        <RoundCard />
        <PopularChoices className="hidden md:block md:mt-0" data={data} />
        <FeaturedCard2 title="Wall Panel Artistry" data={wallPanelArtistry2} />
        <FeaturedCard2 title="Tile Gallery" data={tileGallery2} />
        <FeaturedCard
          className="md:hidden"
          title="House of Materials"
          data={houseOfMaterials}
        />
        <FeaturedCard
          className="md:hidden"
          title="Tile Gallery"
          data={tileGallery}
        />
        <FeaturedCard
          className="md:hidden"
          title="Designer's Choice"
          data={designersChoice}
        />
        <ExclusiveRequest />
        {/* <FeaturedCard
          className="md:hidden"
          title="Trending Now"
          data={trendingNow}
        /> */}
        <FeaturedCard
          className="md:hidden"
          title="Wall Panel Artistry"
          data={wallPanelArtistry}
        />
        <FeaturedCard
          className="md:hidden"
          title="Essential Basics"
          data={essentialBasics}
        />
        <FeaturedCard
          className="md:hidden"
          title="The Style Spectrum"
          data={theStyleSpectrum}
        />
        <FeaturedCard
          className="md:hidden"
          title="Material Depot Exclusives"
          data={materialDepotExclusive}
        />
        <Download />
        <Services />
        <Tailored />
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
