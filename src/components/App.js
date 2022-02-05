import React from "react";
import "../App.css";

const App = () => {
  let response = fetch(url);
  return (
    <div class="searchbar">
      <h2>Where to eat?</h2>

      <input type="text" placeholder="Search restaurant..." />
    </div>
  );
};

export default App;
