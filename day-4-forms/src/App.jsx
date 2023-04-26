import React, { Fragment, useState } from "react";
import "./App.css";
import { TextInput } from "./components/TextInput/TextInput";

// 1. onBlur & onSubmit
// 2. onChange

const Slider = () => {
  // This is for handling any number of inputs fields
  // The key should match the name attribute of the html
  const [fields, setFields] = useState({
    firstName: "",
    email: "",
    gender: "",
    country: "",
    skills: [],
  });

  const [errorFields, setErrorFields] = useState({
    firstName: false,
    email: false,
    gender: false,
    country: false,
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

  // This is for handling any number of inputs fields
  const handleChange = (event) => {
    setFields((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    isFormValidOnBlur(event);
  };

  const handleCheckbox = (event) => {
    let newSkills = [...fields.skills];

    if (event.target.checked) {
      newSkills.push(event.target.value);
    } else {
      newSkills = newSkills.filter((skill) => skill !== event.target.value);
    }

    setFields((prev) => ({
      ...prev,
      [event.target.name]: newSkills,
    }));
    //  isFormValidOnBlur(event);
  };

  console.log(fields.skills);

  //   Solution 1
  //   const isFormValid = () => {
  //     if (fields.firstName === "") {
  //       setErrorFields((prev) => ({
  //         ...prev,
  //         firstName: true,
  //       }));
  //       return false;
  //     } else {
  //       setErrorFields((prev) => ({
  //         ...prev,
  //         firstName: false,
  //       }));
  //       return true;
  //     }
  //   };

  //   Solution 2
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
    if (fields.email === "") {
      errors.email = true;
    }
    if (fields.gender === "") {
      errors.gender = true;
    }
    if (fields.country === "") {
      errors.country = true;
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
    } else if (
      name === "email" &&
      (value === "" ||
        !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
          value
        ))
    ) {
      error = true;
    } else if (name === "gender" && value === "") {
      error = true;
    } else if (name === "country" && value === "") {
      error = true;
    }

    setErrorFields((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
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
        <TextInput
          handleChange={handleChange}
          isFormValidOnBlur={isFormValidOnBlur}
          errorFields={errorFields}
          label="Email"
          id="email"
          name="email"
          type="email"
        />
        <div className="input-section radio-groups">
          <label htmlFor="">Gender</label>
          <div>
            <input
              type="radio"
              name="gender"
              value="male"
              id="male"
              onChange={handleChange}
              onBlur={isFormValidOnBlur}
            />
            <label htmlFor="male" className="radio-buttons">
              Male
            </label>
            <input
              type="radio"
              name="gender"
              value="female"
              id="female"
              onChange={handleChange}
              onBlur={isFormValidOnBlur}
            />
            <label htmlFor="female" className="radio-buttons">
              Female
            </label>
            {errorFields.gender && <p className="danger">Gender is required</p>}
          </div>
        </div>
        <div className="input-section dropdown-section">
          <label htmlFor="">Country</label>
          <select
            name="country"
            id=""
            onChange={handleChange}
            onBlur={isFormValidOnBlur}
          >
            <option value="">Select</option>
            <option value="uae">UAE</option>
            <option value="india">India</option>
            <option value="qatar">Qatar</option>
          </select>
          {errorFields.country && <p className="danger">Country is required</p>}
        </div>
        <div className="input-section radio-groups">
          <label htmlFor="skills">Skills</label>
          <div>
            <input
              type="checkbox"
              name="skills"
              value="javascript"
              id="javascript"
              onChange={handleCheckbox}
              onBlur={isFormValidOnBlur}
            />
            <label htmlFor="javascript" className="radio-buttons">
              Javascript
            </label>
            <input
              type="checkbox"
              name="skills"
              value="React"
              id="react"
              onChange={handleCheckbox}
              onBlur={isFormValidOnBlur}
            />
            <label htmlFor="react" className="radio-buttons">
              React
            </label>
            <input
              type="checkbox"
              name="skills"
              value="Angular"
              id="angular"
              onChange={handleCheckbox}
              onBlur={isFormValidOnBlur}
            />
            <label htmlFor="angular" className="radio-buttons">
              Angular
            </label>
            {errorFields.gender && <p className="danger">Gender is required</p>}
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </Fragment>
  );
};

export default Slider;
