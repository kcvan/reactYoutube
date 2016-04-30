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
// component that just renders jsx.

class SearchBar extends Component {
  // All class-based components have a built-in contructor function which is the
  // first and only function that is called automatically whenever a new instance
  // of the class is created. The constructor function is reseved for doing some
  // setup inside of our class, like initializing variables and state and things.
  // Super allows us to call a method on the parent class (Component) that we extended
  // from.
  constructor(props) {
    super(props);

    // This is how we initialize "state" in a classe based component. Only
    // class-based component have state. When we create state, we always
    // say this.state and assign it to a new object. The object we pass
    // will have properties that we want to record on the state. We name
    // this particular property term because it is short for "search term", 
    // which will be the value that we want to update when the search bar changes.
    this.state = { term: "" };
  }



  // Although it does not look like a method with the classic key/value pair,
  // it is indeed a function. The onChange is tracking for changes in the 
  // input box. To track any type of event, you just type "on" + event={handler}.
  // This reads as "Create a new input element and pass it a prop, onChange with
  // the value of onInputChange".
  render() {
    // return <input onChange={this.onInputChange} />;
    // Refactor to use arrow functions
    return <input onChange={event => console.log(event.target.value)} />;
  }

  // Here, we declared (now refactored) an event handler which is a funtion that will run whenever
  // the event occurs. We pass the handler to the element that we want to monitor
  // the event. In our case, we want to keep track of whenever the input changes 
  // Usually the syntax for event handlers will be "on" or "handle" + element + event.
  // All native browser events will always get passed an event object, which stores
  // information on the event that occured. Basically here, we can get the text that
  // was changed from the event object.



  // Refactored to use arrow function
  // onInputChange(event) {
  //   // You can see the changing values in the console with this \/
  //   // console.log(event.target.value);
  // }



}

// Exporting SearchBar will let us use SearchBar in other files, we'll need to 
// import SearchBar on the other files in order to have access to the function.
// default means that if we don't specify a function to export out of search_bar.jsx,
// it will default to SearchBar
export default SearchBar;




