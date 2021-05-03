import React, { useState } from "react";
// import Accordion from "./components/accordion";
import Dropdown from "./components/Dropdown";
// import Search from "./components/search";

// const items = [
//   {
//     title: "React?",
//     content: "Frontend",
//   },
//   {
//     title: "Node?",
//     content: "JS",
//   },
//   {
//     title: "Kubernets?",
//     content: "Docers",
//   },
//   {
//     title: "Docker?",
//     content: "Dock",
//   },
// ];
const options = [
  {
    label: "Red",
    value: "red",
  },
  {
    label: "Green",
    value: "green",
  },
  {
    label: "Blue",
    value: "blue",
  },
];
//<Accordion items={items}/>
const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropDown, setDropDown] = useState(true);
  return (
    <div>
      <button onClick={() => setDropDown(!showDropDown)}>Toggle</button>
      {
        showDropDown?
        <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />:null}
    </div>
  );
};
export default App;
