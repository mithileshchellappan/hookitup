import React from "react";
import Accordion from "./components/accordion";

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

const App = () => {
  return <div><br/><Accordion items={items}/></div>;
};
export default App;
