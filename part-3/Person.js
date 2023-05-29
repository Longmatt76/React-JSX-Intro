const Person = (props) => {
  let additional;
  if (props.age >= 18) {
    additional = "Vote if you feel like it matters";
  } else {
    additional = "You're too young and stupid to vote";
  }


  return (
    <div>
      <p> "Learn some information about this person!"</p>
      <h2> Name: {props.name.slice(0,6)}</h2>
      <h2>
        {" "}
        Age: {props.age}, <h3>{additional}</h3>
      </h2>
      <h2>
        {" "}
        Hobbies:{" "}
        <ul>
          {props.hobbies.map((hobby) => {
           return <li>{hobby}</li>;
          })}
        </ul>
      </h2>
    </div>
  );
};
