import { useEffect, useState } from "react";

const useLocalStorage = (initial) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const data = localStorage.getItem(initial);
    setValue(data);
  }, []);

  const handleSetLocalStorage = (val, token) => {
    localStorage.setItem(val, token);
  };

  const handleGetLocalStorage = (val) => {
    const data = localStorage.getItem(val);
    setValue(data);
    return data;
  };

  const handleRemoveLocalStorage = (val) => {
    localStorage.removeItem(val);
  };

  return {
    value,
    handleGetLocalStorage,
    handleSetLocalStorage,
    handleRemoveLocalStorage,
  };
};

export default useLocalStorage;
