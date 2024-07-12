import React from "react";
import HeroSidemenu from "./hero_sidemenu";
import HeroBanner from "./hero_banner";

const Hero = () => {
  return (
    <section className="lg:pb-[4rem]">
      <div className="max-w-6xl mx-auto xl:px-0 md:px-5 px-0">
        <div className="flex flex-row">
          <div className="basis-1/4 lg:block hidden">
            <HeroSidemenu />
          </div>

          <div className="lg:basis-3/4">
            <HeroBanner />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
