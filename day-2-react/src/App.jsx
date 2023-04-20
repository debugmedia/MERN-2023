import { Fragment, useState, useEffect } from "react";
import "./App.css";
import { Title } from "./components/Title";

function App() {
   const [userName, setUserName] = useState("Debug Media");
   const [count, setCount] = useState(1);

   const onIncrement = () => {
      setCount((prev) => prev + 1);
   };

   useEffect(() => {
      setUserName("Danish");
   }, []);

   return (
      <Fragment>
         <div className="App">
            <h2>Current Count: {count}</h2>
            <Title userName={userName} />
            <button onClick={onIncrement}>Increment</button>
         </div>
      </Fragment>
   );
}

export default App;
