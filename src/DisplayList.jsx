import React from "react";
const student1 = {
  name: "arun jaiswal",
  email: "arun@gmail.com",
  collage: "ismt college",
};
const student2 = {
  name: "akash jaiswal",
  email: "akash@gmail.com",
  collage: " narayani namuna college",
};
const DisplayList = () => {
  return (
    <div>
      <div style={{ border: "1px solid white" }}>
        <h3>{student1.name}</h3>
        <p>{student1.email}</p>
        <p>{student1.collage}</p>
      </div>
      <div style={{ border: "1px solid white" }}>
        <h3>{student2.name}</h3>
        <p>{student2.email}</p>
        <p>{student2.collage}</p>
      </div>
    </div>
  );
};

export default DisplayList;
