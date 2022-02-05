import React, { useState } from "react";
import "../App.css";

const App = () => {
  const [url, setUrl] = useState("");

  const fetchPlaces = async () => {
    let response = await fetch("https://dog.ceo/api/breeds/image/random");
    let places = await response.json();

    setUrl(places.message);
  };

  return (
    <div className="searchbar">
      <h2>Where to eat?</h2>

      <input type="text" placeholder="Search restaurant..." />
      <button onClick={fetchPlaces}>Click me</button>
      <img src={url} />
    </div>
  );
};

export default App;
