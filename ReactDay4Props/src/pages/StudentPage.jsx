import React from "react";

const StudentPage = (props) => {
  return (
    <div>
      <div>
        <h2>Student Name : {props.name}</h2>
        <h2>Student Roll : {props.roll}</h2>
        <h2>Profession: {props.profession}</h2>
        <h2>Is Student ? : {props.isStudent ? "Yes" : "No"}</h2>
      </div>
    </div>
  );
};

export default StudentPage;
