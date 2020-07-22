import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      id={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <Avatar imgSrc="https://avatars0.githubusercontent.com/u/32939546?s=460&u=ad7d7482303ac0be157607acebdae8e03fa912c4&v=4" />
      <h1 className="heading">My Contacts</h1>

      {contacts.map(createCard)}
    </div>
  );
}

export default App;
