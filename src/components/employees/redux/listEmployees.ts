import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { fetchEmployeesApi } from "../api/fetchEmployeesApi.ts";
import { Employee } from "../types";
// Define the shape of the initial state
interface EmployeesState {
  employees: Employee[];
  status: "success" | "loading" | "failed";
  error?: string | null;
}

// Define the initial state
const initialState: EmployeesState = {
  employees: [],
  status: "success",
  error: null,
};

// Define the async thunk to fetch employees from the API
export const fetchEmployees = createAsyncThunk(
  "employees/fetchEmployees",
  async (endpoint: string = "employees") => {
    const response = await fetchEmployeesApi(
      endpoint
    );

    return response.data;
  }
);

// Define the employees slice
export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    // Add any extra reducers here
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchEmployees.pending,
        (state) => {
          state.status = "loading";
        }
      )
      .addCase(
        fetchEmployees.fulfilled,
        (state, action) => {
          state.status = "success";
          state.employees = action.payload;
        }
      )
      .addCase(
        fetchEmployees.rejected,
        (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        }
      );
  },
});

export default employeesSlice.reducer;
