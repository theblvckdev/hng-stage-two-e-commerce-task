import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchInput = () => {
  return (
    <>
      <form className="lg:w-[243px] w-full h-[38px] py-[7px] pl-[20px] pr-[12px] bg-[#F5F5F5] rounded-[4px] flex items-center gap-[10px]">
        <input
          type="text"
          className="outline-none box-border bg-transparent w-full font-poppins text-[12px] leading-[18px] text-black"
          placeholder="What are you looking for?"
        />

        <button className="outline-none ml-auto flex items-center">
          <IoSearchOutline className="text-black text-xl" />
        </button>
      </form>
    </>
  );
};

export default SearchInput;
