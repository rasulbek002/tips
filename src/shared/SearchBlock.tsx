import Search from "@/shared/svg/SearchIcon";
import React from "react";

export default function SearchBlock() {
  return (
    <div className=" focus:border-black px-4 py-3 flex gap-3 bg-white rounded-lg items-center">
      <span>
        <Search />
      </span>
      <input
        type="text"
        placeholder="Введите имя сотрудника"
        className="bg-transparent placeholder:placeholder-slate-500 w-full focus:outline-none"
      />
    </div>
  );
}
