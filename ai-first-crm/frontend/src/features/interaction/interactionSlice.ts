import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Interaction } from "./interactionTypes";

const initialState: Interaction = {
  hcp_name: "",
  interaction_date: "",
  interaction_type: "",
  product: "",
  sentiment: "",
  discussion: "",
  brochure_shared: false,
  follow_up: "",
  summary: "",
};

const interactionSlice = createSlice({
  name: "interaction",
  initialState,

  reducers: {
    setInteraction(state, action: PayloadAction<Interaction>) {
      return action.payload;
    },

    clearInteraction() {
      return initialState;
    },
  },
});

export const { setInteraction, clearInteraction } =
  interactionSlice.actions;

export default interactionSlice.reducer;