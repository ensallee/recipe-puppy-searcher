import React from 'react'

const SearchBar = (props) => {
  return (
    <input type="text" placeholder="Search Recipes" value={props.searchTerm} onChange={props.handleChange}></input>
  )
}

export default SearchBar;
