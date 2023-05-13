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
import { fetchPositions } from "./model/redux/listPositions";
import { RootState } from "@/App/redux/store";
import EntitySkeleton from "@/shared/EntitySkeleton";
import EntityCard from "@/shared/EntityCard";

export default function Positions() {
  const dispatch: AppDispatch = useDispatch();
  const skeletons = new Array(5).fill(null);
  const [status, setStatus] = useState("loading");
  type AppDispatch = ThunkDispatch<
    RootState,
    unknown,
    AnyAction
  >;

  useEffect(() => {
    dispatch(fetchPositions());
  }, [dispatch]);

  const { positions } = useSelector(
    (state: RootState) => state.positions
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
          {positions?.map((item) => {
            return (
              <div
                className=" mb-4"
                key={item.id}
              >
                <Link href={`/${item.name}/`}>
                  <EntityCard
                    name={item.name_ru}
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
