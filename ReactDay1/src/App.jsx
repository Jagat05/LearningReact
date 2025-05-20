import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
    console.log("Value =", value + 1);
  };

  const decrement = () => {
    if (value > 0) {
      setValue(value - 1);
      console.log("Value =", value - 1);
    } else {
      console.log("Value cannot be less than 0");
    }
  };

  return (
    <div>
      <div>
        <div>Counter</div>
        <p> Value : {value}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default App;
