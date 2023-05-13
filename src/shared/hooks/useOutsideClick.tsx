// External dependencies
import { useEffect } from "react";

const useOutsideClick = (
  ref: any,
  callback: Function
) => {
  const handleClick = (e: Event) => {
    if (
      ref.current &&
      !ref.current.contains(e.target)
    ) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener(
      "mousedown",
      handleClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        () => null
      );
    };
  });
};

export default useOutsideClick;
