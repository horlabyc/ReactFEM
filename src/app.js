import React from 'react';
import { render } from 'react-dom'
import Pet from './Pet';

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Major", animal: "Dog", breed: "Rot" }),
    React.createElement(Pet, {
        name: "Luna",
        animal: "Goat",
        breed: "Sokoto-gudali",
    }),
    React.createElement(Pet, {
        name: "Tim",
        animal: "Rabbit",
        breed: "Blan-de-hoto",
    }), 
    ]);
};
render(React.createElement(App), document.getElementById("root"));
