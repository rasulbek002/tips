import { createSlice } from "@reduxjs/toolkit";

export const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    value: 0,
    review: "",
    id: null,
    rate: 0,
  },
  reducers: {
    setPayment: (state, action) => {
      const { type, value } = action.payload;

      return { ...state, [type]: value };
    },
  },
});

export const { setPayment } = paymentSlice.actions;

export default paymentSlice.reducer;
