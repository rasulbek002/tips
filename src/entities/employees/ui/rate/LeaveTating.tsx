import React, { useState } from "react";
import ReactStars from "react-stars";
import { useDispatch, useSelector } from "react-redux";
import { setPayment } from "@/entities/payments/slice";

export default function LeaveTating() {
  const { review, rate } = useSelector((state) => state.payments);
  const dispatch = useDispatch();

  function handleChange(event: any) {
    dispatch(setPayment({ type: "review", value: event.target.value }));
  }

  function hanldleChangeRate(value: number) {
    dispatch(setPayment({ type: "rate", value }));
  }

  return (
    <div>
      <div className="bg-white py-4 px-8 mb-4 rounded-lg">
        <h4 className=" text-base font-bold text-center mb-4">
          Оцените мою работу
        </h4>
        <div className=" flex justify-center">
          <ReactStars
            count={5}
            size={60}
            color2={"#EF8633"}
            color1={"#FCE7D6"}
            value={rate}
            onChange={(e: number) => hanldleChangeRate(e)}
          />
        </div>
      </div>
      <textarea
        placeholder="напишите отзыв"
        rows={3}
        name="review"
        value={review}
        className=" focus:outline-none py-2 px-4 rounded-lg w-full resize-none"
        onChange={handleChange}
      />
    </div>
  );
}
