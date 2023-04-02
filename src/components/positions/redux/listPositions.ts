import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { Position } from "../types.js";
import { fetchPositionsApi } from "../api/fetchPositionsApi";
// Define the shape of the initial state
interface PositionsState {
  positions: Position[];
  status: "success" | "loading" | "failed";
  error?: string | null;
}

// Define the initial state
const initialState: PositionsState = {
  positions: [],
  status: "success",
  error: null,
};

// Define the async thunk to fetch employees from the API
export const fetchPositions = createAsyncThunk(
  "positions/fetchPositions",
  async () => {
    const response = await fetchPositionsApi();

    return response.data;
  }
);

// Define the employees slice
export const positionsSlice = createSlice({
  name: "positions",
  initialState,
  reducers: {
    // Add any extra reducers here
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchPositions.pending,
        (state) => {
          state.status = "loading";
        }
      )
      .addCase(
        fetchPositions.fulfilled,
        (state, action) => {
          state.status = "success";
          state.positions = action.payload;
        }
      )
      .addCase(
        fetchPositions.rejected,
        (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        }
      );
  },
});

export default positionsSlice.reducer;
