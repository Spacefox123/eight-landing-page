import React, { Component } from "react";
import Slide from "../components/Slide";
import Foot from "../components/Foot";
import "tachyons";
import "./App.css";

class App extends Component {
  render() {
    const card1 = {
      name: "Eurotees",
      image: require("../images/eurotees.jpg"),
      link: "https://www.eurotees.eu/",
    };

    const card2 = {
      name: "Damn Plastic",
      image: require("../images/damnplastic.png"),
      link: "https://www.damnplastic.com/",
    };

    return (
      <main>
        <div className="layout">
          <Slide props={card1} />
          <Slide props={card2} />
        </div>
        <Foot />
      </main>
    );
  }
}

export default App;
