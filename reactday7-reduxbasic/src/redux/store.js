import Counter from "@/app/Counter/page";
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducerSlices/counterSlice";

export default configureStore({
  reducer: {
    Counter: counterSlice,
  },
});
