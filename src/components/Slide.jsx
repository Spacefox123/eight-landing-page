import React from "react";

function Slide(props) {
  return (
    <div>
      <a href={props[0]}>
        <p>Test</p>
        <h1>{props[2]}</h1>
        <img src={props[1]} alt=" " />
      </a>
    </div>
  );
}

export default Slide;
