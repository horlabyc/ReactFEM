import React from "react";
import { render } from "react-dom";
import SearchParams from "./searchparams";

const App = () => {
  return (
    <div>
      <h1>Adopt me</h1>
      <SearchParams />
    </div>
  );
};
render(<App />, document.getElementById("root"));
