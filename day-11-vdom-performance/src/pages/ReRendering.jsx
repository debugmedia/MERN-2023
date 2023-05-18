import React, { useRef, useState } from "react";
import Container from "../layout/Container";

const ReRendering = () => {
  let secondCounter = useRef(0);
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    secondCounter.current++;
    console.log(secondCounter.current, "Second Counter with useRef");
    if (count < 10) setCount((prev) => prev + 1);
  };
  const onDecrement = () => {
    if (count > 0) setCount((prev) => prev - 1);
  };

  return (
    <Container className="rerendering-container">
      <h4>Re Rendering</h4>

      <div className="counter-container">
        <h1>Count {count}</h1>

        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </Container>
  );
};

export default ReRendering;
