import React from "react";
import "./Card.css";

const card = ({ name, email, id }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow5">
      <img
        className="robot-size"
        alt="robots"
        src={`https://robohash.org/${id}`}
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default card;
