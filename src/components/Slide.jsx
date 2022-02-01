import React from "react";
import "animate.css";

const Slide = ({ props }) => {
  let side;
  switch (props.name) {
    case "Eurotees":
      side = "animate__animated animate__fadeInLeft";
      break;
    case "Damn Plastic":
      side = "animate__animated animate__fadeInRight";
      break;
    default:
      break;
  }

  return (
    <div className={"br1 card " + side}>
      <div className="wrapper">
        <a href={props.link}>
          <img src={props.image} alt=" " className="image" />
          <div class="middle">
            <div class="text">{props.name}</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Slide;
