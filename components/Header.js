import React from "react";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import {GlobeAltIcon,} from '@heroicons/react/24/outline'


const Header = () => {
  return (
    <header
      className="sticky top-0 z-50 
    grid grid-cols-3 bg-white shadow-md py-5 px-5 
     md:px-10  "
    >
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          alt="airbnb.logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle - search*/}
      <div className="flex items-center md:border-2 rounded-full py-2 
      md:shadow-sm
      ">
        <input type="text"  className="pl-5 text-gray-600 text-sm placeholder-gray-400 bg-transparent outline-none flex-grow" placeholder="Start your search" />
        <MagnifyingGlassIcon className="h-8 hidden md:inline-flex bg-red-400 md:mx-2 text-white rounded-full p-2 cursor-pointer" />
      </div>
      {/* right */}
      <div className="flex items-center justify-end text-gray-500 space-x-4">
        <p>Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer "/>

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6"/>
          <UserCircleIcon className="h-6"/>
        </div>
      </div>
    </header>
  );
};

export default Header;