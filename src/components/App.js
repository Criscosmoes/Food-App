import React from "react";
import "../App.css";

const App = () => {
  let response = fetch(url);
  return (
    <div>
      <a href="https://www.shopgonegirlz.com/" target="_blank">
        Click me if maclo stinks...
      </a>
      <br></br>
      <input type="text" placeholder="Search place to eat..." />
    </div>
  );
};

export default App;
