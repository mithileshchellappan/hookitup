import React, { useState } from "react";
import Accordion from "./components/accordion";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import Route from "./components/route";
import Search from "./components/search";
import Translate from "./components/translate";
const items = [
  {
    title: "React?",
    content: "Frontend",
  },
  {
    title: "Node?",
    content: "JS",
  },
  {
    title: "Kubernets?",
    content: "Docers",
  },
  {
    title: "Docker?",
    content: "Dock",
  },
];

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

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header/>
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={options}
          onSelectedChange={setSelected}
          selected={selected}
        />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
    </div>
  );
};
export default App;
