import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const selecter = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  console.log(dispatch);
  function decr() {
    dispatch({ type: "decrement" });
  }
  function incr() {
    dispatch({ type: "increment" });
  }
  return (
    <div>
      <h1>Redux counter</h1>
      <div>Counter value: {selecter}</div>
      <div>
        <button onClick={decr}>Decrement</button>
        <button onClick={incr}>Increment</button>
      </div>
    </div>
  );
}

export default Counter;
