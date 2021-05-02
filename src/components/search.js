import React, { useState, useEffect } from "react";
import axios from "axios";
const Search = () => {
  const [term, setTerm] = useState("");
  useEffect(() => {
   axios.get().then((response)=>{console.log(response.data)})
  }, [term]);
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
