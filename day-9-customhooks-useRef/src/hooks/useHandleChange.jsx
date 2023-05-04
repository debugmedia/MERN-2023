import { useState } from "react";

export const useHandleChange = (initial) => {
  const [state, setState] = useState(initial);

  const handleChange = (event) => {
    setState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    state,
    handleChange,
  };
};
