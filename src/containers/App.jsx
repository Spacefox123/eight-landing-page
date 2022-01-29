import React, { useState } from "react";
import Slide from "../components/Slide";
import "tachyons";
import "./App.css";

const App = () => {
  const [card1, setCard1] = useState([
    "Eurotees",
    "../images/eurotees.jpg",
    "https://www.eurotees.eu/",
  ]);
  const [card2, setCard2] = useState([
    "DamnPlastic",
    "../images/damnplastic.png",
    "https://www.damnplastic.com/",
  ]);

  return (
    <main>
      <div className="container">
        <Slide props={card1} />
        <Slide props={card2} />
      </div>
    </main>
  );
};

export default App;
