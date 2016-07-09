import React from 'react'
import ReactDOM from 'react-dom';


import SearchBar from "./components/search_bar";

const API_KEY = 'AIzaSyCK21wWAbN8uSxvP3EnK8DrSB4t6myf0eM';

// Create a new compenent. Thid component should produce some html

const App = () => {
  return (
    <div>
    <SearchBar/>
    </div>
    );
}

//take this compenent's generated HTML and put it on the pafe (in the dom)

ReactDOM.render(<App/>, document.querySelector(
'.container'));
