import React, { Fragment, useState } from "react";
import { Title } from "./components/Title";

const Slider = () => {
  // This is for handling input fields individually
  const [firstName, setFirstName] = useState("");

  //  This is for handling any number of inputs fields
  //  The key should match the name attribute of the html
  const [fields, setFields] = useState({
    firstName: "",
    email: "",
    gender: "",
    country: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // api call
    // fields => API
    console.log(fields);
  };

  // This is for handling input fields individually
  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };

  //  This is for handling any number of inputs fields
  const handleChange = (event) => {
    setFields((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        {/* UnComment the below code to see handling input fields individually */}
        {/* <div>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            onChange={handleFirstName}
          />
        </div> */}
        <div>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" name="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="">Gender</label>
          <input
            type="radio"
            name="gender"
            value="male"
            id="male"
            onChange={handleChange}
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            name="gender"
            value="female"
            id="female"
            onChange={handleChange}
          />
          <label htmlFor="female">Female</label>
        </div>
        <div>
          <label htmlFor="">Country</label>
          <select name="country" id="" onChange={handleChange}>
            <option value="">Select</option>
            <option value="uae">UAE</option>
            <option value="india">India</option>
            <option value="qatar">Qatar</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </Fragment>
  );
};

export default Slider;
