import React, { useReducer, useState } from "react";
import { ACTIONS, counterReducer } from "./counterReducer";

export const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, {
    count: 0,
  });

  return (
    <div>
      <h1>Counter:{state.count}</h1>
      <button
        className="button"
        onClick={() => dispatch({ type: "decrements" })}
      >
        -
      </button>
      <button
        className="button"
        onClick={() => dispatch({ type: ACTIONS.INCREMENT })}
      >
        +
      </button>
      <button className="button" onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
      <button
        className="button"
        onClick={() => dispatch({ type: "increment_by", payload: 10 })}
      >
        on Increment By 10
      </button>
      <button
        className="button"
        onClick={() =>
          dispatch({
            type: "decrement_by",
            payload: {
              count: 5,
            },
          })
        }
      >
        on Decrement By 5
      </button>
    </div>
  );
};
