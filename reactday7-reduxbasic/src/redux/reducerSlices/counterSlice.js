// redux/reducerSlices/counterSlice.ts
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1; // Increment the counter value by 1
    },
    decrement: (state) => {
      if (state.value <= 0) {
        return; // Prevent decrementing below zero
      }
      state.value -= 1; // Decrement the counter value by 1
    },
    reset: (state) => {
      state.value = 0; // Reset value to zero
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
