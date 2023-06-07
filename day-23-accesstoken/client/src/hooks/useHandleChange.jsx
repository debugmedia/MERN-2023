import { useState } from "react";

const useHandleChange = (initial) => {
  const [state, setState] = useState(initial);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return {
    formData: state,
    handleInputChange: handleChange,
  };
};

export default useHandleChange;
