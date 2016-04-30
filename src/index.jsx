// This imports react from the module. This knows how to render and nest components. 
// With libraries that we import, we don't need to specify a file path, unlike
// files we create.
import React, { Component } from "react";

// This library is how we actually render components to the DOM
import ReactDOM from "react-dom";

// Importing our youtube search api library so we can have access to it
import YTSearch from "youtube-api-search";

// Here we're importing out SearchBar function from search_bar.jsx.
// SearchBar is just a variable/place holder, we can call it anything once we import it.
// Unlike libraries, we have to specify the file path. You don't need to add an
// extension if the file is a .js or .jsx file
import SearchBar from "./components/search_bar";

// Declaring a constant to hold our API key
// Go to Google Youtube API to get your own API key
const API_KEY = "";

// For testing purposes, we're calling the youtube search function. It takes
// an object that has the api key, and a search term. It'll also take a callback
// function that gives us back data on the search term. Basically a get request.
// You get back an array of objects, where each object is a youtbue video with metadata.
// YTSearch({ key: API_KEY, term: "surfboards"}, function(data) {
//   console.log(data);
// });



// // 1) Create a new component. This component should produce some HTML.

// // const is an ES6 syntax that declares a variable, but the difference 
// // is that using const, you cannot reassign App, like App = 5;
// // You can think of this function as a factory that produces instances
// // of what is inside it. In this case, it's the div. To create the 
// // instance of App, it'll look like <App />
// // The fat arrow is new ES6 syntax, the main difference is that the "this"
// // is pointed as different things.  
// const App = () => {
//   // Although this looks like HTML, this is still javascript using JSX which, 
//   // is a subset (or dialect) of JavaScript. Babel will transpile this into 
//   // normal JavaScript that the browser can read. The purpose of JSX is to 
//   // write JavaScript and have it rendered as HTML after being compiled.
//   // For multiple components being rendered, it is a good convention to wrap
//   // your enclosing div with parathesis. React won't be able to render multiple
//   // components on their own, they will have to be enclosed in an html attribute.
//   // You can start to notice this tree-like structure that's forming, very similar 
//   // to actual HTML!
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// }

// Refactoring to use class-based component, refer to search_bar.js to see what
// a class-based component is.  
// We moved out api call inside the constructor function so we can pass the data
// into the state. We initilized state with an empty array, but it will get updated
// with an array of objects from our search.
// Our refactored code will look like:
// YTSearch({ key: API_KEY, term: "surfboards"}, function(data) {
//   console.log(data);
// });
// but in ES6, when you have the key and value named the same, you can just do like
// we did below

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: "surfboards"}, (videos) => {
      this.setState({ videos }) 
    });

  }
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}


// 2) Take this component's generated HTML and put it on the page (in the DOM).
// We use reactDOM because we want to render something to the DOM. It takes
// an instance, which we created using out JSX tags <App />
// The first parameter it takes is the instance, second is an element that
// you want to link it to
ReactDOM.render(<App />, document.querySelector(".container")); 