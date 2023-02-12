import React from "react";
import Avatar from "./Avatar";

export default function Profile({ img, name, title, isNew }) {
  return (
    <div className="profile">
      <Avatar img={img} isNew={isNew} />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
