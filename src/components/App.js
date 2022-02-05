import React from "react";
import "../App.css";

const App = () => {
  const fetchPlaces = async () => {
    let response = await fetch("https://dog.ceo/api/breeds/image/random");
    let places = await response.json();
    console.log(places);
  };

  return (
    <div class="searchbar">
      <h2>Where to eat?</h2>

      <input type="text" placeholder="Search restaurant..." />
      <button onClick={fetchPlaces}>Click me</button>
    </div>
  );
};

export default App;
