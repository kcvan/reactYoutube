// This imports react from the module. This knows how to render and nest components. 
// With libraries that we import, we don't need to specify a file path, unlike
// files we create.
import React from "react";
// This library is how we actually render components to the DOM
import ReactDOM from "react-dom";
// Here we're importing out SearchBar function from search_bar.jsx.
// SearchBar is just a variable/place holder, we can call it anything once we import it.
// Unlike libraries, we have to specify the file path. You don't need to add an
// extension if the file is a .js or .jsx file
import SearchBar from "./components/search_bar";
// Declaring a constant to hold our API key
// Go to Google Youtube API to get your own API key
const API_KEY = "";

// 1) Create a new component. This component should produce some HTML.

// const is an ES6 syntax that declares a variable, but the difference 
// is that using const, you cannot reassign App, like App = 5;
// You can think of this function as a factory that produces instances
// of what is inside it. In this case, it's the div. To create the 
// instance of App, it'll look like <App />
// The fat arrow is new ES6 syntax, the main difference is that the "this"
// is pointed as different things.  
const App = () => {
  // Although this looks like HTML, this is still javascript using JSX which, 
  // is a subset (or dialect) of JavaScript. Babel will transpile this into 
  // normal JavaScript that the browser can read. The purpose of JSX is to 
  // write JavaScript and have it rendered as HTML after being compiled.
  // For multiple components being rendered, it is a good convention to wrap
  // your enclosing div with parathesis. React won't be able to render multiple
  // components on their own, they will have to be enclosed in an html attribute.
  // You can start to notice this tree-like structure that's forming, very similar 
  // to actual HTML!
  return (
    <div>
      <SearchBar />
    </div>
  )
}


// 2) Take this component's generated HTML and put it on the page (in the DOM).
// We use reactDOM because we want to render something to the DOM. It takes
// an instance, which we created using out JSX tags <App />
// The first parameter it takes is the instance, second is an element that
// you want to link it to
ReactDOM.render(<App />, document.querySelector(".container")); 