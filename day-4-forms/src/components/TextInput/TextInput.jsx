import React from "react";

export const TextInput = ({
  handleChange,
  isFormValidOnBlur,
  errorFields,
  label,
  id,
  name,
  type,
  children,
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
      {errorFields[name] && <p className="danger">{label} is required</p>}
      {children}
    </div>
  );
};
