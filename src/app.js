import React from 'react';
import { render } from 'react-dom'
import Pet from './Pet';

const App = () => {
    return (
        <div>
            <h1 id="something-important">Addopt me</h1>
            <Pet name="Major" animal="Dog" breed="Rotweiler" />
            <Pet name="Luna" animal="Goat" breed="Sokoto-guadali" />
            <Pet name="Tim" animal="Rabbit" breed="Blan-de-hoto"/>
        </div>
    )
};
render(<App />, document.getElementById("root"));
