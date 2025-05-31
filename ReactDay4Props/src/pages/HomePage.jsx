import React from "react";
import StudentPage from "./StudentPage";

const HomePage = () => {
  return (
    <div>
      <h1>Learning the concept of Props</h1>

      <StudentPage
        name="Jagat Joshi"
        roll={5}
        profession="Student"
        isStudent={true}
      />

      <StudentPage
        name="Sita Joshi"
        roll={6}
        profession="Student"
        isStudent={true}
      />

      <StudentPage
        name="Rita Joshi"
        roll={7} // ✅ Fix: Provide a valid number
        profession="Worker"
        isStudent={false}
      />
    </div>
  );
};

export default HomePage;
