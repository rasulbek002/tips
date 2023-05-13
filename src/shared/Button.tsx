import React from "react";

export interface ButtonProps {
  title: string;
  icon?: any;
  bg?: string;
  type: "main" | "secondary";
  onClick: any;
}

export default function Button({ title, icon, type, onClick }: ButtonProps) {
  const style =
    type === "main"
      ? "rounded-lg flex w-full items-center justify-center gap-2.5 py-3 px-4 text-base font-bold text-white bg-main_button"
      : "rounded-lg flex w-full items-center justify-center gap-2.5 py-3 px-4 text-base font-bold text-white bg-black";

  return (
    <button onClick={onClick} className={style}>
      <div>{title}</div>
      {icon}
    </button>
  );
}
