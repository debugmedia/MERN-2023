import { useState } from "react";
import Counter from "./Components/Counter";
import "./App.css";
import UserList from "./Components/UserList";
import Accordion from "./Components/Accordion";
import AccordionNew from "./Components/AccordionNew";

function App() {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    if (count < 10) setCount((prev) => prev + 1);
  };
  const onDecrement = () => {
    if (count > 0) setCount((prev) => prev - 1);
  };

  return (
    <>
      <h2>Accordion Type 1 (Optional)</h2>
      <AccordionNew />
      <h2>Accordion Type 2 (Standard Way)</h2>
      <Accordion />
      <Counter
        count={count}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
      <div>
        <UserList />
      </div>
    </>
  );
}

export default App;
