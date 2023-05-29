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

// const Bouncer = (props) => {
//     let reply;
//     if (props.age < 18) {
//       reply = "Sorry kid, you cant come in";
//     } else if (props.age < 21) {
//       reply = "You can come in but no drinking!";
//     } else {
//       reply = "Come in and drink";
//     }
//     return (
//       <div>
//         <p>
//           <b> Bouncer:</b> How old are you?
//         </p>
//         <p>
//           <b>You:</b> I'm {props.age} years old
//         </p>
//         <p>
//           <b>Bouncer:</b> {reply}
//         </p>
//       </div>
//     );
//   };
