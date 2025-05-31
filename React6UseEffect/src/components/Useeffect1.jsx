import React, { useEffect, useState } from "react";

const Useeffect1 = () => {
  const [num, setNum] = useState(0);
  const [status, setStatus] = useState("");

  const Increment = () => {
    if (num < 10) {
      setNum(num + 1);
      setStatus("Incremented");
    }
  };

  const Decrement = () => {
    if (num > 0) {
      setNum(num - 1);
      setStatus("Decremented");
    }
  };

  useEffect(() => {
    alert(`Number is ${status} to ${num}`);
  }, [num]);

  const isLimit = num === 0 || num === 10;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center gap-5 bg-white p-6 rounded-xl shadow-md">
        <button
          onClick={Increment}
          className="bg-sky-500 p-3 rounded-2xl text-white hover:bg-sky-600"
        >
          Increment (+)
        </button>

        {/* Number display with conditional red text */}
        <p
          className={`text-xl font-bold ${
            isLimit ? "text-red-500" : "text-black"
          }`}
        >
          {num}
        </p>

        <button
          onClick={Decrement}
          className="bg-sky-500 p-3 rounded-2xl text-white hover:bg-sky-600"
        >
          Decrement (-)
        </button>
      </div>
    </div>
  );
};

export default Useeffect1;
