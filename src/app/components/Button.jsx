import React from "react";

const CheckboxButton = ({ prop, isChecked, onChange }) => {
  return (
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-blue-500"
        checked={isChecked}
        onChange={onChange}
      />
      <span className="ml-2">{prop === "Hons" ? "UnderGraduate" : prop}</span>
    </label>
  );
};

export default CheckboxButton;
