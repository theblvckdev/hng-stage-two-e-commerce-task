import React from "react";

const SectionTag = ({ tagTitle }: { tagTitle: string }) => {
  return (
    <>
      <div className="flex items-center gap-[16px]">
        <div className="h-[40px] w-[20px] rounded-[4px] bg-[#DB4444]"></div>
        <div className="font-poppins font-semibold text-base leading-[20px] text-[#DB4444] capitalize">
          {tagTitle}
        </div>
      </div>
    </>
  );
};

export default SectionTag;
