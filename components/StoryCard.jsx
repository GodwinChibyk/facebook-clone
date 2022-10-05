import Image from "next/image";
import React from "react";

const StoryCard = ({ src, profile, name }) => {
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32
                    cursor-pointer overflow-x-hidden p-3 transition duration-200 transform ease-in
                    hover:animate-pulse hover:scale-105">
      <Image
        alt=""
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
        src={profile}
        width={40}
        height={40}
        layout="fixed"
        objectFit="cover"
      />

      <Image
        alt=""
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
        src={src}
        width={40}
        height={40}
        layout="fill"
      />
      <p className=" absolute hidden text-white bottom-4 lg:block">
        {name}
        </p>
    </div>
  );
};

export default StoryCard;
