import Link from "next/link";
import React, { ReactElement } from "react";

const IconsWithBadgeButton = ({
  icon,
  path,
  badgeAmount,
}: {
  icon: ReactElement;
  path: string;
  badgeAmount: number;
}) => {
  return (
    <>
      <Link
        href={path}
        className="outline-none relative flex items-center justify-center w-[32px] h-[32px]"
      >
        {icon}
        <div className="bg-[#DB4444] h-[16px] w-[16px] absolute top-0 right-0 text-[12px] font-poppins leading-[18px] text-center text-[#FAFAFA] rounded-full flex items-center justify-center">
          {badgeAmount}
        </div>
      </Link>
    </>
  );
};

export default IconsWithBadgeButton;
