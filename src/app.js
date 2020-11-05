import React, { useState } from "react";
import { render } from "react-dom";
import { Link, Router } from '@reach/router';
import ThemeContext from './context/themeContext';
import SearchParams from "./searchparams";
import Details from './details';

const App = () => {
  const themeHook = useState('peru');

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
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
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};
render(<App />, document.getElementById("root"));
