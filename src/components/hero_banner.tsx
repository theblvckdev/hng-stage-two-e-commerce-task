import Image from "next/image";
import React from "react";
import FendiLogo from "../assets/svg/fendi_logo.svg";
import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";
import HeroBannerImage from "../assets/images/hero_endframe__cvklg0xk3w6e_large 2.png";

const HeroBanner = () => {
  return (
    <>
      <div className="lg:pl-10 lg:pt-10 md:pt-8 pt-0">
        <div
          className="bg-black w-full md:h-[344px] h-screen md:px-14 px-5 md:gap-0 gap-5
         flex md:flex-row flex-col md:items-center md:justify-normal justify-center py-5 text-white"
        >
          <div className="md:basis-1/2">
            <div className="flex flex-col md:space-y-5 space-y-3">
              <div className="flex md:gap-[24px] gap-4 items-center md:mx-0 mx-auto">
                <Image
                  src={FendiLogo}
                  className="md:w-[40px] md:h-[49px] h-[30px] w-[30px] object-fill"
                  alt="fendi logo"
                />

                <div className="text-base text-[#FAFAFA] leading-[24px] font-poppins uppercase">
                  Fendi yearly series
                </div>
              </div>

              <h1 className="text-[#FAFAFA] lg:text-[48px] md:text-[40px] text-[45px] font-inter font-semibold lg:leading-[60px] md:leading-[50px] leading-[50px] md:text-left text-center">
                Up to 10% <br className="md:block hidden" /> off Voucher
              </h1>

              <Link
                href={"/"}
                className="flex gap-[8px] items-center font-poppins md:mx-0 mx-auto"
              >
                <div className="underline font-[500] text-base leading-[24px] text-[#FAFAFA] capitalize">
                  Shop now
                </div>

                <IoArrowForwardOutline className="text-lg" />
              </Link>
            </div>
          </div>
          <div className="xl:basis-[unset] md:basis-1/2">
            <Image
              src={HeroBannerImage}
              className="xl:h-[319px] xl:w-[453px] h-full lg:w-[450px] lg:mx-0 mx-auto md:w-full md:h-[60%] w-[100%] object-cover"
              alt="handbag"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
