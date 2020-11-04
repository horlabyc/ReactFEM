const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

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
ReactDOM.render(React.createElement(App), document.getElementById("root"));
