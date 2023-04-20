import { Fragment, useState, useEffect } from "react";
import "./App.css";
import { Title } from "./components/Title";
import axios from "axios";

function App() {
  const [userList, setUserList] = useState([]);
  const [userName, setUserName] = useState("Debug Media");
  const [count, setCount] = useState(1);
  const [toggle, setToggle] = useState(false);

  const onIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const fetchUsers = async () => {
    const response = await axios("https://jsonplaceholder.typicode.com/todos");
    setUserList(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const toggleSwitch = () => {
    setToggle((prev) => !prev);
  };

  return (
    <Fragment>
      <div className="App">
        <h1>Current Count: {count}</h1>
        <p>{toggle ? "On" : "Off"}</p>
        <button onClick={toggleSwitch}>Toggle</button>

        {count >= 5 && <Title userName={userName} />}
        <button onClick={onIncrement}>Increment</button>
        <ul>
          {userList.map((data) => (
            <li key={data.id}>{data.title?.toUpperCase()}</li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
}

export default App;
