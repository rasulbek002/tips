import ArrowIcon from "@/components/svg/ArrowIcon";
import React from "react";

export default function EntitySkeleton() {
  return (
    <div className=" bg-slate-50 shadow rounded-md p-4 w-full mx-auto">
      <div className="animate-pulse flex space-x-4 items-center">
        <div className="rounded-full bg-slate-300  w-16 h-16"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-5 bg-slate-200 rounded"></div>
        </div>
        <ArrowIcon color="gray" />
      </div>
    </div>
  );
}
