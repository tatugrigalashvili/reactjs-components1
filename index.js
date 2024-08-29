import React from "react";
import ReactDOM from "react-dom/client";
import Component from "./Component";

class App extends React.Component{
  render() {
    return(
      <Component></Component>
    )
  }
}

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App></App>)