import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";


function App() {
  return (
    <div>
      <Avatar imgSrc="https://avatars0.githubusercontent.com/u/32939546?s=460&u=ad7d7482303ac0be157607acebdae8e03fa912c4&v=4"/>
      <h1 className="heading">My Contacts</h1>

      <Card
        name={contacts[0].name}
        // img={contacts[0].imgURL
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
