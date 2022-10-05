import Image from "next/image";
import React from "react";
import { ChevronDownIcon, FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon} from '@heroicons/react/outline'
import {HomeIcon, BellIcon, ChatIcon, ViewGridIcon, UserGroupIcon} from '@heroicons/react/solid'
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const {data} = useSession()
  return (
    <div 
    className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md ">

      {/* // Left */}
      <div className="flex itmes-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
          alt=""
        />
        <div className="flex items-center ml-2 p-2 rounded-full border bg-gray-100">
            <SearchIcon className="w-6 h-6 text-gray-600" />
            <input 
            className=" hidden md:inline-flex ml-2 flex-shrink placeholder-gray-500 
            items-center bg-transparent outline-none"
            type="text" name="" placeholder="Search Facebook" id="" />
        </div>
      </div>

      {/* // Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex  space-x-6 md:space-x-2">
            <HeaderIcon active Icon={HomeIcon} />
            <HeaderIcon Icon={FlagIcon} />
            <HeaderIcon Icon={PlayIcon} />
            <HeaderIcon Icon={ShoppingCartIcon} />
            <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* // Right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/* Profile pic */}
        <Image 
        onClick={signOut}
        className="rounded-full cursor-pointer"
        src={data?.user.image}
        width='40'
        height='40'
        layout="fixed"
        alt=""
         />

        <p className="font-semibold whitespace-nowrap pr-3">{data?.user.name}</p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
};

export default Header;
