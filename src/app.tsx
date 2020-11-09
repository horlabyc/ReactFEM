import React, { useState, lazy, Suspense } from "react";
import { render } from "react-dom";
import { Link, Router } from '@reach/router';
import ThemeContext from './context/themeContext';
import SearchParams from "./searchparams";
// import NavBar from './navbar';

const Details = lazy(() => import('./details'));

const App = () => {
  const themeHook = useState('peru');

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          {/* <NavBar /> */}
          <header>
            <Link to="'/">Adopt me</Link>
          </header>
          <Suspense fallback={<h1>loading route...</h1>}>
            <Router>
              <SearchParams path="/" />
              <Details path="/details/:id" />
            </Router>
          </Suspense>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};
render(<App />, document.getElementById("root"));
