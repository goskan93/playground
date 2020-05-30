import React from "react";
import "./Home.css";
import Cube from "../../components/Cube/Cube";

const Home = () => (
  <div className="Home">
    <h1>Play online game</h1>
    <h3>Have some fun with our collection of fun, online games!</h3>

    <div style={{ width: "120px", height: "120px", position: "relative", margin: "6rem auto" }}>
      <Cube />
    </div>
  </div>
);

export default Home;
