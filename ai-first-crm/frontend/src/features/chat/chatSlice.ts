import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ChatMessage } from "./chatTypes";

interface ChatState {
  messages: ChatMessage[];
  loading: boolean;
  currentTool: string;
}

const initialState: ChatState = {
  messages: [],
  loading: false,
  currentTool: "",
};

const chatSlice = createSlice({
  name: "chat",

  initialState,

  reducers: {
    addMessage(state, action: PayloadAction<ChatMessage>) {
      state.messages.push(action.payload);
    },

    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },

    setCurrentTool(state, action: PayloadAction<string>) {
      state.currentTool = action.payload;
    },

    clearChat(state) {
      state.messages = [];
    },
  },
});

export const {
  addMessage,
  setLoading,
  setCurrentTool,
  clearChat,
} = chatSlice.actions;

export default chatSlice.reducer;