// Importing react, because even though we don't reference react in this component,
// when we transpile it to es5, it still makes a call to React.createElement
import React from "react";

// Defining our search_bar component
const SearchBar = () => {
  // Here, we've defined the input box for the user, but we have not rendered the
  // component to the DOM or index.jsx so the user can actually see it. To do this,
  // we have to export the SearchBar function to index.jsx so the component can
  // be rendered
  return <input />;
}

// Exporting SearchBar will let us use SearchBar in other files, we'll need to 
// import SearchBar on the other files in order to have access to the function.
// default means that if we don't specify a function to export out of search_bar.jsx,
// it will default to SearchBar
export default SearchBar