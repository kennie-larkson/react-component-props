import React from "react";
import Avatar from "./Avatar";
import Details from "./details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <p className="info">{props.id}</p>
        <h2 className="name">{props.name}</h2>
        <Avatar imgSrc={props.img} />
      </div>
      <div className="bottom">
        <Details detailInfo={props.tel} />
        <Details detailInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
