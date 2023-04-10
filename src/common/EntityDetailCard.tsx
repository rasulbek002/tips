import React from "react";
import Image from "next/image";

export interface EntityDetailCardProps {
  image: string;
  name: string;
  type: string;
}

export default function EntityDetailCard({
  image,
  name,
  type,
}: EntityDetailCardProps) {
  return (
    <div className=" text-center">
      <div className=" mb-4 flex justify-center ">
        <Image
          src={image}
          alt={name}
          className="rounded-full"
          width={96}
          height={96}
        />
      </div>
      <h5 className="mb-1.5 font-bold text-2xl">
        {name}
      </h5>
      <p className=" text-base">{type}</p>
    </div>
  );
}
