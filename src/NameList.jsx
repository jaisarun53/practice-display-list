import React from "react";
const nameList = ["arun", "laxman", "payal", "aakash", "sunil"];
const NameList = () => {
  return (
    <div>
      {nameList.map((item, index, self) => {
        return <h3 key={index}>{item}</h3>;
      })}
    </div>
  );
};

export default NameList;
