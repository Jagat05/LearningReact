"use client";
import {
  decrement,
  increment,
  reset,
} from "@/redux/reducerSlices/counterSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const counter = () => {
  const dispatch = useDispatch();

  const { value } = useSelector((state) => state.Counter);

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center gap-4 bg-gray-100 text-cyan-500 p-8 rounded-lg shadow-lg">
          <div className="text-3xl font-bold">Redux Counter</div>

          <button
            onClick={() => dispatch(increment())}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Increment (+1){" "}
          </button>
          <p>Value = {value}</p>
          <button
            onClick={() => dispatch(decrement())}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Decrement (-1)
          </button>
          <button
            onClick={() => dispatch(reset())}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default counter;
