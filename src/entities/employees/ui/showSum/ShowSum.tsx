import React from "react";

export interface ShowSumProps {
  sum: string;
  onClick: (value: string) => void;
  error?: boolean;
  selectedValue: string;
}

export default function ShowSum({
  sum,
  onClick,
  error = false,
  selectedValue,
}: ShowSumProps) {
  let style = error
    ? "rounded-lg bg-white py-3 px-4 text-center border-2 border-error_color "
    : " rounded-lg bg-white py-3 px-4 text-center";

  if (selectedValue === sum) {
    style =
      "rounded-lg bg-main_button py-3 px-4 text-center text-white";
  }
  return (
    <div
      className={style}
      onClick={() => onClick(sum)}
    >
      {sum}
    </div>
  );
}
