import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Useeffect1 from "./components/Useeffect1";
import Home from "./Home";
function App() {
  // //-->Use Effect Syntax
  // useEffect(
  //   () => {
  //     //-->call back function
  //   },
  //   [] //->Dependency Array
  // );
  useEffect(() => {
    alert("Hello from Useeffect!!");
  }, []);
  // useEffect(() => {
  //   alert("Count have Changed!!");
  // }, [count]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Useeffect1" element={<Useeffect1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
