import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const onBodyClick=(event) => {
      if(ref.current&&ref.current.contains(event.target)){
        return;
      }else{
        setOpen(false)
      }
    }
    document.body.addEventListener("click",onBodyClick );
    return()=>{
      document.body.removeEventListener('click',onBodyClick)
    }
  }, []);
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
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a language</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : null}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : null}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
