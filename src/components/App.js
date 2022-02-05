import React from "react";
import "../App.css";

const App = () => {
  const fetchPlaces = async () => {
    let response = await fetch("https://dog.ceo/api/breeds/image/random");
    let places = await response.json();
    console.log(places);
  };
  return (
    <div>
      <button onClick={fetchPlaces}>Click Me</button>
      <a href="https://www.shopgonegirlz.com/" target="_blank">
        Click me if maclo stinks...
      </a>
      <br></br>
      <input type="text" placeholder="Search place to eat..." />
    </div>
  );
};

export default App;
