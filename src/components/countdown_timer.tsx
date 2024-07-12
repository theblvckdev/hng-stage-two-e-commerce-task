import React from "react";

const CountdownTimer = ({ type }: { type?: string }) => {
  return (
    <>
      {type === "flash sales" ? (
        <>
          <div className="flex lg:gap-5 gap-3 items-center">
            <div className="flex flex-col gap-[4px]">
              <div className="font-poppins text-[12px] font-[500] leading-[18px] text-black">
                Days
              </div>
              <div className="font-inter font-[700] lg:text-[32px] text-3xl leading-[30px] text-black">
                30
              </div>
            </div>

            <div className="text-[#E07575] text-3xl font-semibold">:</div>

            <div className="flex flex-col gap-[4px]">
              <div className="font-poppins text-[12px] font-[500] leading-[18px] text-black">
                Hours
              </div>
              <div className="font-inter font-[700] lg:text-[32px] text-3xl leading-[30px] text-black">
                23
              </div>
            </div>

            <div className="text-[#E07575] text-3xl font-semibold">:</div>

            <div className="flex flex-col gap-[4px]">
              <div className="font-poppins text-[12px] font-[500] leading-[18px] text-black">
                Minutes
              </div>
              <div className="font-inter font-[700] lg:text-[32px] text-3xl leading-[30px] text-black">
                19
              </div>
            </div>

            <div className="text-[#E07575] text-3xl font-semibold">:</div>

            <div className="flex flex-col gap-[4px]">
              <div className="font-poppins text-[12px] font-[500] leading-[18px] text-black">
                Seconds
              </div>
              <div className="font-inter font-[700] lg:text-[32px] text-3xl leading-[30px] text-black">
                56
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default CountdownTimer;
