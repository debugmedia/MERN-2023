import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.css";

function App() {
  const [d, setd] = useState([]);

  const counterIncrementAfterCartApi = (a, b, c) => {
    const newMyArray = { ...myArray };

    newMyArray.push("a");
    newMyArray.push("c");
    // logic

    setMyArray(newMyArray);
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  return (
    <>
      <div>
        {isShow && (
          <button
            onClick={(event) => handleCalendarlModal(event, "1", "debug media")}
          >
            Toggle
          </button>
        )}
        {isShow && (
          <button onClick={() => handleCalendarlModal("1", "debug media")}>
            Toggle
          </button>
        )}

        {isShow && <button onClick={handleCalendarlModal}>Toggle</button>}

        <a
          className={`${styles.homeContainer} ${styles.homeContainer}`}
          href="https://vitejs.dev"
          target="_blank"
          rel="noreferrer"
        >
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {[1, 2, 3].map((data) => {
        return (
          <div>
            {data}
            sdfsdf sdfsdff sdfsdf
          </div>
        );
      })}
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
