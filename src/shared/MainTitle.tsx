import React from "react";

interface MainTitleProps {
  title: string;
}

export default function MainTitle({
  title,
}: MainTitleProps) {
  return (
    <h1 className=" text-3xl py-4 text-center font-bold">
      {title}
    </h1>
  );
}
