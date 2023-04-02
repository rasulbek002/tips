import MainTitle from "@/common/MainTitle";
import SearchBlock from "@/common/SearchBlock";
import Employees from "@/components/employees";
import { fetchEmployeesApi } from "@/components/employees/api/fetchEmployeesApi.ts";
import { fetchEmployees } from "@/components/employees/redux/listEmployees";
import { useRouter } from "next/router";
import React from "react";

export default function Position() {
  const router = useRouter;
  console.log(router);
  return (
    <div>
      <MainTitle title="Официанты"/>
      <div className=" mb-4">
        <SearchBlock />
      </div>
      <Employees />
    </div>
  );
}
