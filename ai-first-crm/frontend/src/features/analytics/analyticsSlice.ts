import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import * as api from "./analyticsApi";

import type {
  AnalyticsOverview,
  ProductStat,
  DoctorStat,
  MonthlyStat,
  SentimentStat,
  Insight,
} from "./analyticsTypes";

interface AnalyticsState {
  loading: boolean;
  error: string | null;

  overview: AnalyticsOverview | null;

  products: ProductStat[];

  doctors: DoctorStat[];

  monthly: MonthlyStat[];

  sentiments: SentimentStat[];

  insights: Insight | null;
}

const initialState: AnalyticsState = {
  loading: false,
  error: null,

  overview: null,

  products: [],

  doctors: [],

  monthly: [],

  sentiments: [],

  insights: null,
};

export const fetchAnalytics = createAsyncThunk(
  "analytics/fetch",
  async () => {
    const [
      overview,
      products,
      doctors,
      monthly,
      sentiments,
      insights,
    ] = await Promise.all([
      api.getOverview(),
      api.getProducts(),
      api.getDoctors(),
      api.getMonthly(),
      api.getSentiments(),
      api.getInsights(),
    ]);

    return {
      overview,
      products,
      doctors,
      monthly,
      sentiments,
      insights,
    };
  }
);

const analyticsSlice = createSlice({
  name: "analytics",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchAnalytics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchAnalytics.fulfilled, (state, action) => {
        state.loading = false;

        state.overview = action.payload.overview;
        state.products = action.payload.products;
        state.doctors = action.payload.doctors;
        state.monthly = action.payload.monthly;
        state.sentiments = action.payload.sentiments;
        state.insights = action.payload.insights;
      })

      .addCase(fetchAnalytics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to load analytics";
      });
  },
});

export default analyticsSlice.reducer;