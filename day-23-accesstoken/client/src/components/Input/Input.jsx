import { useEffect, useRef } from "react";

const Input = ({
  type,
  name,
  palaceholder,
  id,
  onchange,
  onclick,
  refer
}) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={palaceholder}
        id={id}
        onChange={onchange}
        onClick={onclick}
        ref={refer}
      />
    </div>
  );
};

export default Input;
