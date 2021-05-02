import React, { useState } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const renderedOptions = options.map((option) => {
    if (selected.value !== option.value) {
      return (
        <div
          onClick={() => onSelectedChange(option)}
          key={option.value}
          className="item"
        >
          {option.label}
        </div>
      );
    } else {
      return null;
    }
  });
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a color</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open?'visible active':null}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open?'visible transition':null}`} >{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
