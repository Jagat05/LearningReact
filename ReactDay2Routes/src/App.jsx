import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Welcome to Home Page</h1>
              <h2>Learning The Concept Of Routes</h2>
            </div>
          }
        />
        <Route path="/About" element={<h1>Welcome to About Page</h1>} />
        <Route path="/Contact" element={<h1>Welcome to Contact Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
