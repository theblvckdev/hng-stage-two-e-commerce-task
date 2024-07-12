import React from "react";
import SectionTag from "./ui/section_tag";
import CountdownTimer from "./countdown_timer";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

const FlashSales = () => {
  return (
    <>
      <section className="py-[4rem]">
        <div className="max-w-6xl mx-auto xl:px-0 md:px-5 px-3">
          <SectionTag tagTitle="Today's" />

          <div className="lg:mt-10 flex md:flex-row flex-col items-center">
            <div className="mr-auto flex flex-row lg:gap-[87px] gap-10 items-center">
              <div className="flex flex-col gap-[4px]">
                <div className="font-poppins text-[12px] font-[500] opacity-0 cursor-default leading-[18px] text-black">
                  Minutes
                </div>
                <h1 className="font-inter font-semibold lg:text-[36px] md:text-3xl leading-[38px] text-black capitalize">
                  Flash sales
                </h1>
              </div>

              <CountdownTimer type="flash sales" />
            </div>

            <div className="flex gap-[8px] items-center">
              <button className="lg:h-[46px] lg:w-[46px] h-[35px] w-[35px] rounded-full bg-[#F5F5F5] flex items-center justify-center">
                <IoArrowBackOutline className="lg:text-xl text-base text-black" />
              </button>
              <button className="lg:h-[46px] lg:w-[46px] h-[35px] w-[35px] rounded-full bg-[#F5F5F5] flex items-center justify-center">
                <IoArrowForwardOutline className="lg:text-xl text-base text-black" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FlashSales;
