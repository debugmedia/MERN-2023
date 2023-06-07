import { useEffect } from "react";

const useDebounce = (incomingFn, searchText, delay) => {
  console.log("🚀 ~ file: useDebounce.jsx:4 ~ useDebounce ~ searchText:", searchText)
  useEffect(() => {
    const timeout = setTimeout(() => {
      incomingFn(searchText);
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [searchText]);
};
export default useDebounce;
