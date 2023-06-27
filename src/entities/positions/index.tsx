import { RootState } from "@/App/redux/store";
import EntityCard from "@/shared/EntityCard";
import EntitySkeleton from "@/shared/EntitySkeleton";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPositions } from "./model/redux/listPositions";

export default function Positions() {
  const dispatch: AppDispatch = useDispatch();
  const skeletons = new Array(5).fill(null);
  type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;

  useEffect(() => {
    dispatch(fetchPositions());
  }, [dispatch]);

  const { positions, status } = useSelector((state: RootState) => state.positions);



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
              <div className=" mb-4" key={item.id}>
                <Link href={`/${item.id}/`}>
                  <EntityCard
                    name={`${item.name} ${item.surname}`}
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
