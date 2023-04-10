import MainTitle from "@/common/MainTitle";
import SearchBlock from "@/common/SearchBlock";
import Employees from "@/components/employees";
import { fetchEmployeesApi } from "@/components/employees/api/fetchEmployeesApi.ts";
import { fetchEmployees } from "@/components/employees/redux/listEmployees";
import ArrowIcon from "@/components/svg/ArrowIcon";
import { useRouter } from "next/router";
import React from "react";

export default function Position() {
  const { asPath } = useRouter();
  const router = useRouter();

  return (
    <div>
      <div className=" mb-5">
        <div
          onClick={() => router.back()}
          className="rotate-180 relative top-11 w-4"
        >
          <ArrowIcon />
        </div>
        <MainTitle title="Официанты" />
      </div>
      <div className=" mb-4">
        <SearchBlock />
      </div>
      <Employees endpoint={asPath} />
    </div>
  );
}
