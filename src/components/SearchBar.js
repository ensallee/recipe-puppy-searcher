import React from 'react'

const SearchBar = (props) => {
  return (
    <div className="search">
      <input type="text" placeholder="Search Recipes" value={props.searchTerm} onChange={props.handleChange}></input>
    </div>
  )
}

export default SearchBar;
