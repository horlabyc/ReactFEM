import React from "react";
import { render } from "react-dom";
import { Link, Router } from '@reach/router';
import SearchParams from "./searchparams";
import Details from './details';

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">
          Adopt me!
        </Link>
      </header>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};
render(<App />, document.getElementById("root"));
