import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDashboardStats } from "./dashboardApi";
import type { DashboardStats } from "./dashboardTypes";

interface DashboardState {
  stats: DashboardStats | null;
  loading: boolean;
}

const initialState: DashboardState = {
  stats: null,
  loading: false,
};

export const fetchDashboardStats = createAsyncThunk(
  "dashboard/fetchStats",
  async () => {
    return await getDashboardStats();
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardStats.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDashboardStats.fulfilled, (state, action) => {
        state.loading = false;
        state.stats = action.payload;
      })
      .addCase(fetchDashboardStats.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default dashboardSlice.reducer;