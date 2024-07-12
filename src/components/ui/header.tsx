import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="bg-black w-screen md:block hidden">
        <div className="max-w-6xl mx-auto xl:px-0 h-[48px] md:px-5 px-3 flex items-center">
          <div className="mx-auto flex gap-[8px] items-center">
            <h5 className="font-poppins lg:text-[14px] md:text-[12px] leading-[21px] text-[#FAFAFA]">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </h5>

            <Link
              href={"/"}
              className="outline-none underline font-semibold font-poppins lg:text-[14px] md:text-[12px] leading-[21px] text-[#FAFAFA]"
            >
              Shop Now
            </Link>
          </div>

          <select
            className="bg-black font-poppins lg:text-[14px] md:text-[12px] leading-[21px] text-[#FAFAFA] outline-none"
            name="language"
          >
            <option value="english">English</option>
            <option value="pidgin">Pidgin</option>
            <option value="hausa">Hausa</option>
            <option value="yoruba">Yoruba</option>
            <option value="igbo">Igbo</option>
          </select>
        </div>
      </header>
    </>
  );
};

export default Header;
