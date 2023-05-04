import React, { Fragment, useRef, useState } from "react";
import "./App.css";
import { TextInput } from "./components/TextInput/TextInput";
import { fetchFromLocalStorage } from "./utils/utils";
import { useHandleChange } from "./hooks/useHandleChange";

const Slider = () => {
  const inputRef = useRef(null);
  const counterRef = useRef(0);

  const [counter, setCounter] = useState(0);
  const { state: fields, handleChange: customHandleChange } = useHandleChange({
    firstName: "",
  });

  //   const [fields, setFields] = useState({
  //     firstName: "",
  //   });

  const [errorFields, setErrorFields] = useState({
    firstName: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValidOnSubmit()) {
      console.log("Valid");
      alert("Submitted");
      return;
    }

    console.log("InValid");
  };

  const handleChange = (event) => {
    //  setFields((prev) => ({
    //    ...prev,
    //    [event.target.name]: event.target.value,
    //  }));
    customHandleChange(event);
    isFormValidOnBlur(event);
  };

  const isFormValidOnSubmit = () => {
    const errors = {
      firstName: false,
      email: false,
      gender: false,
      country: false,
    };

    if (fields.firstName === "") {
      errors.firstName = true;
    }

    setErrorFields(errors);

    if (Object.values(errors).some((error) => error === true)) {
      return false;
    }

    return true;
  };

  const isFormValidOnBlur = (event) => {
    const { name, value } = event.target;
    let error = false;

    if (name === "firstName" && value === "") {
      error = true;
    }

    setErrorFields((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const incrementCounter = () => {
    counterRef.current++;
    console.log(counterRef);
  };

  return (
    <Fragment>
      <input type="text" ref={inputRef} />
      <button onClick={() => console.log(inputRef.current.value)}>
        Show Ref
      </button>
      <button onClick={incrementCounter}>Counter</button>
      {/* <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <h1>Register</h1>
        <p className="caption">Please fill the form.</p>
        <TextInput
          handleChange={handleChange}
          isFormValidOnBlur={isFormValidOnBlur}
          errorFields={errorFields}
          label="First Name"
          id="first-name"
          name="firstName"
          type="text"
        />
        <button type="submit">Submit</button>
      </form> */}
    </Fragment>
  );
};

export default Slider;
