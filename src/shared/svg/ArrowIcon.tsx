import React from "react";

export interface SvgComponentProps {
  width?: string;
  height?: string;
  color?: string;
}

export default function ArrowIcon({
  width = "9",
  height = "16",
  color = "#342E37",
}: SvgComponentProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.999999 1L8 8L1 15"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
