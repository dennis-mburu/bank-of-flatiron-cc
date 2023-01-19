import React from "react";

function Search({onSearchChange}) {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
