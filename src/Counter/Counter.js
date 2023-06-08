import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const selecter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const dispatch = useDispatch();
  console.log(dispatch);
  function decr() {
    dispatch({ type: "decrement" });
  }
  function incr(amount) {
    dispatch({ type: "increment", amount: amount });
  }
  function ToggleCounter() {
    dispatch({ type: "toggle" });
  }
  return (
    <div className="wrapper">
      <h1>Redux counter</h1>
      <div className="counter">
        Counter value: {showCounter ? selecter : ""}
      </div>
      <div className="btns">
        <button onClick={decr}>Decrement</button>
        <button onClick={() => incr(5)}>Increment5</button>
        <button onClick={() => incr(1)}>Increment</button>
      </div>
      <button onClick={ToggleCounter} style={{ marginTop: "10px" }}>
        ToggleCounter
      </button>
    </div>
  );
}

export default Counter;
