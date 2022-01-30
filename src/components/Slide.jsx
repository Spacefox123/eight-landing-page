import React from "react";
import "animate.css";

const Slide = ({ props }) => {
  let side;
  switch (props.name) {
    case "Eurotees":
      side = "animate__animated animate__fadeInLeft";
      break;
    case "DamnPlastic":
      side = "animate__animated animate__fadeInRight";
      break;
    default:
      break;
  }

  return (
    <div className={"grow br1 card " + side}>
      <a href={props.link}>
        <h1 className="f1 center">{props.name}</h1>

        <img src={props.image} alt=" " className="br2 blur img-fluid" />
      </a>
    </div>
  );
};

export default Slide;
