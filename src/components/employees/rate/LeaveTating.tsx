import React, { useState } from "react";
import ReactStars from "react-stars";

export default function LeaveTating() {
  const [rating, setRating] = useState("0");

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
            value={rating}
            onChange={(e: string) => setRating(e)}
          />
        </div>
      </div>
      <textarea
        placeholder="напишите отзыв"
        rows={3}
        name="review"
        className=" focus:outline-none py-2 px-4 rounded-lg w-full resize-none"
      />
    </div>
  );
}
