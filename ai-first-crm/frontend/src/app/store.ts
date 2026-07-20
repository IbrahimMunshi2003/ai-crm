import { configureStore } from "@reduxjs/toolkit";

import chatReducer from "../features/chat/chatSlice";
import interactionReducer from "../features/interaction/interactionSlice";
import dashboardReducer from "../features/dashboard/dashboardSlice";
import analyticsReducer from "../features/analytics/analyticsSlice";
import followupReducer from "../features/followups/followupSlice";
export const store = configureStore({
  reducer: {
    chat: chatReducer,
    interaction: interactionReducer,
    dashboard: dashboardReducer,
    analytics: analyticsReducer,
    followups: followupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;