import React from "react";
import withCounter from "./HOC/withCounter";

const ClickCounter = ({ count, increment }) => {
  return (
    <div>
      <button onClick={increment} type="button">
        Clicked {count} times
      </button>
    </div>
  );
};

export default withCounter(ClickCounter);
