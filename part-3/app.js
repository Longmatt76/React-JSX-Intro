const App = () => (
  <div>
    <Person
      name="Buster"
      age={18}
      hobbies={["eating", "sleeping", "pooping on floor", "pissing off Kittyface"]}
    />

    <Person 
    name="Kittyface"
    age={17}
    hobbies={["punching Buster", "follow Matt", "sleeping", "EXTRA GRAVY!!!"]}
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));