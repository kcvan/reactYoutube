// Importing react, because even though we don't reference react in this component,
// when we transpile it to es5, it still makes a call to React.createElement
// The handlebars is just saying "import Component from React, and name it Component"
import React, { Component } from "react";




// // Defining our search_bar component (this is called a function component)
// const SearchBar = () => {
//   // Here, we've defined the input box for the user, but we have not rendered the
//   // component to the DOM or index.jsx so the user can actually see it. To do this,
//   // we have to export the SearchBar function to index.jsx so the component can
//   // be rendered
//   return <input />;
// }




// Refactoring to a class-based component:
// This is called a class component, it has the ability to be aware of itself,
// meaning it can hand off info to other components.  
// This can be read as "Define a newclass called SearchBar, and give it access
// to all of the functionality that React.Component has". When we use a class based 
// method, we still have to give it the ability to render itself. All class-based
// components must have a render method. We changed the SearchBar from a function
// component to a class-based component because we want it to pass information
// along to other places, this is called a smart component, rather than a dumb
// component that just renders jsx

class SearchBar extends Component{
  // Although it does not look like a method with the classic key/value pair,
  // it is indeed a function.
  render() {
    return <input />;
  }
}

// Exporting SearchBar will let us use SearchBar in other files, we'll need to 
// import SearchBar on the other files in order to have access to the function.
// default means that if we don't specify a function to export out of search_bar.jsx,
// it will default to SearchBar
export default SearchBar