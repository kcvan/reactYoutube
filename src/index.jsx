// This imports react from the module. This knows how to render and nest components
import React from "react";
// This library is how we actually render components to the DOM
import ReactDOM from "react-dom";

// Declaring a constant to hold our API key
const API_KEY = "";

// 1) Create a new component. This component should produce some HTML.

// const is an ES6 syntax that declares a variable, but the difference 
// is that using const, you cannot reassign App, like App = 5;
// You can think of this function as a factory that produces instances
// of what is inside it. In this case, it's the div. To create the 
// instance of App, it'll look like <App />
// The fat arrow is new ES6 syntax, themain difference is that the "this"
// is pointed as different things.  
const App = () => {
  // Although this looks like HTML, this is still javascript using JSX, 
  // a subset (or dialect) of JavaScript. Babel will transpile this into 
  // normal JavaScript that the browser can read. The purpose of JSX is to 
  // write JavaScript and have it rendered as HTML after being compiled.
  return <div>Hi!</div>;
}


// 2) Take this component's generated HTML and put it on the page (in the DOM).
// We use reactDOM because we want to render something to the DOM. It takes
// an instance, which we created using out JSX tags <App />
// The first parameter it takes is the instance, second is an element that
// you want to link it to
ReactDOM.render(<App />, document.querySelector(".container")); 