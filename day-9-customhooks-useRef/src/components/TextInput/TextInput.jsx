import React from "react";

export const TextInput = ({
  handleChange,
  isFormValidOnBlur,
  label,
  id,
  name,
  type,
  children,
  errorFields,
}) => {
  return (
    <div className="input-section">
      <label htmlFor={id}>
        {label} <span className="danger">*</span>
      </label>
      <input
        type={type}
        id={id}
        name={name}
        onChange={handleChange}
        onBlur={isFormValidOnBlur}
      />
      {errorFields[name] && <p className="danger">First Name is required</p>}
      {children}
    </div>
  );
};
