// config the store
import employeesSlice from "@/components/employees/redux/listEmployees";
import positionsSlice from "@/components/positions/redux/listPositions";
import { configureStore } from "@reduxjs/toolkit";

export type RootState = ReturnType<
  typeof store.getState
>;

const store = configureStore({
  reducer: {
    employees: employeesSlice,
    positions: positionsSlice,
  },
});

// export default the store
export default store;
