import {
  AnyAction,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import Link from "next/link";
import React, {
  useEffect,
  useState,
} from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { fetchEmployees } from "./model/listEmployees";
import { RootState } from "@/App/redux/store";
import EntitySkeleton from "@/shared/EntitySkeleton";
import EntityCard from "@/shared/EntityCard";

export interface EmployeesProps {
  endpoint: string;
}

export default function Employees({
  endpoint,
}: EmployeesProps) {
  const dispatch: AppDispatch = useDispatch();
  const skeletons = new Array(5).fill(null);
  const [status, setStatus] = useState("loading");
  type AppDispatch = ThunkDispatch<
    RootState,
    unknown,
    AnyAction
  >;

  useEffect(() => {
    dispatch(fetchEmployees(endpoint));
  }, [dispatch]);

  const { employees } = useSelector(
    (state: RootState) => state.employees
  );

  setTimeout(() => {
    setStatus("success");
  }, 1000);

  return (
    <div>
      {status === "loading" ? (
        skeletons.map((item, index) => {
          return (
            <div key={index} className="mb-4">
              <EntitySkeleton />
            </div>
          );
        })
      ) : (
        <div>
          {employees?.map((item) => {
            return (
              <div
                className=" mb-4"
                key={item.id}
              >
                <Link
                  href={`/waitress/${item.id}`}
                >
                  <EntityCard
                    name={`${item.firstName} ${item.lastName}`}
                    image={item.image}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
