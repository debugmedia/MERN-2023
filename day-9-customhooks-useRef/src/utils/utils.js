export const fetchFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
