import { heroSideMenu } from "@/data/hero_side_menu_data";
import Link from "next/link";
import React from "react";
import { IoChevronForwardOutline } from "react-icons/io5";

const HeroSidemenu = () => {
  return (
    <>
      <div className="w-full h-[384px] border-r border-gray-200 pt-10 pr-5">
        <div className="flex flex-col space-y-4">
          {heroSideMenu.map((data, index) => {
            const { icon, path, title } = data;

            return (
              <Link
                key={index}
                href={path}
                className="outline-none w-full flex items-center"
              >
                <div className="mr-auto">
                  <div className="font-poppins text-base leading-[24px] text-black">
                    {title}
                  </div>
                </div>

                {icon && (
                  <IoChevronForwardOutline className="text-black text-lg" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HeroSidemenu;
