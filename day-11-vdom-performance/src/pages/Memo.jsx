import React, { Fragment, useRef, useState } from "react";
import Container from "../layout/Container";
import UserList from "../components/UserList";

const Memo = () => {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    if (count < 10) setCount((prev) => prev + 1);
  };
  const onDecrement = () => {
    if (count > 0) setCount((prev) => prev - 1);
  };

  console.log("Counter Component");

  return (
    <Container className="rerendering-container">
      <h4>Re Rendering</h4>
      <div className="counter-container">
        <Fragment>
          <h1>Count {count}</h1>
        </Fragment>
        <Fragment>
          <button onClick={onDecrement}>-</button>
          <button onClick={onIncrement}>+</button>
        </Fragment>
      </div>

      <UserList />
    </Container>
  );
};

export default Memo;
