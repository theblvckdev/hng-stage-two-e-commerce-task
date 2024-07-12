"use client";

import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import Logo from "./logo";
import {
  IoCartOutline,
  IoCloseOutline,
  IoHeartOutline,
  IoMenuOutline,
} from "react-icons/io5";
import { navbarLink } from "@/data/navbar_link_data";
import Link from "next/link";
import SearchInput from "./search_input";
import IconsWithBadgeButton from "../icons_with_badge_button";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathName = usePathname();

  return (
    <header className="bg-white border-b border-b-gray-200">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-6xl items-center justify-between py-5 xl:px-0 md:px-5 px-3"
      >
        <div className="flex">
          <Logo />
        </div>
        <div className="flex gap-3 lg:hidden">
          <IconsWithBadgeButton
            icon={<IoHeartOutline className="w-[20px] h-[18px]" />}
            path="/"
            badgeAmount={4}
          />
          <IconsWithBadgeButton
            icon={<IoCartOutline className="w-[20px] h-[18px]" />}
            badgeAmount={3}
            path="/"
          />

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 outline-none inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <IoMenuOutline aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-9">
          {navbarLink.map((data, index) => {
            const { path, title } = data;

            data.path === pathName
              ? (data.isActive = true)
              : (data.isActive = false);

            return (
              <Link
                key={index}
                href={path}
                className={`text-black text-center font-poppins text-[15px] p-0 leading-[24px] relative before:absolute before:bottom-0 before:right-0 before:h-[1px] before:bg-black before:duration-300 before:ease-in hover:before:left-0 hover:before:w-full overflow-hidden ${
                  data.isActive ? "before:w-full" : "before:w-0"
                }`}
              >
                {title}
              </Link>
            );
          })}
        </PopoverGroup>
        <div className="hidden items-center gap-5 lg:flex lg:justify-end">
          <SearchInput />
          <IconsWithBadgeButton
            icon={<IoHeartOutline className="w-[20px] h-[18px]" />}
            path="/"
            badgeAmount={4}
          />
          <IconsWithBadgeButton
            icon={<IoCartOutline className="w-[20px] h-[18px]" />}
            badgeAmount={3}
            path="/"
          />
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-3 py-5 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 outline-none rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <IoCloseOutline aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navbarLink.map((data, index) => {
                  const { path, title } = data;

                  return (
                    <Link
                      href={path}
                      key={index}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-poppins leading-7 text-black hover:bg-gray-50"
                    >
                      {title}
                    </Link>
                  );
                })}
              </div>
              <div className="py-6">
                <SearchInput />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
