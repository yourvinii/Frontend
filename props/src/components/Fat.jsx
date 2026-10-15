import React from "react";
import Child from "./Child";

const Fat = ({ gift }) => {
  return (
    <div>
      <Child gift={gift} />
    </div>
  );
};

export default Fat;
