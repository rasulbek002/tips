// config the store
import { configureStore } from "@reduxjs/toolkit";
import employeesSlice from "@/entities/employees/model/listEmployees";
import positionsSlice from "@/entities/positions/model/redux/listPositions";
import { paymentSlice } from "@/entities/payments/slice";

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    employees: employeesSlice,
    positions: positionsSlice,
    payments: paymentSlice.reducer,
  },
});

// export default the store
export default store;
