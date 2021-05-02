import React from "react";
import Accordion from "./components/accordion";
import Search from "./components/search";

const items = [{
  title:'React?',
  content:'Frontend'
},
{
  title:'Node?',
  content:'JS'
},{
  title:'Kubernets?',
  content:'Docers'
},{
  title:'Docker?',
  content:'Dock'
}
];
//<Accordion items={items}/>
const App = () => {
  return <div><Search/></div>;
};
export default App;
