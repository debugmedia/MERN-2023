[] Code Review
[] Form Handling
[] Validation

'
'
'
'
'

'
'
'
'
'

'
'
'
'
'

'
'
'
'
'

'
'
'
'
'

'
'
'
'
'

'
'
'
'
'

```jsx
import React, { Fragment, useState } from "react";
import { Title } from "./components/Title";

const Slider = () => {
   const [form, setForm] = useState({
      firstName: "",
      email: "",
      gender: "",
      country: "",
      dob: "",
   });
   const [formError, setFormError] = useState({
      firstName: false,
      email: false,
      gender: false,
      country: false,
      dob: false,
   });

   const handleSubmit = (event) => {
      event.preventDefault();
      if (isValid()) {
         console.log("Submitted");
      } else {
         console.log("Incorrect form data");
      }
   };

   const handleChange = (event) => {
      setForm((prev) => ({
         ...prev,
         [event.target.name]: event.target.value,
      }));
      isFormValid(event.target.name, event.target.value);
   };

   const isFormValid = (fieldName, fieldValue) => {
      const formError1 = { ...formError };

      console.log(fieldName, fieldValue);
      switch (fieldName) {
         case "firstName":
            console.log("Inisde");
            formError1.firstName = fieldValue === "";
            break;

         case "email":
            console.log("Inisde 1");
            formError1.email = fieldValue === "";
            break;
         case "gender":
            formError1.gender = fieldValue === "";
            break;
         case "country":
            formError1.country = fieldValue === "";
            break;
         case "dob":
            formError1.dob = fieldValue === "";
            break;
         default:
            break;
      }
      console.log(formError1, "==formError");

      setFormError(formError1);
   };

   const isValid = () => {
      const formError = {
         firstName: form.firstName === "",
         email: form.email === "",
         gender: form.gender === "",
         country: form.country === "",
         dob: form.dob === "",
      };
      setFormError(formError);

      if (Object.values(formError).every((data) => data === false)) {
         return true;
      }
      return false;
   };
   return (
      <Fragment>
         <form onSubmit={handleSubmit} noValidate>
            <h2>Register Form</h2>
            <div className="form-container">
               <label htmlFor="first-name">First Name</label>
               <input id="first-name" type="text" name="firstName" onChange={handleChange} required />
               {formError.firstName && <p className="danger">Please fill first Name</p>}
            </div>
            <div className="form-container">
               <label htmlFor="email">Email</label>
               <input type="text" id="email" name="email" onChange={handleChange} required />
               {formError.email && <p className="danger">Please fill first Name</p>}
            </div>
            <div className="radio-container">
               <div>
                  <label>Gender</label>
               </div>
               <input type="radio" id="male" name="gender" value="male" onChange={handleChange} required />
               <label htmlFor="male">Male</label>
               <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                  required
               />
               <label htmlFor="female">Female</label>
               {formError.gender && <p className="danger">Please fill first Name</p>}
            </div>
            <div className="form-container">
               <label htmlFor="country">Select Country</label>

               <select name="country" id="country" onChange={handleChange} required>
                  <option value="">Select</option>
                  <option value="uae">UAE</option>
                  <option value="india">India</option>
                  <option value="qatar">Qatar</option>
               </select>
               {formError.country && <p className="danger">Please fill first Name</p>}
            </div>
            <div className="form-container">
               <label htmlFor="dob">Date of Birth</label>

               <input type="date" id="dob" name="dob" onChange={handleChange} required />
               {formError.dob && <p className="danger">Please fill first Name</p>}
            </div>

            <div className="button-container">
               <button type="submit">Submit</button>
            </div>
         </form>
      </Fragment>
   );
};

export default Slider;
```
