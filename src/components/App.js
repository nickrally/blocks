import React from "react";
import Repo from "./Repo";
import Node from "./Node";
import "./App.css";

function App() {
  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      <div className="row" style={{ height: "100%" }}>
        <div className="col-6" style={{ height: "100%", padding: "20px" }}>
          <Repo />
        </div>
        <div className="col-6" style={{ height: "100%", padding: "20px" }}>
          <Node />
        </div>
      </div>
    </div>
  );
}

export default App;
