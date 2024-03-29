import { RootState } from "@/App/redux/store";
import { setPayment } from "@/entities/payments/slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-stars";

export default function LeaveTating() {
  const { review, rate } = useSelector((state: RootState) => state.payments);
  const dispatch = useDispatch();
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  function handleChange(event: any) {
    dispatch(setPayment({ type: "review", value: event.target.value }));
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener('resize', () => {
        setWindowSize(window.innerWidth)
      })
    }
  })

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
            size={windowSize > 375 ? 60 : 48}
            color2={"#EF8633"}
            color1={"#FCE7D6"}
            value={rate}
            onChange={(e: number) => hanldleChangeRate(e)}
          />
        </div>
      </div>
      <textarea
        placeholder="Напишите отзыв"
        rows={3}
        name="review"
        value={review}
        className=" focus:outline-none py-2 px-4 rounded-lg w-full resize-none"
        onChange={handleChange}
      />
    </div>
  );
}
