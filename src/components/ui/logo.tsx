import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoSvg from "../../assets/svg/logo.svg";

const Logo = () => {
  return (
    <>
      <Link href="/" className="-m-1.5 p-1.5">
        <span className="sr-only">Dans fashion logo</span>
        <h1 className="text-black uppercase text-[24px] font-inter font-[700] leading-[24px]">
          dans fashion
        </h1>
      </Link>
    </>
  );
};

export default Logo;
