import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import * as api from "./settingsApi";

export const fetchSettings = createAsyncThunk(
  "settings/fetch",
  async () => {
    return await api.getSettings();
  }
);

export const updateSettings = createAsyncThunk(
  "settings/update",
  async (data: any) => {
    return await api.saveSettings(data);
  }
);

const settingsSlice = createSlice({
  name: "settings",

  initialState: {
    loading: false,

    profile: {},

    ai: {},

    database: {},

    preferences: {},

    notifications: {},
  },

  reducers: {},

  extraReducers(builder) {

    builder

      .addCase(fetchSettings.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchSettings.fulfilled, (state, action) => {

        state.loading = false;

        state.profile = action.payload.profile;

        state.ai = action.payload.ai;

        state.database = action.payload.database;

        state.preferences = action.payload.preferences;

        state.notifications = action.payload.notifications;

      });

  },

});

export default settingsSlice.reducer;