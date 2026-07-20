import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getFollowups } from "./followupApi";

import type { FollowupState } from "./followupTypes";

const initialState: FollowupState = {
  loading: false,
  error: null,
  followups: [],
};

export const fetchFollowups = createAsyncThunk(
  "followups/fetch",
  async () => {
    return await getFollowups();
  }
);

const followupSlice = createSlice({
  name: "followups",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchFollowups.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchFollowups.fulfilled, (state, action) => {
        state.loading = false;
        state.followups = action.payload;
      })

      .addCase(fetchFollowups.rejected, (state) => {
        state.loading = false;
        state.error = "Unable to load followups";
      });
  },
});

export default followupSlice.reducer;