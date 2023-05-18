import React, { Fragment, useMemo, useState } from "react";
import Container from "../layout/Container";
import UserList from "../components/UserList";
import { slowFunction } from "../utils";

const ReactUseMemo = () => {
  const [count, setCount] = useState(0);
  // const userList = useMemo(() => ["A", "B", "C"], [count]);
  const userList = useMemo(() => slowFunction(), []);

  const onIncrement = () => {
    if (count < 10) setCount((prev) => prev + 1);
  };
  const onDecrement = () => {
    if (count > 0) setCount((prev) => prev - 1);
  };

  return (
    <Container className="rerendering-container">
      <h4>useMemo()</h4>
      <div className="counter-container">
        <Fragment>
          <h1>Count {count}</h1>
        </Fragment>
        <Fragment>
          <button onClick={onDecrement}>-</button>
          <button onClick={onIncrement}>+</button>
        </Fragment>
      </div>
      <UserList userList={userList} />
    </Container>
  );
};

export default ReactUseMemo;
